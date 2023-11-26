function formatPrice(price) {
	return `Rp. ${price.toLocaleString("id")}`;
}

function discountedPrice(price, discount) {
	return price - (price * discount) / 100
}

export {
	formatPrice,
	discountedPrice
}
