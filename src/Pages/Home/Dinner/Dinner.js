import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Dinner.css'

const Dinner = () => {
	const [data, setData] = useState([]);

	useEffect( () => {
		fetch('food-dinner-data.json')
		.then(res => res.json())
		.then(data => setData(data))
	},[]);
	return (
		<div className='breakfast'>
			{
				data.map(d => <Food
					key={d.id}
					data={d}
					food={'dinner'}
				></Food>)
			}
		</div>
	);
};

export default Dinner;