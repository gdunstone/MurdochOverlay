browser.storage.sync.get().then((res) => {
	if (res.mildmessage) {
		var overlayText = document.createElement('div');
		var replaceTitle = document.title.replace(/ /g, "+");
		var ecosiaLink = document.createElement('a');
			ecosiaLink.href = `https://www.ecosia.org/search?q=${replaceTitle}`;
			ecosiaLink.textContent = "Ecosia?"
			overlayText.innerHTML = "This site is part of the Murdoch propaganda empire<br>Perhaps you could search for a replacement article with ";
			overlayText.appendChild(ecosiaLink)
			overlayText.id = "murdoch-mild-text";

		var overlay = document.createElement('div');
			overlay.id = "murdoch-mild";
			overlay.appendChild(overlayText);

		document.body.appendChild(overlay);
		overlay.onclick = overlay.remove;
	}else{
		var overlayText = document.createElement('div');
			overlayText.innerHTML = "Murdoch Propaganda";
			overlayText.id = "murdoch-overlay-text";

		var overlay = document.createElement('div');
			overlay.id = "murdoch-overlay";
			overlay.appendChild(overlayText);
		document.body.appendChild(overlay);
	}
});
