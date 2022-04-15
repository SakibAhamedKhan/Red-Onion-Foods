import React, { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Foods = () => {
	const [activeBreakfast, setActiveBreakfast] = useState(true);
	const [activeLunch, setActiveLunch] = useState(false);
	const [activeDinner, setActiveDinner] = useState(false);
	

	

	const handleBreakfast = () => {
		if(!activeBreakfast){
			setActiveBreakfast(!activeBreakfast);
		}
		setActiveLunch(false);
		setActiveDinner(false);
	}
	const handleLunch = () => {
		setActiveBreakfast(false);
		if(!activeLunch){
			setActiveLunch(!activeLunch);
		}
		setActiveDinner(false);
	}
	const handleDinner = () => {
		setActiveBreakfast(false);
		setActiveLunch(false);
		if(!activeDinner){
			setActiveDinner(!activeDinner);
		}
		
	}
	return (
		<div className='container my-5'>
			<div className='d-flex justify-content-center align-items-center'>
				<div onClick={handleBreakfast} style={{cursor:'pointer'}} className={`mx-3 fs-5 fw-bold ${activeBreakfast? 'border-bottom border-3 border-danger text-danger':'border-0'}`}>Breakfast</div>
				<div onClick={handleLunch} style={{cursor:'pointer'}} className={`mx-3 fs-5 fw-bold ${activeLunch?'border-bottom border-3 border-danger text-danger':'border-0'}`}>Lunch</div>
				<div onClick={handleDinner} style={{cursor:'pointer'}} className={`mx-3 fs-5 fw-bold ${activeDinner?'border-bottom border-3 border-danger text-danger':'border-0'}`}>Dinner</div>
			</div>
			{
				activeBreakfast?
				<Breakfast></Breakfast>
				:
				''
			}
			
			{
				activeLunch?
				<Lunch></Lunch>
				:
				''
			}
			
			{
				activeDinner?
				<Dinner></Dinner>	
				:
				''
			}
			
		</div>
	);
};

export default Foods;