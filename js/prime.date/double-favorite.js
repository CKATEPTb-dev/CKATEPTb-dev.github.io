(function() {
    if (!window.location.href.includes('prime.date')) return;
    document.addEventListener('keydown', async (event) => {
        if ((event.key == 'й' || event.key == 'q') && (event.altKey || event.metaKey)) {
            let noteBtn = document.getElementsByClassName("chat-note_btn")[0];
			if (noteBtn == null) return;
			if (document.getElementsByClassName("chat-container chat-note-visible")[0] == null) {
				noteBtn.click();
			}
			let favorites = document.querySelector("body > div.main-wrap > section > div > div > div.chat-container.chat-note-visible > div > div.chat-head > div > div.chat-header-controls > div > ul > li:nth-child(2) > a");
			if (favorites == null) return;
			favorites.click();
			favorites.click();
        }
    });
})();