
const addToDb = (id, quant) => {
	let orderCart = {};

	const storedCart = localStorage.getItem('order-cart');
	if(storedCart){
		orderCart = JSON.parse(storedCart);
	}

	const quantity = orderCart[id];
	if(quantity){
		const newQuantity = quant + quantity;
		orderCart[id] = newQuantity;
	} else {
		orderCart[id] = quant;
	}
	localStorage.setItem('order-cart', JSON.stringify(orderCart));
}

const getStoredCart =  () => {
	let orderCart = {};
	const storedCart = localStorage.getItem('order-cart');
	if(storedCart){
		orderCart = JSON.parse(storedCart);
	}
	// let result = Object.keys(orderCart).map((key) => [Number(key), orderCart[key]]);
	return orderCart;
}

export {
	addToDb,
	getStoredCart
}