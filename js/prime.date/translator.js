(function() {
	document.addEventListener('keydown', async (event) => {
		if ((event.key == 'a' || event.key == 'A' || event.key == 'ф' || event.key == 'Ф') && (event.altKey || event.metaKey)) {
			let isPrime = document.activeElement.nodeName == 'TEXTAREA' || document.activeElement.nodeName == 'INPUT';
			let isTelegram = document.activeElement.className == 'composer_rich_textarea';
			let textArea = document.activeElement;
			if (!textArea || textArea.length == 0) return;
			let value;
			if (isTelegram) {
				if (textArea.innerHTML.length == 0) return;
				value = textArea.innerHTML;
			} else if (isPrime) {
				if (textArea.value.length == 0) return;
				value = textArea.value;
			} else return;
			let msg = await ruToEn(value);
			if (isTelegram) textArea.innerHTML = msg;
			if (isPrime) textArea.value = msg;
			let event = document.createEvent("HTMLEvents");
			event.initEvent("input", !0, !0);
			textArea.dispatchEvent(event);
		}
	});
})();