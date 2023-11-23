function getFileName(file) {

		if (file.indexOf(".") === -1) { 
			return file;
	}
	
		return file.slice(0, file.indexOf("."));
}

console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index.css"));
console.log(getFileName("index"));