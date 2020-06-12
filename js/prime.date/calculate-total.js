(function() {
    if (!window.location.href.includes('prime.date')) return;
    setInterval(() => {
		if (!window.location.href.includes("prime.date/statistics")) return;
		const showStatisticsButton = document.getElementsByClassName("is-big is-fluid ui-btn is-additional")[0];
		if (showStatisticsButton == null) return;
		let totalOut = document.querySelector("body > div.main-wrap > section > div > div.b-container-medium > div > div > div > p:nth-child(2) > span > span");
		if (totalOut == null) return
		let iText = totalOut.innerText;
		if (iText == null) return;
		if (iText.includes("=")) return;
		let total = parseFloat(iText.replace(" ", ""));
		let dollars = ((total * 0.055) / 2).toFixed(2);
		totalOut.innerText += " = " + dollars + "$";
		fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then((request) => {
			if (request.status >= 200 && request.status < 400) {
				request.json().then((data) => {
					let hryvnia = (data[0].buy * dollars).toFixed(2);
					totalOut.innerText += " = " + hryvnia + "₴";
				}).catch();
			}
		});
    }, 200);
})();