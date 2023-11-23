function checkPassword(password) {
	const correctPassword = "jqueryismyjam";
	const checkPassword = password === "jqueryismyjam" ? `Access granted` : `Access denied, wrong password!`;
	return checkPassword;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));