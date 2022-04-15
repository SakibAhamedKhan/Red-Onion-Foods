import React from 'react';
import { IconName, FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Social = () => {
	return (
		<div className=''>
			<h5 className='text-center'>---------------- <span className='text-danger'>or</span> ----------------</h5>
			<button style={{width:'300px'}} className='btn btn-light d-flex justify-content-center align-items-center border mt-4 mb-3 ms-4'><FcGoogle className='me-3 fs-4'></FcGoogle><span className='fs-5'>Google</span></button>

			<button style={{width:'300px'}} className='btn btn-light d-flex justify-content-center align-items-center border ms-4'><SiFacebook className='me-3 fs-5 text-primary'></SiFacebook><span className='fs-5'>Facebook</span></button>
		</div>
	);
};

export default Social;