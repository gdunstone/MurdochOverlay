var overlayText = document.createElement('div');
	overlayText.innerHTML = "Murdoch Propaganda";
	overlayText.id = "murdoch-overlay-text";

var overlay = document.createElement('div');
	overlay.id = "murdoch-overlay";
	overlay.appendChild(overlayText);

document.body.appendChild(overlay);