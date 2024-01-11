const user = {
  username: "Victor",
  showName() {
		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
    console.log(user.username);
  },
};

user.showName();