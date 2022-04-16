import React, { useState } from 'react';
import './Cart.css'

const Cart = ({data, data1}) => {
	const {id, name, title, price, image} = data;
	let pro = 0;
	console.log(data1);
	for(let key in data1){
		if(parseInt(key)===id){
			pro = id;
			// console.log(typeof(key), typeof(id));
		}
	}
	// console.log(data1[pro]);
	return (	
		<div className='cart px-5'>
			<div className='d-flex flex-column justify-content-start'>
				<h2 className=''>{name}</h2>
				<p className='my-2'>Quantity: {data1[pro]}</p>
				<p>Price: ${data1[pro]*price}</p>
			</div>
			<div className='d-flex justify-content-end'>
				<img height={120} src={image} alt="" />
			</div>
			<div className='d-flex justify-content-end'>
				<button>D</button>
			</div>
		</div>
	);
};

export default Cart;