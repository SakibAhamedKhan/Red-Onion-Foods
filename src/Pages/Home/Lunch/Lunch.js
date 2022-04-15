import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Lunch.css'

const Lunch = () => {
	const [data, setData] = useState([]);

	useEffect( () => {
		fetch('food-lunch-data.json')
		.then(res => res.json())
		.then(data => setData(data))
	},[]);
	return (
		<div className='breakfast'>
			{
				data.map(d => <Food
					key={d.id}
					data={d}
				></Food>)
			}
		</div>
	);
};

export default Lunch;