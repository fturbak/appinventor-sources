
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
#|
List implementation.

The list operations are

Block name               Kawa implementation
- make list               (make-yail-list . args)
- select list item        (yail-list-get-item yail-list index)
- replace list item       (yail-list-set-item! yail-list index value)
- remove list item        (yail-list-remove-item! yail-list index)
- length of list          (yail-list-length yail-list)
- copy list               (yail-list-copy list)
- list to csv row         (yail-list-to-csv-row list)
- list to csv table       (yail-list-to-csv-table list)
- list from csv row       (yail-list-from-csv-row text)
- list from csv table     (yail-list-from-csv-table text)
;; First and rest are removed
;; - first in list           (yail-list-first yail-list)
;; - rest of list            (yail-list-rest yail-list)
- append to list            (yail-list-append! yail-list-A yail-list-B)
- add items to list       (yail-list-add-to-list! yail-list . items)
- insert into list        (yail-list-insert-item! yail-list index item)
- is in list?             (yail-list-member? object yail-list)
- position in list       (yail-list-index item list)
- for each                (foreach variable bodyform yail-list) [macro] [in control drawer]
- pick random item        (yail-list-pick-random yail-list)
- is list?                (yail-list? object)
- is empty?               (yail-list-empty? yail-list)
- lookup in pairs         (yail-alist-lookup key yail-list-of-pairs default)

Lists in App Inventor are implemented as "Yail lists".  A Yail list is
a Java pair whose car is a distinguished token
defined in components/util/YailConstants.java.

TODO(halabelson): Note this token is forgeable.  Think about the implications of this
for making lists persistent, and also the dangers of forging the token.

Unlike Lisp, we do not define a variable "nil" that is
the empty list, since that can be side-effected.  To get the empty
list, use the make-yail-list constructor with no arguments.
|#


;;Note: This should be the same symbol as YAIL_HEADER, defined in YailConstants.java
(define *yail-list* '*list*)

;; Implements the Blocks is-a-list? operation
(define (yail-list? x)
  (and (yail-list-candidate? x)
       (instance? x YailList)))

(define (yail-list-candidate? x)
  (and (pair? x) (equal? (car x) *yail-list*)))

(define (yail-list-contents yail-list)
  (cdr yail-list))

(define (set-yail-list-contents! yail-list contents)
  (set-cdr! yail-list contents))

(define (insert-yail-list-header x)
  (YailList:makeList x))

;; these transformers between yail-lists and kawa-lists transform
;; the entire tree, not just the top-level list
;; WARNING: These transformers assume that yail lists will be the only
;; App Inv data types that are represented as Kawa pairs.

;; Recursively add the list header at each node of the tree.
;; It passes through unchanged any Yail list in the tree, on the assumption that
;; Yail lists can appear in the runtime only if their components are either yail lists
;; or sanitized atomic objects.
(define (kawa-list->yail-list x)
  (cond ((null? x) (make YailList))
        ;;TODO(halabeslon): Do we really need to sanitize atomic elements here?
        ((not (pair? x)) (sanitize-atomic x))
        ((yail-list? x) x)
        (else (YailList:makeList (map kawa-list->yail-list x)))))

;;; To transform a yail list to a kawa-list,  strip off the *list* header at each node of the tree
(define (yail-list->kawa-list data)
  (if (yail-list? data)
      (map yail-list->kawa-list (yail-list-contents data))
      data))


;; Implements the Blocks is-empty? operation
;; The primitive here can be called on any argument, not just lists
;; But the Blocks language enforces that the argument must be a list.
;; TODO(halabelson): Is this the right choice?
(define (yail-list-empty? x)
  (and (yail-list? x) (null? (yail-list-contents x))))


(define (make-yail-list . args)
  (YailList:makeList args))

;;; does a deep copy of the yail list yl
;;; assumes yl is a real yail list, with all
;;; atomic elements sanitized
(define (yail-list-copy yl)
  (cond ((yail-list-empty? yl) (make YailList))
        ((not (pair? yl)) yl)
        (else (YailList:makeList (map yail-list-copy (yail-list-contents yl))))))

;;; converts a yail list to a CSV-formatted table and returns the text.
;;; yl should be a YailList, each element of which is a YailList as well.
;;; inner list elements sanitized
(define (yail-list-to-csv-table yl)
  (if (not (yail-list? yl))
    (signal-runtime-error "Argument value to \"list to csv table\" must be a list" "Expecting list")
    (CsvUtil:toCsvTable (apply make-yail-list (map convert-to-strings (yail-list-contents yl))))))

;;; converts a yail list to a CSV-formatted row and returns the text.
;;; yl should be a YailList
;;; atomic elements sanitized
(define (yail-list-to-csv-row yl)
  (if (not (yail-list? yl))
    (signal-runtime-error "Argument value to \"list to csv row\" must be a list" "Expecting list")
    (CsvUtil:toCsvRow (convert-to-strings yl))))

;; convert each element of YailList yl to a string and return the resulting YailList
(define (convert-to-strings yl)
  (cond ((yail-list-empty? yl) yl)
    ((not (yail-list? yl)) (make-yail-list yl))
    (else (apply make-yail-list (map coerce-to-string (yail-list-contents yl))))))

;;; converts a CSV-formatted table text to a yail list of lists
(define (yail-list-from-csv-table str)
  (try-catch
    (CsvUtil:fromCsvTable str)
    (exception java.lang.Exception
      (signal-runtime-error
        "Cannot parse text argument to \"list from csv table\" as a CSV-formatted table"
        (exception:getMessage)))))

;;; converts a CSV-formatted row text to a yail list of fields
(define (yail-list-from-csv-row str)
  (try-catch
    (CsvUtil:fromCsvRow str)
    (exception java.lang.Exception
      (signal-runtime-error
        "Cannot parse text argument to \"list from csv row\" as CSV-formatted row"
        (exception:getMessage)))))

;; TODO(markf): The following version of make-yail-list does not work
;; if we try to initialize a global variable to a list when a
;; form is created.  It _does_ work if we initialize the global
;; variable in the initialization for a component.  Is this
;; a Kawa bug that is somehow interacting with form creation?
;;
;; (define (make-yail-list .  args)
;;   (insert-yail-list-header (apply list args)))


;; Implements the Blocks length operation
(define (yail-list-length yail-list)
  (length (yail-list-contents yail-list)))

;; These are removed, to simplify the API to lists
;; ;; Implements the Blocks first operation
;; (define (yail-list-first yail-list)
;;   (if (yail-list-empty? yail-list)
;;       (signal-runtime-error
;;        "Attempt to take FIRST of an empty list"
;;        "list operation"))
;;   (car (yail-list-contents yail-list)))

;; ;; Implements the Blocks rest operation
;; (define (yail-list-rest yail-list)
;;   (if (yail-list-empty? yail-list)
;;       (signal-runtime-error
;;        "Attempt to take REST of an empty list"
;;        "list operation"))
;;   (insert-yail-list-header (cdr (yail-list-contents yail-list))))


;; Implements the Blocks index in list operation
;; returns the 1-based index of the object in the list
;; returns 0 if object not in list
(define (yail-list-index object yail-list)
  (let loop ((i 1) (list (yail-list-contents yail-list)))
    (cond ((null? list) 0)
          ((yail-equal? object (car list)) i)
          (else (loop (+ i 1) (cdr list))))))

(define (list-head lst n)
  (if (= n 0) 
    '()
     (cons (car lst) (list-head (cdr lst) (- n 1)))))

;; Implements the Blocks set list item operation
(define (yail-list-set-item! yail-list index value)
  (if (< index 1)
      (signal-runtime-error
       (format #f "Replace list item: Attempt to replace item number ~A of the list ~A.  The minimum valid item number is 1."
               index
               (get-display-representation yail-list))
       "List index smaller than 1"))
  (let ((len (yail-list-length yail-list)))
    (if (> index len)
        (signal-runtime-error
         (format #f "Replace list item: Attempt to replace item number ~A of a list of length ~A: ~A"
                 index
                 len
                 (get-display-representation yail-list))
         "List index too large")))
  (set-car! (list-tail (yail-list-contents yail-list) (- index 1)) value))

(define (yail-list-set-item yail-list index value)
  (if (< index 1)
      (signal-runtime-error
       (format #f "Replace list item: Attempt to replace item number ~A of the list ~A.  The minimum valid item number is 1."
               index
               (get-display-representation yail-list))
       "List index smaller than 1"))
  (let ((len (yail-list-length yail-list)))
    (if (> index len)
        (signal-runtime-error
         (format #f "Replace list item: Attempt to replace item number ~A of a list of length ~A: ~A"
                 index
                 len
                 (get-display-representation yail-list))
         "List index too large")))
  (kawa-list->yail-list 
    (append (list-head (yail-list-contents yail-list) (- index 1)) (cons value (list-tail (yail-list-contents yail-list) index)))))

;; Implements the Blocks remove list item operation
;; We have to operate on the yail-list itself, not the contents
(define (yail-list-remove-item! yail-list index)
  (let ((index2 (coerce-to-number index)))
    (if (eq? index2 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Remove list item: index -- ~A -- is not a number" (get-display-representation index))
         "Bad list index"))
    (if (yail-list-empty? yail-list)
        (signal-runtime-error
         (format #f "Remove list item: Attempt to remove item ~A of an empty list"  (get-display-representation index))
         "Invalid list operation"))
    (if (< index2 1)
        (signal-runtime-error
         (format #f
                 "Remove list item: Attempt to remove item ~A of the list ~A.  The minimum valid item number is 1."
                 index2
                 (get-display-representation yail-list))
         "List index smaller than 1"))
    (let ((len (yail-list-length yail-list)))
      (if (> index2 len)
          (signal-runtime-error
           (format #f "Remove list item: Attempt to remove item ~A of a list of length ~A: ~A"
                   index2
                   len
                   (get-display-representation yail-list))
           "List index too large"))
      (let ((pair-pointing-to-deletion (list-tail yail-list (- index2 1))))
        (set-cdr! pair-pointing-to-deletion (cddr pair-pointing-to-deletion))))))

(define (yail-list-remove-item yail-list index)
  (let ((index2 (coerce-to-number index)))
    (if (eq? index2 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Remove list item: index -- ~A -- is not a number" (get-display-representation index))
         "Bad list index"))
    (if (yail-list-empty? yail-list)
        (signal-runtime-error
         (format #f "Remove list item: Attempt to remove item ~A of an empty list"  (get-display-representation index))
         "Invalid list operation"))
    (if (< index2 1)
        (signal-runtime-error
         (format #f
                 "Remove list item: Attempt to remove item ~A of the list ~A.  The minimum valid item number is 1."
                 index2
                 (get-display-representation yail-list))
         "List index smaller than 1"))
    (let ((len (yail-list-length yail-list)))
      (if (> index2 len)
          (signal-runtime-error
           (format #f "Remove list item: Attempt to remove item ~A of a list of length ~A: ~A"
                   index2
                   len
                   (get-display-representation yail-list))
           "List index too large"))
      (kawa-list->yail-list 
        (append (list-head (yail-list-contents yail-list) (- index 1)) (list-tail (yail-list-contents yail-list) index))))))

;; Implements the Blocks insert list item operation
;; Inserts the new item to be at the index of the augmented list,
;; Given how we number yail list items, this means that the
;; valid range for index is from 1 through the length of the list plus 1
(define (yail-list-insert-item! yail-list index item)
  (let ((index2 (coerce-to-number index)))
    (if (eq? index2 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Insert list item: index (~A) is not a number" (get-display-representation index))
         "Bad list index"))
    (if (< index2 1)
        (signal-runtime-error
         (format #f
                 "Insert list item: Attempt to insert item ~A into the list ~A.  The minimum valid item number is 1."
                 index2
                 (get-display-representation yail-list))
         "List index smaller than 1"))
    (let ((len+1 (+ (yail-list-length yail-list) 1)))
      (if (> index2 len+1)
          (signal-runtime-error
           (format #f
                   "Insert list item: Attempt to insert item ~A into the list ~A.  The maximum valid item number is ~A."
                   index2
                   (get-display-representation yail-list)
                   len+1)
           "List index too large"))
      (let ((contents (yail-list-contents yail-list)))
        (if (= index2 1)
            (set-yail-list-contents! yail-list (cons item contents))
            (let ((at-item (list-tail contents (- index2 2))))
              (set-cdr! at-item (cons item (cdr at-item)))))))))
              
(define (yail-list-insert-item yail-list index item)
  (let ((index2 (coerce-to-number index)))
    (if (eq? index2 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Insert list item: index (~A) is not a number" (get-display-representation index))
         "Bad list index"))
    (if (< index2 1)
        (signal-runtime-error
         (format #f
                 "Insert list item: Attempt to insert item ~A into the list ~A.  The minimum valid item number is 1."
                 index2
                 (get-display-representation yail-list))
         "List index smaller than 1"))
    (let ((len+1 (+ (yail-list-length yail-list) 1)))
      (if (> index2 len+1)
          (signal-runtime-error
           (format #f
                   "Insert list item: Attempt to insert item ~A into the list ~A.  The maximum valid item number is ~A."
                   index2
                   (get-display-representation yail-list)
                   len+1)
           "List index too large"))
      (let ((contents (yail-list-contents yail-list)))
        (if (= index2 1)
            (kawa-list->yail-list (cons item contents))
            (kawa-list->yail-list 
              (append (list-head (yail-list-contents yail-list) (- index2 1)) 
                      (cons item (list-tail (yail-list-contents yail-list) (- index2 1))))))))))

;; Extends list A by appending the elements of list B to it
;; Modifies list A
;; Implements blocks append operation
(define (yail-list-append! yail-list-A yail-list-B)
  ;; Unlike Scheme, we copy the tail so there's no shared tail
  ;; between the augmented list and the source of the added elements.
  ;; But like Python, we do a shallow copy, so that substructure is
  ;; shared.
  (define (list-copy l)
    (if (null? l)
    '()
    (cons (car l) (list-copy (cdr l)))))
  ;; We have to operate on the yail-list itself, not the contents, because
  ;; the contents might be empty
  (set-cdr! (list-tail yail-list-A (length (yail-list-contents yail-list-A)))
        (list-copy (yail-list-contents yail-list-B))))

(define (yail-list-append yail-list-A yail-list-B)
  (kawa-list->yail-list (append (yail-list-contents yail-list-A) (yail-list-contents yail-list-B))))

;; Extend list A by appending the items to it
;; Modifies list A
;; Implements blocks add to list operation
(define (yail-list-add-to-list! yail-list . items)
  (yail-list-append! yail-list (apply make-yail-list items)))

(define (yail-list-add-to-list yail-list . items)
  (yail-list-append yail-list (apply make-yail-list items)))

;;;TODO(halabelson): BUG!  We need to recognize that "1" is
;;; a member of (1 2 3)

;; Implements the blocks member? operation
;; This returns true or false (unlike Scheme's member primitive)
(define (yail-list-member? object yail-list)
  (let ((result (member object (yail-list-contents yail-list) yail-equal?)))
    (if result #t #f)))

;; Returns an element chosen at random from the list
(define (yail-list-pick-random yail-list)
  (if (yail-list-empty? yail-list)
      (signal-runtime-error
       (format #f "Pick random item: Attempt to pick a random element from an empty list")
       "Invalid list operation"))
  (yail-list-get-item yail-list
              (random-integer 1  (yail-list-length yail-list))))

;; Implements Blocks foreach, which takes a Yail-list as argument
;; This is called by Yail foreach, defined in macros.scm

(define (yail-for-each proc yail-list)
  (let ((verified-list (coerce-to-yail-list yail-list)))
    (if (eq? verified-list *non-coercible-value*)
        (signal-runtime-error
         (format #f
                 "The second argument to foreach is not a list.  The second argument is: ~A"
                 (get-display-representation yail-list))
         "Bad list argument to foreach")
       (begin
         (for-each proc (yail-list-contents verified-list))
          *the-null-value*))))
                                  
(define (yail-list-map proc yail-list)
  (let ((verified-list (coerce-to-yail-list yail-list)))
    (if (eq? verified-list *non-coercible-value*)
        (signal-runtime-error
         (format #f
                 "The second argument to map is not a list.  The second argument is: ~A"
                 (get-display-representation yail-list))
         "Bad list argument to map")
         (kawa-list->yail-list (map proc (yail-list-contents verified-list))))))

(define (map-destructive proc lst)
    (cond ((null? lst) *the-null-value*)
        (begin 
          (set-car! lst (proc (car lst)))
          (map-destructive proc (cdr lst))
          *the-null-value*)))

(define (yail-list-map! proc yail-list)
  (let ((verified-list (coerce-to-yail-list yail-list)))
    (if (eq? verified-list *non-coercible-value*)
        (signal-runtime-error
         (format #f
                 "The second argument to map is not a list.  The second argument is: ~A"
                 (get-display-representation yail-list))
         "Bad list argument to map")
         (map-destructive proc (yail-list-contents verified-list)))))
          
(define (yail-list-filter pred yail-list)
  (let ((verified-list (coerce-to-yail-list yail-list)))
    (if (eq? verified-list *non-coercible-value*)
        (signal-runtime-error
         (format #f
                 "The second argument to filter is not a list.  The second argument is: ~A"
                 (get-display-representation yail-list))
         "Bad list argument to filter")
        (kawa-list->yail-list (filter pred (yail-list-contents verified-list))))))

(define (yail-list-filter! pred yail-list)
  (let ((verified-list (coerce-to-yail-list yail-list)))
    (if (eq? verified-list *non-coercible-value*)
        (signal-runtime-error
         (format #f
                 "The second argument to filter is not a list.  The second argument is: ~A"
                 (get-display-representation yail-list))
         "Bad list argument to map")
        (set-cdr! verified-list (filter pred (yail-list-contents verified-list))))))
         
(define (yail-list-reduce ans binop yail-list)
  (define (reduce accum func lst)
      (cond ((null? lst) accum)
            (else (reduce (func accum (car lst)) func (cdr lst))))) 
  (let ((verified-list (coerce-to-yail-list yail-list)))
    (if (eq? verified-list *non-coercible-value*)
        (signal-runtime-error
         (format #f
                 "The second argument to reduce is not a list.  The second argument is: ~A"
                 (get-display-representation yail-list))
         "Bad list argument to reduce")
        (kawa-list->yail-list (reduce ans binop (yail-list-contents verified-list)))))) 
        
(define (reverse-list lst)
    (cond ((null? lst) lst)
          ((null? (cdr lst)) lst)
          (else (append (reverse-list (cdr lst)) (list (car lst))))))

(define (yail-list-reverse yl)
  (kawa-list->yail-list (reverse-list (yail-list-contents yl))))

(define (yail-list-reverse! y1)
  (set-cdr! y1 (reverse-list (yail-list-contents y1))))

;;Implements a generic sorting procedure that works on lists of any type.
         
(define typeordering '(boolean number text list component))

(define (typeof val)
	(cond ((boolean? val) 'boolean)
		  ((number? val) 'number)
		  ((string? val) 'text)
		  ((yail-list? val) 'list)
		  ((instance? val com.google.appinventor.components.runtime.Component) 'component)
		  (else (signal-runtime-error 
		  		  (format #f
                          "typeof called with unexpected value: ~A"
                          (get-display-representation val))
         		   "Bad arguement to typeof"))))

(define (indexof element list)
	(list-index (lambda (x) (eq? x element)) list))
		  
(define (type-lt? type1 type2)
	(< (indexof type1 typeordering) 
	   (indexof type2 typeordering)))	

(define (is-lt? val1 val2)
    (let ((type1 (typeof val1)) 
    	  (type2 (typeof val2)))
     (or (type-lt? type1 type2) 
      	 (and (eq? type1 type2) 
      	       (cond ((eq? type1 'boolean) (boolean-lt? val1 val2))
      	             ((eq? type1 'number) (< val1 val2))
      	             ((eq? type1 'text) (string<? val1 val2))
      	             ((eq? type1 'list) (list-lt? val1 val2))
      	             ((eq? type1 'component) (component-lt? val1 val2))
      	             (else (signal-runtime-error 
		  		            (format #f
		  		                    "(islt? ~A ~A)"
                                    (get-display-representation val1) 
                                    (get-display-representation val2))
         		            "Shouldn't happen")))))))
 
(define (is-eq? val1 val2)
    (let ((type1 (typeof val1)) 
    	  (type2 (typeof val2)))
      (and (eq? type1 type2) 
      	   (cond ((eq? type1 'boolean) (boolean-eq? val1 val2))
      	         ((eq? type1 'number) (= val1 val2))
      	         ((eq? type1 'text) (string=? val1 val2))
      	         ((eq? type1 'list) (list-eq? val1 val2))
      	         ((eq? type1 'component) (component-eq? val1 val2))
      	         (else (signal-runtime-error 
		  		            (format #f
		  		                    "(islt? ~A ~A)"
                                    (get-display-representation val1) 
                                    (get-display-representation val2))
         		            "Shouldn't happen")))))) 
                     
(define (is-leq? val1 val2)
    (let ((type1 (typeof val1)) 
    	  (type2 (typeof val2)))
      (or (type-lt? type1 type2) 
      	  (and (eq? type1 type2) 
      	       (cond ((eq? type1 'boolean) (boolean-leq? val1 val2))
      	             ((eq? type1 'number) (<= val1 val2))
      	             ((eq? type1 'text) (string<=? val1 val2))
      	             ((eq? type1 'list) (list-leq? val1 val2))
      	             ((eq? type1 'component) (component-leq? val1 val2))
      	             (else (signal-runtime-error 
		  		            (format #f
		  		                    "(isleq? ~A ~A)"
                                    (get-display-representation val1) 
                                    (get-display-representation val2))
         		            "Shouldn't happen")))))))

;;false is less than true
(define (boolean-lt? val1 val2)
	(and (not val1) val2))

(define (boolean-eq? val1 val2)
	(or (and val1 val2)
		(and (not val1) (not val2)))) 
    
(define (boolean-leq? val1 val2)
	(not (and val1 (not val2))))

(define (list-lt? y1 y2)
	(define (helper-list-lt? lst1 lst2)
		(cond ((and (null? lst1) (null? lst2)) #t)
        	  ((null? lst1) #t)
              ((null? lst2) #f)
              ((is-lt? (car lst1) (car lst2)) (helper-list-lt? (cdr lst1) (cdr lst2)))
              (else #f)))
	(helper-list-lt? (yail-list-contents y1) (yail-list-contents y2)))

(define (list-eq? y1 y2)
	(define (helper-list-eq? lst1 lst2)
    	(cond ((and (null? lst1) (null? lst2)) #t)
              ((is-eq? (car lst1) (car lst2)) (helper-list-eq? (cdr lst1) (cdr lst2)))
              (else #f)))
	(helper-list-eq? (yail-list-contents y1) (yail-list-contents y2)))

(define (list-leq? y1 y2)
  	(define (helper-list-leq? lst1 lst2)
    	(cond ((and (null? lst1) (null? lst2)) #t)
              ((null? lst1) #t)
              ((null? lst2) #f)
              ((is-leq? (car lst1) (car lst2)) (helper-list-leq? (cdr lst1) (cdr lst2)))
              (else #f)))
	(helper-list-leq? (yail-list-contents y1) (yail-list-contents y2)))

;;Component are first compared using their class names. If they are instances of the same class,
;;then they are compared using their hashcodes.
(define (component-lt? comp1 comp2)
	(or (string<? (*:getSimpleName (*:getClass comp1))
                  (*:getSimpleName (*:getClass comp2)))
        (and (string=? (*:getSimpleName (*:getClass comp1))
                       (*:getSimpleName (*:getClass comp2)))
             (< (*:hashCode comp1)
                (*:hashCode comp2)))))

(define (component-eq? comp1 comp2)
	(and (string=? (*:getSimpleName (*:getClass comp1))
                   (*:getSimpleName (*:getClass comp2)))
         (= (*:hashCode comp1)
            (*:hashCode comp2))))

(define (component-leq? comp1 comp2)
	(or (string<? (*:getSimpleName (*:getClass comp1))
                  (*:getSimpleName (*:getClass comp2)))
        (and (string=? (*:getSimpleName (*:getClass comp1))
                       (*:getSimpleName (*:getClass comp2)))
             (<= (*:hashCode comp1)
                 (*:hashCode comp2)))))
 
(define (merge lessthan? lst1 lst2)
	(cond ((null? lst1) lst2)
		  ((null? lst2) lst1)
		  ((lessthan? (car lst1) (car lst2)) (cons (car lst1) (merge lessthan? (cdr lst1) lst2)))
		  (else (cons (car lst2) (merge lessthan? lst1 (cdr lst2)))))) 

(define (mergesort lessthan? lst)
	(cond ((null? lst) lst)
		  ((null? (cdr lst)) lst)
		  (else (merge lessthan? (mergesort lessthan? (take lst (quotient (length lst) 2)))
			  				     (mergesort lessthan? (drop lst (quotient (length lst) 2))))))) 
 
(define (yail-list-sort y1)
	(cond ((yail-list-empty? y1) (make YailList))
          ((not (pair? y1)) y1)
          (else (kawa-list->yail-list (mergesort is-leq? (yail-list-contents y1))))))

(define (yail-list-sort! y1)
  (cond ((yail-list-empty? y1) (make YailList))
          ((not (pair? y1)) y1)
          (else 
              (set-cdr! y1 (mergesort is-leq? (yail-list-contents y1))))))
                         			   	        
(define (yail-list-sort-comparator lessthan? y1)                                           
	(cond ((yail-list-empty? y1) (make YailList))
          ((not (pair? y1)) y1)
          (else (kawa-list->yail-list (mergesort lessthan? (yail-list-contents y1))))))
 
(define (yail-list-sort-comparator! lessthan? y1)                                           
	(cond ((yail-list-empty? y1) (make YailList))
          ((not (pair? y1)) y1)
          (else 
              (set-cdr! y1 (mergesort lessthan? (yail-list-contents y1))))))
 
(define (merge-key lessthan? key lst1 lst2)
		(cond ((null? lst1) lst2)
			  ((null? lst2) lst1)
			  ((lessthan? (key (car lst1)) (key (car lst2))) (cons (car lst1) (merge-key lessthan? key (cdr lst1) lst2)))
			  (else (cons (car lst2) (merge-key lessthan? key lst1 (cdr lst2)))))) 

(define (mergesort-key lessthan? key lst)
		(cond ((null? lst) lst)
			  ((null? (cdr lst)) lst)
			  (else (merge-key lessthan? key (mergesort-key lessthan? key (take lst (quotient (length lst) 2)))
			  				             (mergesort-key lessthan? key (drop lst (quotient (length lst) 2)))))))  
       
(define (yail-list-sort-key key y1) 
	(cond ((yail-list-empty? y1) (make YailList))
          ((not (pair? y1)) y1)
          (else (kawa-list->yail-list (mergesort-key is-leq? key (yail-list-contents y1))))))

(define (yail-list-sort-key! key y1)
  (cond ((yail-list-empty? y1) (make YailList))
          ((not (pair? y1)) y1)
          (else 
              (set-cdr! y1 (mergesort-key is-leq? key (yail-list-contents y1)))))) 

(define (list-min lst)
  (cond ((null? lst) '())
        ((null? (cdr lst)) (car lst))
        ((is-leq? (car lst) (list-min (cdr lst))) (car lst))
        (else (list-min (cdr lst)))))           

(define (yail-list-minimum yail-list)
  (let ((contents (yail-list-contents yail-list)))
    (if (null? contents) 
        (signal-runtime-error
        (format #f 
                "The list cannot be empty")
                "Bad list argument to yail-list-minimum")
        (list-min contents))))

(define (list-max lst)
  (cond ((null? lst) '())
        ((null? (cdr lst)) (car lst))
        ((is-leq? (list-max (cdr lst)) (car lst)) (car lst))
        (else (list-max (cdr lst)))))
        
(define (yail-list-maximum yail-list)
  (let ((contents (yail-list-contents yail-list)))
    (if (null? contents) 
        (signal-runtime-error
        (format #f 
                "The list cannot be empty")
                "Bad list argument to yail-list-maximum")
        (list-max contents))))

(define (yail-list-but-first! yail-list)
    (let ((contents (yail-list-contents yail-list)))
        (cond ((null? contents) (signal-runtime-error
                                (format #f 
                                          "The list cannot be empty")
                                 "Bad list argument to but-first"))
              ((null? (cdr contents)) '())
              (else (set-cdr! yail-list (cdr contents))))))
         
(define (yail-list-but-first yail-list)
    (let ((contents (yail-list-contents yail-list)))
        (cond ((null? contents) (signal-runtime-error
                                (format #f 
                                          "The list cannot be empty")
                                 "Bad list argument to but-first"))
              ((null? (cdr contents)) '())
              (else (kawa-list->yail-list (cdr contents))))))

(define (but-last lst) 
    (cond ((null? lst) '())
          ((null? (cdr lst)) '())
          (else (cons (car lst) (but-last (cdr lst))))))

(define (yail-list-but-last! yail-list)
      (let ((contents (yail-list-contents yail-list)))
        (cond ((null? contents) (signal-runtime-error
                                (format #f 
                                          "The list cannot be empty")
                                 "Bad list argument to but-last"))
              (else  (set-cdr! yail-list (but-last (yail-list-contents yail-list)))))))

(define (yail-list-but-last yail-list)
      (let ((contents (yail-list-contents yail-list)))
        (cond ((null? contents) (signal-runtime-error
                                (format #f 
                                          "The list cannot be empty")
                                 "Bad list argument to but-last"))
              (else  (kawa-list->yail-list (but-last (yail-list-contents yail-list)))))))

(define (front lst n)
    (cond ((= n 1) lst)
          (else (front (cdr lst) (- n 1)))))

(define (back lst n1 n2)
    (cond ((= n1 (- n2 1)) '())
          (else (cons (car lst) (back (cdr lst) (+ n1 1) n2)))))

(define (yail-list-splice! yail-list index1 index2)
  (let ((verified-index1 (coerce-to-number index1))
       (verified-index2 (coerce-to-number index2)))
    (if (eq? verified-index1 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Insert list item: index (~A) is not a number" (get-display-representation verified-index1))
         "Bad list verified-index1"))
    (if (eq? verified-index2 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Insert list item: index (~A) is not a number" (get-display-representation verified-index2))
         "Bad list verified-index2"))
    (if (< verified-index1 1)
        (signal-runtime-error
         (format #f
                 "Splice list: Attempt to splice list ~A at index ~A. The minimum valid index number is 1."
                 (get-display-representation yail-list)
                 verified-index2)
         "List index smaller than 1"))
    (let ((len+1 (+ (yail-list-length yail-list) 1)))
      (if (> verified-index2 len+1)
          (signal-runtime-error
           (format #f
                   "Splice list: Attempt to splice list ~A at index ~A.  The maximum valid index number is ~A."
                   (get-display-representation yail-list)
                   verified-index2
                   len+1)
           "List index too large"))
      (set-cdr! yail-list (front (back (yail-list-contents yail-list) 0 verified-index2) verified-index1)))))
          
(define (yail-list-splice yail-list index1 index2)
  (let ((verified-index1 (coerce-to-number index1))
       (verified-index2 (coerce-to-number index2)))
    (if (eq? verified-index1 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Insert list item: index (~A) is not a number" (get-display-representation verified-index1))
         "Bad list verified-index1"))
    (if (eq? verified-index2 *non-coercible-value*)
        (signal-runtime-error
         (format #f "Insert list item: index (~A) is not a number" (get-display-representation verified-index2))
         "Bad list verified-index2"))
    (if (< verified-index1 1)
        (signal-runtime-error
         (format #f
                 "Splice list: Attempt to splice list ~A at index ~A. The minimum valid index number is 1."
                 (get-display-representation yail-list)
                 verified-index2)
         "List index smaller than 1"))
    (let ((len+1 (+ (yail-list-length yail-list) 1)))
      (if (> verified-index2 len+1)
          (signal-runtime-error
           (format #f
                   "Splice list: Attempt to splice list ~A at index ~A.  The maximum valid index number is ~A."
                   (get-display-representation yail-list)
                   verified-index2
                   len+1)
           "List index too large"))
      (kawa-list->yail-list (front (back (yail-list-contents yail-list) 0 verified-index2) verified-index1)))))
                                          
;; yail-for-range needs to check that its args are numeric
;; because the blocks editor can't guarantee this
(define (yail-for-range proc start end step)
  (let ((nstart (coerce-to-number start))
        (nend (coerce-to-number end))
        (nstep (coerce-to-number step)))
    (if (eq? nstart *non-coercible-value*)
        (signal-runtime-error
         (format #f "For range: the start value -- ~A -- is not a number" (get-display-representation start))
         "Bad start value"))
    (if (eq? nend *non-coercible-value*)
        (signal-runtime-error
         (format #f "For range: the end value -- ~A -- is not a number" (get-display-representation end))
         "Bad end value"))
    (if (eq? nstep *non-coercible-value*)
        (signal-runtime-error
         (format #f "For range: the step value -- ~A -- is not a number" (get-display-representation step))
         "Bad step value"))
    (yail-for-range-with-numeric-checked-args proc nstart nend nstep)))

(define (yail-for-range-with-numeric-checked-args proc start end step)
  (cond ((and (= step 0) (= start end)) (proc start))
        ((or (and (< start end) (<= step 0))
             (and (> start end) (>= step 0))
             (and (not (= start end)) (= step 0)))
         ;; (Hal) I am removing the error here, on the theory that
         ;; in thse cases the loop should simply not run
         ;; (signal-runtime-error
         ;;  (string-append
         ;;   "FOR RANGE was called with a start of "
         ;;   (number->string start)
         ;;   " and an end of "
         ;;   (number->string end)
         ;;   " and a step of "
         ;;   (number->string step)
         ;;   ". This would run forever.")
         ;;  "Bad inputs to FOR RANGE")
         *the-null-value*
         )
        (else
         (let ((stop-comparison
                (if (< step 0) < >)))
           (let loop ((i start))
             (if (stop-comparison i end)
                 *the-null-value*
                 (begin (proc i)
                        (loop (+ i step)))))))))

;;; return the yail list of integers in the range [low, high]
;;; This definition is different from range in Python, where
;;; the interval is (low, high)
(define (yail-number-range low high)
  (define (loop a b)
    (if (> a b)
        '()
        (cons a (loop (+ a 1) b))))
  (kawa-list->yail-list (loop (inexact->exact (ceiling low))
                              (inexact->exact (floor high)))))


;;; For now, we'll represent tables as lists of pairs.
;;; Note that these are Yail lists, and the implementation
;;; must take account of that.   In this implementation, keys and
;;; values can be any blocks objects.

;;; Yail-alist lookup looks up the key in a list of pairs and returns resulting match.
;;; It returns the default if the key is not in the table.
;;; Note that we can't simply use kawa assoc here, because we are
;;; dealing with Yail lists

;;; TODO(hal):  Implement dictionaries and
;;; integrate these with get JSON from web services.  Probably need to
;;; make new DICTIONARY data type analogous to YailList.  Think about
;;; any component operations that need to create dictionaries and whether we
;;; we need a Java class similar to the YailList Java class.  Also think about
;;; how to convert dictionaries to strings and how this interacts with printing
;;; JSON objects and whether jsonutils.decode.

(define (yail-alist-lookup key yail-list-of-pairs default)
  (android-log
   (format #f "List alist lookup key is  ~A and table is ~A" key yail-list-of-pairs))
  (let loop ((pairs-to-check (yail-list-contents yail-list-of-pairs)))
    (cond ((null? pairs-to-check) default)
          ((not (pair-ok? (car pairs-to-check)))
           (signal-runtime-error
            (format #f "Lookup in pairs: the list ~A is not a well-formed list of pairs"
                    (get-display-representation yail-list-of-pairs))
            "Invalid list of pairs"))
          ((equal? key (car (yail-list-contents (car pairs-to-check))))
           (cadr (yail-list-contents (car pairs-to-check))))
          (else (loop (cdr pairs-to-check))))))


(define (pair-ok? candidate-pair)
  (and (yail-list? candidate-pair)
       (= (length (yail-list-contents candidate-pair)) 2)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;; End of List implementation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
