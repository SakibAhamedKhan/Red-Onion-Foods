import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/dbControl';
import Cart from '../Cart/Cart';
import Header from '../Shared/Header/Header';
import Loading from '../Shared/Loading/Loading';
import './CartAdded.css'

const CartAdded = () => {
	const [data, setData] = useState(getStoredCart());
	const [data1, setData1] = useState([]);
	const [final, setFinal] = useState([]);
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/SakibAhamedKhan/Red-Onion-Foods/main/public/food-all-data.json')
		.then(res => res.json())
		.then(data => setData1(data))
	},[]);

	useEffect(()=>{
		console.log(data1);
		// const temp = data.map(d => {
		// 	return data1.find(d1 => parseInt(d1.id) === d[0] );
		// });
		let arr = [];
		console.log(data1);
		for(let key in data){
			const temp = data1.find(d => d.id === parseInt(key));
			arr.push(temp);
		}
		console.log(arr);
		setFinal(arr);
		console.log(final);
		// console.log(data1);
		// console.log(data);	
	},[data1]);


	return (
		<div>
			<Header></Header>
			<div style={{marginTop:'100px'}} className='container'>
				<h3 className='text-center'>All Added to Cart items : {data.length}</h3>
				<div className='carts'>
				{
					// final?
					// (final.map( d => <Cart
					// 	key={d?.id}
					// 	data={d}
					// ></Cart>))
					// :
					// ''
					(final[0]===undefined)?
					<Loading></Loading>
					: final.map(d=> <Cart
						key={d?.id}
						data={d}
						data1={data}
					></Cart>)
				}
				</div>
			</div>
		</div>
	);
};

export default CartAdded;