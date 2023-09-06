import React from "react";
import toast from "react-hot-toast";
import "./signup.css";
import { useFormik } from "formik";
import signUpSchema from "./sign up schema/SignUpSchema";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../social logins/google login/GoogleLogin";

function SignUp() {
  const signup_URL = process.env.REACT_APP_REGISTER_URL;
  const navigate = useNavigate();

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);

        axios
          .post(signup_URL, {
            username: values.email,
            password: values.confirm_password,
            // firstname: values.fname,
            // lastname: values.lname,
            // email: values.email,
            // password: values.confirm_password,
          })
          .then((response) => {
            // console.log("response", response);
            if (response.status === 201) {
              toast.success("Account created successfully!");
            }
            action.resetForm();
            // setTimeout(() => {
            //   navigate("/signin");
            // }, 2000);
          })
          .catch((error) => {
            // console.log("error", error);
            console.error(error.response);
          });
      },
    });

  // password toggle hide and show
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        {/* Inner intro START */}
        <section className="pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-8 mx-auto">
                <div className="bg-primary bg-opacity-10 rounded p-4 p-sm-5">
                  <h2>Create your free account </h2>
                  {/* Form START */}
                  <form onSubmit={handleSubmit} className="mt-4">
                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="fname">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        autoComplete="off"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        value={values.fname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.fname && touched.fname ? (
                        <p className="form-error">{errors.fname}</p>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="lname">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        autoComplete="off"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        value={values.lname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.lname && touched.lname ? (
                        <p className="form-error">{errors.lname}</p>
                      ) : null}
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <div className="input-group">
                        <input
                          // type="email"
                          name="email"
                          id="email"
                          autoComplete="off"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="E-mail"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <button type="button" className="btn btn-primary">
                          Verify
                        </button>
                      </div>
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                      <small id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="input-group">
                        <input
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="*********"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></input>
                        <span
                          className="input-group-text p-0"
                          onClick={togglePassword}
                        >
                          {passwordShown ? (
                            <i className="far fa-eye cursor-pointer p-2 w-40px "></i>
                          ) : (
                            <i className="far fa-eye-slash cursor-pointer p-2 w-40px"></i>
                          )}
                        </span>
                      </div>
                      {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                      ) : null}
                    </div>
                    {/* confirm Password */}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="confirm_password">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        autoComplete="off"
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control"
                        placeholder="*********"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className="form-error">{errors.confirm_password}</p>
                      ) : null}
                    </div>
                    {/* Checkbox */}
                    {/* <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        name="check1"
                        className="form-check-input"
                        id="Check1"
                      />
                      <label className="form-check-label" htmlFor="Check1">
                        Yes i'd also like to sign up for additional subscription
                      </label>
                    </div> */}
                    {/* Button */}
                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <button type="submit" className="btn btn-success">
                          Sign up
                        </button>
                      </div>
                      <div className="col-sm-8 text-sm-end">
                        <span>
                          Have an account?{" "}
                          <Link to="/signin">
                            <u>Sign in</u>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </form>
                  {/* Form END */}
                  <hr />
                  {/* Social-media btn */}
                  <div className="text-center">
                    <p>Sign up with your social network for quick access</p>
                    <ul className="list-unstyled d-sm-flex mt-3 justify-content-center">
                      <li className="mx-2">
                        <a
                          href="/"
                          className="btn bg-facebook d-inline-block text-wrap"
                        >
                          <i className="fab fa-facebook-f me-2" /> Sign up with
                          Facebook
                        </a>
                      </li>
                      <li className="mx-2">
                        {/* <a
                          href="#"
                          className="btn bg-google d-inline-block text-wrap"
                        >
                          <i className="fab fa-google me-2" />
                          Sign up with Google
                        </a> */}
                        <GoogleLogin />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inner intro END */}
      </main>
      {/* **************** MAIN CONTENT END **************** */}
    </>
  );
}

export default SignUp;
