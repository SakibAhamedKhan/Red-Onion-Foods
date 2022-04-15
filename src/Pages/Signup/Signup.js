import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "../../images/logo2.png";
import Social from "../Shared/Social/Social";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Form } from "react-bootstrap";
import Loading from "../Shared/Loading/Loading";
import { BiShowAlt, BiHide } from "react-icons/bi";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [passwordShowHide, setPasswordShowHide] = useState(false);
  const [confirmPasswordShowHide, setConfirmPasswordShowHide] = useState(false);
  
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleImg = () => {
    navigate("/home");
  };

  if(loading || updating){
    return <Loading></Loading>;
  }
  if(user) {
    navigate("/home");
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName:name});
	  console.log('Submitted', name, email, password, confirmPassword);
  }
  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login pb-5">
        <div
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            onClick={handleImg}
            className="mb-4"
            src={logo}
            height={60}
            alt=""
          />
        </div>
        <Form onSubmit={handleSubmit} className="ms-4">
            <input type="text" name="name" id="" placeholder="Name" required/>
            <input type="email" name="email" id="" placeholder="Email" required />
            <input type={`${passwordShowHide?'text':'password'}`} name="password" id="" placeholder="Password" required/>
            {/* Password Show and Hide Button */}
            <span className="position-relative" style={{float:'right',top:'-55px', left:'-30px'}}>
              <button type="button" onClick={()=> setPasswordShowHide(!passwordShowHide)} style={{border:'none', background:'transparent'}}>{
                passwordShowHide? 
                <BiHide className="text-danger"></BiHide>
                : 
                <BiShowAlt className="text-danger"></BiShowAlt>
              }</button>
            </span>
            <input
            type={`${confirmPasswordShowHide?'text':'password'}`}
            name="confirmPassword"
            id=""
            placeholder="Confirm Password"
            required
            />
            {/*Confirm Password Show and Hide Button */}
            <span className="position-relative" style={{float:'right',top:'-55px', left:'-30px'}}>
              <button type="button" onClick={()=> setConfirmPasswordShowHide(!confirmPasswordShowHide)} style={{border:'none', background:'transparent'}}>{
                confirmPasswordShowHide? 
                <BiHide className="text-danger"></BiHide>
                : 
                <BiShowAlt className="text-danger"></BiShowAlt>
              }</button>
            </span>

            <div className="d-flex justify-content-flex-start align-items-center mb-2 mt-3">
              <input onClick={()=> setChecked(!checked)} className="me-2 ms-1" type="checkbox" name="terms" id="terms" />
              <label style={{cursor:'pointer'}} htmlFor="terms" className={`${checked? 'text-info': 'text-danger'}`}>Accept the Terms and Conditions</label>
            </div>
            
            <button
              disabled={!checked}
            style={{ width: "300px" }} className="btn btn-danger" type="submit">
            Sign up
            </button>
	      </Form>
        <p className="mt-2 text-center">
          Already have account?{" "}
          <Link className="text-decoration-none text-danger" to="/login">
            {" "}
            Login
          </Link>
        </p>
        <Social></Social>
      </div>
    </div>
  );
};

export default Signup;
