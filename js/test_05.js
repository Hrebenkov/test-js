function checkAccess(subType) {
	return(subType === "pro" || subType === "vip");

}

console.log(Boolean(checkAccess("pro")));
console.log(Boolean(checkAccess("starter")));
console.log(Boolean(checkAccess("vip")));
console.log(Boolean(checkAccess("free")));