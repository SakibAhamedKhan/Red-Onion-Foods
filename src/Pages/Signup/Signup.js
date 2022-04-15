import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import logo from '../../images/logo2.png';
import Social from '../Shared/Social/Social';

const Signup = () => {
	const navigate = useNavigate();

	const handleImg = () =>{
		navigate('/home');
	}
	return (
		<div className='login-container d-flex justify-content-center align-items-center'>
			<div className='login pb-5'>
			<div style={{cursor:'pointer'}} className='d-flex justify-content-center align-items-center'>
					<img onClick={handleImg} className='mb-4' src={logo} height={60} alt="" />
				</div>
				<input type="text" name="name" id="" placeholder='Name'/>
				<input type="email" name="email" id="" placeholder='Email'/>
				<input type="password" name="password" id="" placeholder='Password'/>
				<input type="password" name="confirmPassword" id="" placeholder='Confirm Password'/>
				<button style={{width:'300px'}} className='btn btn-danger'>Sign up</button>
				<p className='mt-2 text-center'>Already have account? <Link className='text-decoration-none text-danger' to='/login'> Login</Link></p>
			<Social></Social>
			</div>			
		</div>
	);
};

export default Signup;