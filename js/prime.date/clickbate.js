(function() {
    if (!window.location.href.includes('prime.date/chat')) return;
    setInterval(() => {
		let d = document.getElementsByClassName("chat-answer-textarea")[0];
		if (d !== null) {
			if (d.firstChild !== null) {
				while (d.firstChild.name !== "note") {
					d.firstChild.remove();
				}
				let divButton = document.createElement("span");
				divButton.innerHTML = "Сlickbait: " + d.firstChild.value.substr(0, 20);
				if (d.firstChild.value.length > 20) divButton.innerHTML += "..."
				d.insertBefore(divButton, d.firstChild);
			}
		}
    }, 200);
})();
