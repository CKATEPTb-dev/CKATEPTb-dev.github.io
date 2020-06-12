let previousMediaTab;

(function() {
    if (!window.location.href.includes('prime.date')) return;
    setInterval(() => {
		let vModal = document.getElementsByClassName("v--modal-box v--modal")[0]
		if (vModal == null) return;
		let mediaElement = document.getElementsByClassName("file-list")[0];
		if (mediaElement != null) {
			let activeTab = document.getElementsByClassName("nav__item is-active")[0];
			if (activeTab != null) {
				activeTab = activeTab.innerText;
				if (previousMediaTab != activeTab) {
					previousMediaTab = activeTab;
					mediaElement.classList.remove("numerated");
				}
				if (mediaElement.classList.contains("numerated")) {
					return;
				}
				let childrenNodes = mediaElement.childNodes;
				if (childrenNodes != null) {
					let count = 1;
					childrenNodes.forEach(contentFile => {
						let spanNum = activeTab == "Video" ? 1 : activeTab == "Audio" ? 2 : 0;
						let childSpan = contentFile.childNodes[spanNum];
						if (childSpan != null) {
							if (childSpan.innerText.indexOf("moder") == -1) {
								childSpan.classList.add("is-moderation");
								childSpan.innerText = count++;
							}
						}
					});
				}
			}
			mediaElement.classList.add("numerated");
		}
    }, 200);
})();