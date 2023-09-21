import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {Row, Col, Button} from "react-bootstrap";

function SignIn() {
  const LOGIN_API = process.env.REACT_APP_LOGIN_URL;
  const navigate = useNavigate();

  // Password Toggle Hide and Show
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // User Login Details
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  function login(e) {
    e.preventDefault();
    if (email && password) {
      const loginData = {
        username: email,
        password: password,
      };

      axios.post(LOGIN_API, loginData)
        .then((response) => {
          //Get token from Response
          const accessToken = response.data;
          //set JWT token to Local Storage
          localStorage.setItem("accessToken", accessToken);
          toast.success("Successfully Logged In");
          setTimeout(() => {
            navigate("/admin");
          }, 1000);
        })
        .catch((error) => {
          console.error(error.response);
        });
    } else {
      toast.error("Please enter email and password to Login.");
    }
  }

  return(<>
    <main>
      <section className="pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
              <div className="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
                <h2>Log in to your account</h2>
                <form className="mt-4">
                  <div className="mb-3">
                    <label className="form-label input-group" htmlFor="email"> Email address </label>
                    <div className="input-group "> 
                    <input type="email" autoComplete="on" className="input-group-text-group form-control"  id="email" placeholder="email@example.com"
                      onChange={(e) => {setEmail(e.target.value);}}/>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password"> Password </label>
                    <div className="input-group me-0 pe-0">
                      <input type={passwordShown ? "text" : "password"} autoComplete="off" className=" form-control pe-0 me-0" id="password" placeholder="*********"
                        onChange={(e) => {setPassword(e.target.value);}} />
                      <span onClick={togglePassword} className="input-group-text"> 
                        {passwordShown ? (<i className="far fa-eye cursor-pointer"></i>) : 
                        (<i className="far fa-eye-slash cursor-pointer me-0 pe-0" ></i>)}
                      </span>
                    </div>
                    {/* <Row>
                      <Col xs="10">
                      <input type={passwordShown ? "text" : "password"} autoComplete="off" className="form-control" id="password" placeholder="*********"
                        onChange={(e) => {setPassword(e.target.value);}} />
                      </Col>
                      <Col xs="2">
                      <Button className="btn btn-icon-only" variant="outline-info" onClick={togglePassword} >
                        {passwordShown ? (<i className="far fa-eye cursor-pointer"></i>) : 
                        (<i className="far fa-eye-slash cursor-pointer" ></i>)}
                      </Button>
                      </Col>
                    </Row>*/}
                  </div>
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <button type="submit" className="btn btn-success" onClick={login}> Sign in </button>
                    </div>
                    <div className="col-sm-8 text-sm-end">
                      <span className="">Forget <a href="#"> <u>Password?</u></a></span>
                      <br />
                      <span> Don't have an account?<Link to="/signup"> <u>Sign up</u> </Link></span>
                    </div>
                  </div>
                </form>
                <hr />
                <div className="text-center">
                  <p>Sign in with your social network for quick access</p>
                  <ul className="list-unstyled d-flex flex-column flex-sm-row mt-3 justify-content-center align-items-center">
                    <li className="mx-2">
                      <a href="/" className="btn bg-facebook d-inline-block text-wrap" >
                        <i className="fab fa-facebook-f me-2" /> Sign in with Facebook
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="/" className="btn bg-google d-inline-block text-wrap" >
                        <i className="fab fa-google me-2" /> Sign in with google
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>);
}

export default SignIn;
