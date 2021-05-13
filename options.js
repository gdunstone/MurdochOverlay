// options.js
var opts = [
	"enablenine",
	"fullblock"
	];

function saveOptions(e) {
	opts.map((opt)=>{
		var sval = {};
		sval[opt] = document.querySelector(`#${opt}`).checked;
		browser.storage.sync.set(sval);		
	});
	alert("Saved!");
  e.preventDefault();
}

function restoreOptions() {
  browser.storage.sync.get().then((res) => {
  	opts.map((opt)=>{
			document.querySelector(`#${opt}`).checked = res[opt];
		});
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);