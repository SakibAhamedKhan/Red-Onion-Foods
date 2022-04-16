import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './FoodDetail.css'
import { BiPlus,BiMinus } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";


const FoodDetails = () => {
	const {foodId, type} = useParams();
	const [count, setCount] = useState(1);
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);
	const [activeBreakfast, setActiveBreakfast] = useState(false);
	const [activeLunch, setActiveLunch] = useState(false);
	const [activeDinner, setActiveDinner] = useState(false);
	
	useEffect(()=>{
		const finded = data.find(d => d.id === parseInt(foodId));
		setData2(finded);
	},[data]);

	useEffect( () => {
		if(type==='breakfast'){
			fetch('/food-breakfast-data.json')
			.then(res => res.json())
			.then(data => setData(data));
			
			setActiveBreakfast(true);
			setActiveLunch(false);
			setActiveDinner(false);
		} else if(type==='lunch'){
			fetch('/food-lunch-data.json')
			.then(res => res.json())
			.then(data => setData(data));

			setActiveBreakfast(false);
			setActiveLunch(true);
			setActiveDinner(false);
		} else {
			fetch('/food-dinner-data.json')
			.then(res => res.json())
			.then(data => setData(data));

			setActiveBreakfast(false);
			setActiveLunch(false);
			setActiveDinner(true);
		}
	},[]);

	const handleNumberOfAddField = (event) =>{
		console.log(event.target.value);
		const value = event.target.value;
		if(value){
			setCount(parseInt(value))
		} else{
			setCount(0);
		}
	}
	
	return (
		<div className=''>
			<Header></Header>
			<div className='container my-5 py-5 food-details'>
				<div className='d-flex justify-content-center align-items-center'>
					<div className={`mx-3 fs-5 fw-bold ${activeBreakfast? 'border-bottom border-3 border-danger text-danger':'border-0'}`}>Breakfast</div>
					<div className={`mx-3 fs-5 fw-bold ${activeLunch?'border-bottom border-3 border-danger text-danger':'border-0'}`}>Lunch</div>
					<div className={`mx-3 fs-5 fw-bold ${activeDinner?'border-bottom border-3 border-danger text-danger':'border-0'}`}>Dinner</div>
				</div>
				<div className='food-details-info'>
					<div>
						<h1 className='mb-4'>{data2?.name}</h1>
						<p className='mb-4'>{data2?.title} Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in expecially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.</p>

						{/* price */}
						<div className='d-flex align-items-center'>
							<h3 className='me-5'>${(data2?.price * count).toFixed(2)}</h3>
							<div className='d-flex align-items-center justify-content-center border rounded-pill'>
								<button onClick={()=> {
									let c = count -1;
									if(c<=0){
										c=1;
									}
									setCount(c);
								}}  className='btn border-none text-danger rounded-pill'><BiMinus></BiMinus></button>
								{/* <p className='m-0 fs-5 mx-3'>{count}</p> */}
								<input onChange={handleNumberOfAddField} className='numberOfAddField mx-3' type="number"  value={(count===0)? '' : count} />
								<button onClick={()=> {
									let c = count;
									setCount(c+1);
								}} className='btn border-none rounded-pill'><BiPlus></BiPlus></button>
							</div>
						</div>
						<button className='btn btn-danger d-flex justify-content-center align-items-center px-4 py-2 rounded-pill my-4'><FiShoppingCart className='me-3'></FiShoppingCart><span className='m-0'>Add</span></button>
					</div>
					<div>
						<img height={500} src={data2?.image} alt="" />
					</div>
				</div>
			</div>
			<div className='fooddetails-footer'>
			<Footer></Footer>
			</div>
		</div>
		
	);
};

export default FoodDetails;