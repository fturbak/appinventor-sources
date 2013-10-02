(function(obj) {

  var model = (function() {
      var fs = new zip.fs.FS(), requestFileSystem = obj.webkitRequestFileSystem || obj.mozRequestFileSystem || obj.requestFileSystem, URL = obj.webkitURL
      || obj.mozURL || obj.URL;

      function createTempFile(callback) {
	var tmpFilename = "__tmp__";
	requestFileSystem(TEMPORARY, 4 * 1024 * 1024 * 1024, function(filesystem) {
	    function create() {
	      filesystem.root.getFile(tmpFilename, {
		  create : true
		    }, function(zipFile) {
		  callback(zipFile);
		});
	    }

	    filesystem.root.getFile(tmpFilename, null, function(entry) {
		entry.remove(create, create);
	      }, create);
	  });
      }

      return {
	addDirectory : function(name, parent) {
	  parent.addDirectory(name);
	},
	addFile : function(name, blob, parent) {
	  parent.addBlob(name, blob);
	},
	getRoot : function() {
	  return fs.root;
	},
	getById : function(id) {
	  return fs.getById(id);
	},
	remove : function(entry) {
	  fs.remove(entry);
	},
	rename : function(entry, name) {
	  entry.name = name;
	},
	exportZip : function(entry, onend, onprogress, onerror) {
	  var zipFileEntry;

	  function onexport(blob) {
	    var blobURL;
	    if (requestFileSystem)
	      onend(zipFileEntry.toURL(), function() {
		});
	    else {
	      blobURL = URL.createObjectURL(blob);
	      onend(blobURL);
	    }
	  }

	  if (requestFileSystem)
	    createTempFile(function(fileEntry) {
		zipFileEntry = fileEntry;
		entry.exportFileEntry(zipFileEntry, onexport, onprogress, onerror);
	      });
	  else
	    entry.exportBlob(onexport, onprogress, onerror);
	},
	importZip : function(blob, targetEntry, onend, onprogress, onerror) {
	  targetEntry.importBlob(blob, onend, onprogress, onerror);
	},
	getBlobURL : function(entry, onend, onprogress, onerror) {
	  entry.getBlob(zip.getMimeType(entry.filename), function(blob) {
	      var blobURL = URL.createObjectURL(blob);
	      onend(blobURL, function() {
		  URL.revokeObjectURL(blobURL);
		});
	    }, onprogress, onerror);
	}
      };
    })();

  (function() {
    var progressExport = document.getElementById("progress-export-zip");
    var tree = document.getElementById("tree");
    var listing = document.getElementById("listing");
    var selectedDir, selectedFile, selectedLabel, selectedLabelValue, selectedDrag, hoveredElement;

    function onerror(message) {
      alert(message);
    }

    function getFileNode(element) {
      return element ? model.getById(element.dataset.fileId) : model.getRoot();
    }

    function getFileElement(element) {
      while (element && !element.dataset.fileId)
	element = element.parentElement;
      return element;
    }

    function stopEvent(event) {
      event.stopPropagation();
      event.preventDefault();
    }

    function expandTree(node) {
      if (!node)
	node = model.getRoot();
      if (node.directory) {
	node.expanded = true;
	node.children.forEach(function(child) {
	    expandTree(child);
	  });
      }
    }

    function onexport(isFile) {
      function downloadBlobURL(target, filename) {
	return function(blobURL) {
	  var clickEvent = document.createEvent("MouseEvent");
	  progressExport.style.opacity = 0.2;
	  progressExport.value = 0;
	  progressExport.max = 0;
	  clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	  target.href = blobURL;
	  target.download = filename;
	  target.dispatchEvent(clickEvent);
	  target.href = "";
	  target.download = "";
	};
      }

      function onprogress(index, end) {
	progressExport.value = index;
	progressExport.max = end;
      }

      return function(event) {
	var filename, target = event.target, node;
	if (!target.download) {
	  node = getFileNode(isFile ? selectedFile : selectedDir);
	  filename = prompt("Filename", isFile ? node.name : node.parent ? node.name + ".zip" : "example.zip");
	  if (filename) {
	    progressExport.style.opacity = 1;
	    progressExport.offsetHeight;
	    if (isFile)
	      model.getBlobURL(node, downloadBlobURL(target, filename), onprogress, onerror);
	    else
	      model.exportZip(node, downloadBlobURL(target, filename), onprogress, onerror);
	    event.preventDefault();
	  }
	}
      };
    }

    function onnewDirectory(event) {
      var name = prompt("Directory name");
      if (name) {
	model.addDirectory(name, getFileNode(selectedDir));
	refreshTree();
	if (selectedDir)
	  getFileNode(selectedDir).expanded = selectedDir.open = true;
      }
    }

    function selectFile(fileElement) {
      resetSelectedFile();
      resetSelectedLabel(true);
      fileElement.className = "selected";
      fileElement.draggable = true;
      selectedFile = fileElement;
    }

    function selectDirectory(directoryElement) {
      resetSelectedDir();
      resetSelectedLabel(true);
      directoryElement.className = "selected";
      directoryElement.draggable = true;
      selectedDir = directoryElement;
      refreshListing();
    }

    function resetSelectedFile() {
      if (selectedFile) {
	selectedFile.classList.remove("selected");
	selectedFile.draggable = false;
      }
    }

    function resetSelectedDir() {
      if (selectedDir) {
	selectedDir.classList.remove("selected");
	selectedDir.draggable = false;
	resetSelectedFile();
      }
    }

    function resetSelectedLabel(resetValue) {
      if (selectedLabel) {
	selectedLabel.contentEditable = false;
	selectedLabel.blur();
	if (resetValue)
	  selectedLabel.textContent = selectedLabelValment;
	selectedLabelValue = labelElement.textContent;
      }

      function refreshTree(node, element) {
	var details, summary, label, newDirectory, exportDirectory;

	if (!node) {
	  node = model.getRoot();
	  element = tree;
	  element.innerHTML = "";
	}
	if (node.directory) {
	  details = document.createElement("details")istener("click", onnewDirectory, false);
	  exportDirectory.className = "save-button button";
	  exportDirectory.title = "Export folder content into a zip file";
	  exportDirectory.addEvEach(function(child) {
	      if (!child.directory) {
		li = document.createElement("li");
		label = document.createElement("span");
		exportFile = document.createElement("a");
		li.dataset.fileId = child.id;
		if (selectedFile && selectedFile.daresetSelectedFile();
		    if (state == "canceled" || state == "deleted")
		      refreshListing();
		    });
	    }
	    event.preventDefault();
	    } else
		refreshListing();
	}, false);

      tree.addEventListener("click", function(event) {
	  var target = event.target, details, node, selectedNode;

	  if (target.className == "dir-label") {
	    details = target.parentElement.parentElement;
	    if (!details.classList.contains("selected"))
	      selecselectedNode = getFileNode(selectedDir);
	    if (selectedNode.isDescendantOf(node))
	      resetSelectedDir();
	  }
	} else {
	  refreshTree();
	  refreshListing();
	}
	}, false);

    tree.addEventListener('drop', function(event) {
	var targetNode, srcNode, file, target = getFileElement(event.target);
	if (target) {
	  targetNode = gett.classList.remove("drag-over");
	}
      }
      stopEvent(event);
      }, false);
    tree.addEventListener('dragover', function(event) {
	if (hoveredElement)
	  hoveredElement.classList.remove("drag-over");
	hoveredElement = getFileElement(event.target);
	if (hoveredElement)
	  hoveredElement.classList.add("drag-over");
	stopEvent(event);
      }, falent.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('Text', "");
      if (!event.dataTransfer || !event.dataTransfer.files || !event.dataTransfer.files.length)
	selectedDrag = selectedFile;
      }, false);

  progressExport.style.opacity = 0.2;
  expandTree();
  refreshTree();
})();

})(this);
