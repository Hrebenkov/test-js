function createFileName(name, ext) {
	name = name.trim();
	return (name + `.` + ext);
}


console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));