import React from 'react';
import './Food.css'
import { useNavigate } from "react-router-dom";


const Food = ({data, food}) => {
	const {id, name, title, image, price} = data;
	const navigate = useNavigate();

	const handleNavigateFood = () => {
		navigate(`/food/${id}/${food}`);
	}
	return (
		<div onClick={handleNavigateFood} className='food'>
			<img height={200} src={image} alt="" />
			<h5 className='text-center mt-4'>{name}</h5>
			<p className='text-center food-title'>{title}</p>
			<p className='text-center mt-2'>Price: {price}</p>
		</div>
	);
};

export default Food;