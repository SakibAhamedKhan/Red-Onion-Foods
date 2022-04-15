import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Breakfast.css'

const Breakfast = () => {
	const [data, setData] = useState([]);

	useEffect( () => {
		fetch('food-breakfast-data.json')
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

export default Breakfast;<h2>Breakfast Here</h2>