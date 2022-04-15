import React from 'react';
import { IconName, FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Social = () => {
	return (
		<div>
			<h5 className='text-center'>---------------- <span className='text-danger'>or</span> ----------------</h5>
			<button style={{width:'300px'}} className='btn btn-light d-flex justify-content-center align-items-center border mt-4 mb-3'><FcGoogle className='me-3 fs-4'></FcGoogle><span className='fs-5'>Google</span></button>

			<button style={{width:'300px'}} className='btn btn-light d-flex justify-content-center align-items-center border'><SiFacebook className='me-3 fs-5 text-primary'></SiFacebook><span className='fs-5'>Facebook</span></button>
		</div>
	);
};

export default Social;