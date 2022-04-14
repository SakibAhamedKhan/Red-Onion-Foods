import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import background from '../../../images/bannerbackground.png';
import './SearchPart.css'

const SearchPart = () => {
	return (
		<div>
			<div className='position-relative'>
				<img className='img-fluid w-100' src={background} alt="" />
			</div>
			<div className='position-absolute w-100 search-part'>
				<h2>Best Testy Food Waiting For You!</h2>
				<InputGroup className="mb-3 search-box mx-auto my-4">
					<FormControl
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					className='search-field ps-3'
					/>
					<Button variant="outline-danger" id="button-addon2" className='search-btn btn-danger text-light order-1 px-3'>
					Button
					</Button>
  				</InputGroup>
			</div>
		</div>
	);
};

export default SearchPart;