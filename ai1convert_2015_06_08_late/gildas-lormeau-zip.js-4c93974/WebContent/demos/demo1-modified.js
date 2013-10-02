  zip.useWebWorkers = false; // *** Changed by Lyn: We'll load inflate.js and deflate.js directly. 

// var requestFileSystem = obj.webkitRequestFileSystem || obj.mozRequestFileSystem || obj.requestFileSystem;
  var requestFS = this.webkitRequestFileSystem || this.mozRequestFileSystem || this.requestFileSystem;
  // var URL = obj.webkitURL || obj.mozURL || obj.URL;
  var zipURL = this.URL || this.webkitURL || this.mozURL;

  function onerror(message) {
    alert(message);
  }

  var model = (function() {
      // var zipFileEntry, zipWriter, writer, creationMethod, URL = obj.webkitURL || obj.mozURL || obj.URL; *** CHANGED BY LYN
      var zipFileEntry, zipWriter, writer, creationMethod;

      return {
	setCreationMethod : function(method) {
	  creationMethod = method;
	},
	  addFiles : function addFiles(files, oninit, onadd, onprogress, onend) {
	  var addIndex = 0;

	  function nextFile() {
	    var file = files[addIndex];
	    onadd(file);
	    // zipWriter.add(file.name, new zip.BlobReader(file), function() { // *** Changed by Lyn
            var myFilename = "src/appinventor/ai_fturbak/ButtonColorToggle/" + file.name;
            zipWriter.add(myFilename, new zip.TextReader("foo" + myFilename + "bar"), function() {
		addIndex++;
		if (addIndex < files.length)
		  nextFile();
		else
		  onend();
	      }, onprogress);
	  }

	  function createZipWriter() {
	    zip.createWriter(writer, function(writer) {
		zipWriter = writer;
		oninit();
		nextFile();
	      }, onerror);
	  }

	  if (zipWriter)
	    nextFile();
	  else {
	    writer = new zip.BlobWriter();
	    createZipWriter();
	  } 
	},
	  getBlobURL : function(callback) {
	  zipWriter.close(function(blob) {
	      var blobURL = zipURL.createObjectURL(blob);
	      callback(blobURL);
	      zipWriter = null;
	    });
	},
	  getBlob : function(callback) {
	  zipWriter.close(callback);
	}
      };
    })();

    var fileInput = document.getElementById("file-input");
    var zipProgress = document.createElement("progress");
    var downloadButton = document.getElementById("download-button");
    var fileList = document.getElementById("file-list");
    var filenameInput = document.getElementById("filename-input");
    var creationMethodInput = document.getElementById("creation-method-input");

    model.setCreationMethod(creationMethodInput.value);
    fileInput.addEventListener('change', function() {
	fileInput.disabled = true;
	creationMethodInput.disabled = true;
	model.addFiles(fileInput.files, function() {
	  }, function(file) {
	    var li = document.createElement("li");
	    zipProgress.value = 0;
	    zipProgress.max = 0;
	    li.textContent = file.name;
	    li.appendChild(zipProgress);
	    fileList.appendChild(li);
	  }, function(current, total) {
	    zipProgress.value = current;
	    zipProgress.max = total;
	  }, function() {
	    if (zipProgress.parentNode)
	      zipProgress.parentNode.removeChild(zipProgress);
	    fileInput.value = "";
	    fileInput.disabled = false;
	  });
      }, false);
    creationMethodInput.addEventListener('change', function() {
	model.setCreationMethod(creationMethodInput.value);
      }, false);
    downloadButton.addEventListener("click", function(event) {
	var target = event.target, entry;
	if (!downloadButton.download) {
	  if (typeof navigator.msSaveBlob == "function") {
            console.log("Taking navigator.msSaveBlob branch"); // *** Lyn
	    model.getBlob(function(blob) {
		navigator.msSaveBlob(blob, filenameInput.value);
	      });
	  } else {
            console.log("Taking getBlobURL branch"); // *** Lyn
	    model.getBlobURL(function(blobURL) {
		var clickEvent;
		clickEvent = document.createEvent("MouseEvent");
		clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		downloadButton.href = blobURL;
		downloadButton.download = filenameInput.value;
		downloadButton.dispatchEvent(clickEvent);
		creationMethodInput.disabled = false;
		fileList.innerHTML = "";
	      });
	    event.preventDefault();
	    return false;
	  }
	}
      }, false);


