import React from 'react';
import './Login.css'
import logo from '../../images/logo2.png'
import { Link,useNavigate } from 'react-router-dom';
import Social from '../Shared/Social/Social';


const Login = () => {
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
				<input type="email" name="email" id="" placeholder='Email'/>
				<input type="password" name="password" id="" placeholder='Password'/>
				<button style={{width:'300px'}} className='btn btn-danger'>Log in</button>
				<p className='mt-2 text-center'>New in Red Onion? <Link className='text-decoration-none text-danger' to='/signup'> Signup</Link></p>
			<Social></Social>			
			</div>
		</div>
	);
};

export default Login;