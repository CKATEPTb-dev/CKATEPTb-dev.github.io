(function() {
	loadScript("https://CKATEPTb.ml/js/google-translator.js", () => {
		loadScript("https://CKATEPTb.ml/js/prime.date/translator.js", () => {});
	});
	loadScript("https://CKATEPTb.ml/js/prime.date/calculate-total.js", () => {});
	loadScript("https://CKATEPTb.ml/js/prime.date/double-favorite.js", () => {});
	loadScript("https://CKATEPTb.ml/js/prime.date/numeric-content.js", () => {});
	loadScript("https://CKATEPTb.ml/js/prime.date/clickbate.js", () => {});
	loadScript("https://CKATEPTb.ml/js/prime.date/admin-mode.js", () => {});
})();

function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild( script );
}