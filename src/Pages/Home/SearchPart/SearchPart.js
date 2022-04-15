import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import background from '../../../images/bannerbackground.png';
import './SearchPart.css'
import icon1 from '../../../images/icons/Group 743.png';
import icon2 from '../../../images/icons/Group 747.png';
import icon3 from '../../../images/icons/Group 767.png';
import icon4 from '../../../images/icons/Group 765.png';
import icon5 from '../../../images/icons/Group 761.png';

const SearchPart = () => {
	return (
		<div>
			<div className='position-relative background'>
				
			</div>
			<div style={{top:'85%',left:'15%'}} className='position-absolute'>
				<img style={{transform: 'rotate(20deg)'}} height={90} src={icon1} alt="" />
			</div>
			<div style={{top:'80%',left:'72%'}} className='position-absolute'>
				<img src={icon2} alt="" />
			</div>
			<div style={{top:'10%',left:'58%'}} className='position-absolute'>
				<img src={icon2} alt="" />
			</div>
			<div style={{top:'60%',left:'38%'}} className='position-absolute'>
				<img height={150} src={icon3} alt="" />
			</div>
			<div style={{top:'20%',left:'78%'}} className='position-absolute'>
				<img height={80} src={icon4} alt="" />
			</div>
			<div style={{top:'22%',left:'5%'}} className='position-absolute'>
				<img style={{transform: 'rotate(-20deg)'}} height={130} src={icon5} alt="" />
			</div>
			<div className='position-absolute w-100 search-part'>
				<h2 className='text-center'>Best Testy Food Waiting For You!</h2>
				<div className='d-flex justify-content-center mt-3'>
				<input type="text" className='search-box ps-3 rounded-pill border-0' placeholder='Search food items'/>
				<button className='btn btn-danger rounded-pill search-btn px-4'>Search</button>
				</div>
			</div>
		</div>
	);
};

export default SearchPart;