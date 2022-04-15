import React, { useState } from 'react';
import './Login.css'
import logo from '../../images/logo2.png'
import { Link,useNavigate } from 'react-router-dom';
import Social from '../Shared/Social/Social';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Form } from 'react-bootstrap';
import Loading from '../Shared/Loading/Loading';
import { BiShowAlt, BiHide } from "react-icons/bi";



const Login = () => {
	const [passwordShowHide, setPasswordShowHide] = useState(false);
	const navigate = useNavigate();
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);

	const handleImg = () =>{
		navigate('/home');
	}
	if(user){
		
		navigate('/home');
	}
	if(loading){
		return <Loading></Loading>;
	}
	const handleSubmit = event => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		signInWithEmailAndPassword(email, password);
	}
	return (
		<div className='login-container d-flex justify-content-center align-items-center'>
			<div className='login pb-5'>
				<div style={{cursor:'pointer'}} className='d-flex justify-content-center align-items-center'>
					<img onClick={handleImg} className='mb-4' src={logo} height={60} alt="" />
				</div>
				<Form onSubmit={handleSubmit} className='ms-4'>
					<input type="email" name="email" id="" placeholder='Email' required/>
					<input type={`${passwordShowHide?'text':'password'}`} name="password" id="" placeholder='Password' required/>
					{/* Password Show and Hide Button */}
					<span className="position-relative" style={{float:'right',top:'-55px', left:'-30px'}}>
						<button type="button" onClick={()=> setPasswordShowHide(!passwordShowHide)} style={{border:'none', background:'transparent'}}>{
						passwordShowHide? 
						<BiHide className="text-danger"></BiHide>
						: 
						<BiShowAlt className="text-danger"></BiShowAlt>
						}</button>
					</span>
					<button style={{width:'300px'}} className='btn btn-danger' type='submit'>Log in</button>
				</Form>
				<p className='mt-2 text-center'>New in Red Onion? <Link className='text-decoration-none text-danger' to='/signup'> Signup</Link></p>
			<Social></Social>			
			</div>
		</div>
	);
};

export default Login;