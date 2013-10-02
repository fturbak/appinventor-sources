(test-begin "text")

(test-equal #\space (integer->char 32))
(test-equal 5000 (char->integer (integer->char 5000)))
;; If strict:
;; (test-error (integer->char #\xD800)   )
(test-equal #t (char<? #\z #\ß))
(test-equal #f (char<? #\z #\Z))
(test-equal #t (string<? "z" "ß"))
(test-equal #t (string<? "z" "zz"))
(test-equal #f (string<? "z" "Z"))

(test-equal #f (string=? "Straße" "Strasse"))

(test-equal #\I (char-upcase #\i))
(test-equal #\i (char-downcase #\i))
(test-equal #\I (char-titlecase #\i))
(test-equal #\i (char-foldcase #\i))
(test-equal #\ß (char-upcase #\ß))
(test-equal #\ß (char-downcase #\ß))
(test-equal #\ß (char-titlecase #\ß))
(test-equal #\ß (char-foldcase #\ß))
(test-equal #\Σ (char-upcase #\Σ))
(test-equal #\σ (char-downcase #\Σ))
(test-equal #\Σ (char-titlecase #\Σ))
(test-equal #\σ (char-foldcase #\Σ))
(test-equal #\Σ (char-upcase #\ς))
(test-equal #\ς (char-downcase #\ς))
(test-equal #\Σ (char-titlecase #\ς))
(test-equal #\σ (char-foldcase #\ς))

(test-equal #t (char-alphabetic? #\a))
(test-equal #t (char-numeric? #\1))
(test-equal #t (char-whitespace? #\space))
(test-equal #t (char-whitespace? #\x00A0))
(test-equal #t (char-upper-case? #\Σ))
(test-equal #t (char-lower-case? #\σ))
(test-equal #t (char-lower-case? #\x00AA))
(test-equal #f (char-title-case? #\I))
(test-equal #t (char-title-case? #\x01C5))

(test-equal 'Ll (char-general-category #\a))
(test-equal 'Zs (char-general-category #\space))
(test-equal 'Cn (char-general-category #\x10FFFF))

(test-equal "HI" (string-upcase "Hi"))
(test-equal "hi" (string-downcase "Hi"))
(test-equal "hi" (string-foldcase "Hi"))
(test-equal "STRASSE" (string-upcase "Straße"))
(test-equal "straße" (string-downcase "Straße"))
(test-equal "strasse" (string-foldcase "Straße"))
(test-equal "strasse" (string-downcase "STRASSE"))
(test-equal "σ" (string-downcase "Σ"))
(test-equal "ΧΑΟΣ" (string-upcase "ΧΑΟΣ"))
(test-equal "χαος" (string-downcase "ΧΑΟΣ"))
(test-equal "χαοσς" (string-downcase "ΧΑΟΣΣ"))
(test-equal "χαος σ" (string-downcase "ΧΑΟΣ Σ"))
(test-equal "χαοσσ" (string-foldcase "ΧΑΟΣΣ"))
(test-equal "ΧΑΟΣ" (string-upcase "χαος"))
(test-equal "ΧΑΟΣ" (string-upcase "χαοσ"))
(test-equal "Knock Knock" (string-titlecase "kNock KNoCK"))
(test-equal "Who's There?" (string-titlecase "who's there?"))
(test-equal "R6rs" (string-titlecase "r6rs"))
(test-equal "R6rs" (string-titlecase "R6RS"))
(test-expect-fail 1)
(test-equal "If\xFB01; Flat Fire"
	    (string-titlecase "if\xFB01; \xFB02;at \xFB01;re"))

(test-equal #f (string-ci<? "z" "Z"))
(test-equal #t (string-ci=? "z" "Z"))
(test-equal #t (string-ci=? "Straße" "Strasse"))
(test-equal #t (string-ci=? "Straße" "STRASSE"))
(test-equal #t (string-ci=? "ΧΑΟΣ" "χαοσ"))

(cond-expand (string-normalize-unicode)
             (else
              (test-expect-fail 4)))
(test-equal "\x65;\x301;" (string-normalize-nfd "\xE9;"))
(test-equal "\xE9;" (string-normalize-nfc "\xE9;"))
(test-equal "\x65;\x301;" (string-normalize-nfd "\x65;\x301;"))
(test-equal "\xE9;" (string-normalize-nfc "\x65;\x301;"))

(test-end)
