import React from "react";
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

const Signup = () => {
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
        <Form onSubmit={handleSubmit}>
			<input type="text" name="name" id="" placeholder="Name" />
			<input type="email" name="email" id="" placeholder="Email" />
			<input type="password" name="password" id="" placeholder="Password" />
			<input
			type="password"
			name="confirmPassword"
			id=""
			placeholder="Confirm Password"
			/>
			<button style={{ width: "300px" }} className="btn btn-danger" type="submit">
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
