import React from 'react';

const Footer = () => {
	return (
		<div className='bg-dark p-5'>
			<p className='text-light text-center m-0'>Copyright ©{new Date().getFullYear()} online food</p>
		</div>
	);
};

export default Footer;