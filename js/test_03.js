function getSubscriptionPrice(type) {
	switch (type) {
		case `starter`:
			return `0`;
			break;
		case `professional`:
			return `20`;
			break;
		case `organization`:
			return `50`;
			break;
		default:
			return `Invalid subscription type!`;
	}

}
console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random"));
console.log(getSubscriptionPrice("premium"));