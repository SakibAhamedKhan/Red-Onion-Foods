import React from 'react';
import './Food.css'

const Food = ({data}) => {
	const {id, name, title, image, price} = data;
	return (
		<div className='food'>
			<img height={200} src={image} alt="" />
			<h5 className='text-center mt-4'>{name}</h5>
			<p className='text-center food-title'>{title}</p>
			<p className='text-center mt-2'>Price: {price}</p>
		</div>
	);
};

export default Food;