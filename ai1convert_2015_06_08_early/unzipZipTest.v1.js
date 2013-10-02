// This code is adapted from gildas-lormeau-zip.js-4c93974/WebContent/demos/{demo1,demo2}.js

zip.useWebWorkers = false; // We'll load inflate.js and deflate.js directly. 

var requestFS = this.webkitRequestFileSystem || this.mozRequestFileSystem || this.requestFileSystem;
// var URL = obj.webkitURL || obj.mozURL || obj.URL;
var zipURL = this.URL || this.webkitURL || this.mozURL;


function onerror(message) {
  reportError(message);
}

function onprogress(current, total) {
  // Do nothing for progress
  // log("\n<br>Progress for " + filename + ": current= " + current + "; total=" + total + "\n<br>");
}
 
// function createTempFile(callback) {
//   var tmpFilename = "tmp.dat";
//   requestFS(TEMPORARY, 4 * 1024 * 1024 * 1024, function(filesystem) {
//     function create() {
//       filesystem.root.getFile(tmpFilename, {create : true}, function(zipFile) {
//           callback(zipFile);
//         });
//     }
      
//     filesystem.root.getFile(tmpFilename, null, function(entry) {
//         entry.remove(create, create);
//       }, 
//       create);
//     });
// }

function getZippedEntries(file, onend) {
  zip.createReader(new zip.BlobReader(file), function(zipReader) {
      zipReader.getEntries(onend);
    }, onerror);
}

var fileInput = document.getElementById("file-input");
var errorOutput = document.getElementById("errors");
var logOutput = document.getElementById("log");
var unzipProgress = document.createElement("progress");
var creationMethodInput = document.getElementById("creation-method-input");
var downloadButton = document.getElementById("download-button");

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
		var clickEvent;
		clickEvent = document.createEvent("MouseEvent");
		clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                // Set below
		// downloadButton.href = globalBlobURL; // *** Lyn
		// downloadButton.download = globalBlobFilename // *** Lyn filenameInput.value;
		downloadButton.dispatchEvent(clickEvent);
		// creationMethodInput.disabled = false;
		// fileList.innerHTML = "";
	    event.preventDefault();
	    return false;
	  }
	}
      }, false);

// From http://forums.asp.net/t/1151879.aspx?HttpUtility+HtmlEncode+in+javaScript+                        
function escapeHTML (str) {
  var div = document.createElement('div');
  var text = document.createTextNode(str);
  div.appendChild(text);
  return div.innerHTML;
}

// Adapted from http://stackoverflow.com/questions/280634/endswith-in-javascript
function endsWith(string, suffix) {
  // Do lowercases to be safe
  var lowerString = string.toLowerCase();
  var lowerSuffix = suffix.toLowerCase();
  return lowerString.indexOf(lowerSuffix, lowerString.length - lowerSuffix.length) !== -1;
}

// Returns the name of file before extension
function baseFilename(filename) {
  return filename.substring(0, filename.lastIndexOf("."))
}

// Given a list of entries, filter those ending in .blk and .scm, 
// and ensure every .blk file has an associated .scm file and vice versa.
// (Or should we assume that if a .scm does not have a block file, it's empty?)
// Returns the filtered names.
function checkAI1SourceFiles (entries) {
  var filtered = entries.filter(function (entry, index, arr) { 
      return endsWith(entry.filename, ".blk") || endsWith(entry.filename, ".scm")
  });
  var basenames = {}; // Dictionary for mapping base filename to all extensions
  filtered.forEach(function(entry) {
      var filename = entry.filename;
      var base = baseFilename(filename);
      var fileList = basenames[base]
      if (fileList) {
        fileList.push(filename);
      } else {
        basenames[base] = [filename]; // associate base with singleton of name
      }
    });
  // Verify each base name has both a .scm and .blk
  for (var base in basenames) {
    var fileList = basenames[base];  
    if (fileList.length == 1) {
      reportError("Unpaired source file " + fileList[0]);
    }
  };
  return filtered;
}

function reportError(msg) {
  errorOutput.innerHTML = errorOutput.innerHTML + msg + "<br>"
}

function log(msg) {
  logOutput.innerHTML = logOutput.innerHTML + msg + "<br>"
}

function resetPage() {
  errorOutput.innerHTML = '';
  logOutput.innerHTML = '';
}

function processScmFileContents(scmText) {
  return scmText.toUpperCase();
}

function processBlkFileContents(blkText) {
  return blkText.toUpperCase();
}

// Return .scm/.bky filename corresponding to .scm/.blk file
function convertAI1ToAI2Filename(AI1Filename) {
  if (endsWith(AI1Filename, ".scm")) {
    return AI1Filename;
  } else if (endsWith(AI1Filename, ".blk")) {
    return baseFilename(AI1Filename) + ".bky";
  } else {
    reportError("convertAI1ToAI2Filename expected .scm or .blk file but got " + AI1Filename);
  }
}

// Return .aia filename corresponding to .zip filename
function convertAI1ToAI2SourceFilename(AI1Filename) {
  if (endsWith(AI1Filename, ".zip")) {
    return baseFilename(AI1Filename) + "-copied.aia"; // For testing, add '-copied' to base filename
  } else {
    reportError("convertAI1ToAI2SourceFilename expected .zip file but got " + AI1Filename);
  }
}

// Convert the contents (i.e., a string) of an AI file. 
// Just a stub for now. 
function convertAIIToAI2FileContents(AI1Filename, AI1FileContents) {
  // return AI1FileContents.toUpperCase();
  return AI1FileContents;
}

// Magic for downloading .aia file. Dynamically create link and simulate click on it. 
// Adapted from gildas-lormeau-zip.js-4c93974/WebContent/demos/demo1.js
function downloadAI2SourceFile(AI2Filename, AI2ZippedSourceBlobURL) {
  var link = document.createElement('a');
  link.href = AI2ZippedSourceBlobURL; 
  link.download = AI2Filename;
  var clickEvent = document.createEvent("MouseEvent");
  clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  link.dispatchEvent(clickEvent);
}

// Processes an AI1 source file (.zip) by unzipping it, converting all its .scm and .blk files
// to corresponding AI2 files, and zipping the results into an .aia file. 
// TODO:
// (1) Handle multiple .zip files
// (2) Handle a .zip file of .zip files
function processAI1SourceFile () {
  fileInput.disabled = true;
  var AI1SourceFile = fileInput.files[0];
  getZippedEntries(AI1SourceFile, function(entries) {
      resetPage(); // clear log and error messages
      var AI1SourceFilename = AI1SourceFile.name;
      var AI1SourceEntries = checkAI1SourceFiles(entries); 
      var numberOfFilesToConvert = AI1SourceEntries.length;
      var numberOfFilesConvertedSoFar = 0; 
      if (numberOfFilesToConvert == 0) {
        reportError(zipFileName + " does not appear to be an App Inventor Classic source file. It does not have any .scm or .blk files.");
        return; 
      }
      zip.createWriter(new zip.BlobWriter("application/zip"), function(AI2Writer) { // Creates zip writer for AI2 source files (.aia)
          AI1SourceEntries.forEach(function (entry) {
              var AI1Filename = entry.filename;
              entry.getData(new zip.TextWriter(), function(AI1FileContents) { // AI1FileContents is just a string
                  log("Contents  of " + AI1Filename + ":\n<br>" + escapeHTML(AI1FileContents) + "<br>");
                  var AI2Filename = convertAI1ToAI2Filename(AI1Filename);
                  var AI2FileContents = convertAIIToAI2FileContents(AI1Filename, AI1FileContents);
                  log("Contents  of " + AI2Filename + ":\n<br>" + escapeHTML(AI2FileContents) + "<br>");
           	  // AI2Writer.add(AI2Filename, new zip.TextReader(AI2FileContents), function () {
                  AI2Writer.add(AI1Filename, new zip.TextReader("foo" + AI1Filename + "bar"), function () {
                      numberOfFilesConvertedSoFar++; 
                      log("Converted so far: " + numberOfFilesConvertedSoFar 
                           + "; to convert: " + numberOfFilesToConvert
                           + "; filename: " + AI1Filename 
                           + "; file contents: " + AI1Filename); 
                      if (numberOfFilesConvertedSoFar == numberOfFilesToConvert) { // All files converted
                        AI2Writer.close(function(AI2ZippedSourceBlob) {
                            downloadButton.href = zipURL.createObjectURL(AI2ZippedSourceBlob) // *** Lyn filenameInput.value;
                            downloadButton.download = convertAI1ToAI2SourceFilename(AI1SourceFilename); // *** Lyn
                            // downloadAI2SourceFile(convertAI1ToAI2SourceFilename(AI1SourceFilename), 
                            //                       zipURL.createObjectURL(AI2ZippedSourceBlob));
                            fileInput.disabled = false; // Re-enable button to convert another source file. 
                          }); // end AI2Writer.close
                      }
                    }); // end AI2Writer.add 
                }, onprogress); // end entry.getData
            }); // end AI1SourceEntries.forEach
        }, onerror); // end zip.createWriter
    }); // end getZippedEntries
} // end processAI1Files

fileInput.addEventListener('change', processAI1SourceFile, false)
