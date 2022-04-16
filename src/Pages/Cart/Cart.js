import React from 'react';
import './Cart.css'

const Cart = ({data, data1}) => {
	const {id, name, title, price, image} = data;
	console.log(data1);
	return (	
		<div>
			<h2>This is Cart!! {name}</h2>
		</div>
	);
};

export default Cart;