import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<div className='bg-dark p-5 footer'>
			<p className='text-light text-center m-0'>Copyright ©{new Date().getFullYear()} online food</p>
		</div>
	);
};

export default Footer;