import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/dbControl';
import Cart from '../Cart/Cart';
import Header from '../Shared/Header/Header';
import './CartAdded.css'

const CartAdded = () => {
	const [data, setData] = useState(getStoredCart());
	const [data1, setData1] = useState([]);
	const [final, setFinal] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			function sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			await sleep(1000);
			const d = await fetch('/food-all-data.json');
			const js = await d.json();
			return js;
		}
		const result = fetchData()
		.then(value => setData1(value))	
		console.log(data1);
	},[]);

	useEffect(()=>{
		// const temp = data.map(d => {
		// 	return data1.find(d1 => parseInt(d1.id) === d[0] );
		// });
		// let arr = [];
		// for(let key in data){
		// 	const temp = data1.find(d => d.id === parseInt(key));
		// 	arr.push(temp);
		// }
		// setFinal(arr);
		// // console.log(final);
		// console.log(data1);
		// console.log(data);	
	},[data1]);


	return (
		<div>
			<Header></Header>
			<div style={{marginTop:'100px'}} className='container'>
				<h3 className='text-center'>All Added to Cart items : {data.length}</h3>
				{
					final.map( d => <Cart
						key={d.id}
						data={d}
						data1={data}
					></Cart>)
				}
			</div>
		</div>
	);
};

export default CartAdded;