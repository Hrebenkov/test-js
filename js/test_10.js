function checkFileExtension(fileName, ext) {
	if (fileName.endsWith(ext)) { 
		return(`File extension matches`);
	}
		return(`File extension does not match`);
}



console.log(checkFileExtension("styles.css", ".css"));
console.log(checkFileExtension("styles.css", ".js"));
console.log(checkFileExtension("app.js", ".js"));
console.log(checkFileExtension("app.js", ".html"));
console.log(checkFileExtension("index.html", ".html"));
console.log(checkFileExtension("index.html", ".css"));
console.log(checkFileExtension("index.html", ".js"));