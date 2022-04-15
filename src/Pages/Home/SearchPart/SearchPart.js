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
				<InputGroup className="mb-3 search-box mx-auto my-4">
					<FormControl
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					className='search-field ps-3'
					/>
					
					<Button variant="outline-danger" id="button-addon2" className='search-btn btn-danger text-light px-3'>
					Button
					</Button>
  				</InputGroup>
			</div>
		</div>
	);
};

export default SearchPart;