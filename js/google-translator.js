const ruEn = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=";
const enRu = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=";

async function ruToEn(value) {
    let res = await fetch(ruEn + encodeURI(value));
    if (res.status >= 200 && res.status < 400) {
        try {
            let data = await res.json();
            return data[0].map((sentence) => sentence[0]).join("");
        } catch (e) {
            alert("Are u robot?");
            window.open(ruEn);
        }
    } else {
        alert("Are u robot?");
        window.open(ruEn);
    }
    return value;
}

async function enToRu(value) {
    let res = await fetch(enRu + encodeURI(value));
    if (res.status >= 200 && res.status < 400) {
        try {
            let data = await res.json();
            return data[0].map((sentence) => sentence[0]).join("");
        } catch (e) {
            alert("Are u robot?");
            window.open(enRu);
        }
    } else {
        alert("Are u robot?");
        window.open(enRu);
    }
    return value;
}