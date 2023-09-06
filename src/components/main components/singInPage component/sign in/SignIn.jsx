import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  // api url
  const login_URL = process.env.REACT_APP_LOGIN_URL;

  const navigate = useNavigate();

  // password toggle hide and show
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // user login details
  const [login_email_id, setLogin_email_id] = useState("");
  const [login_password, setLogin_password] = useState(null);

  function login(e) {
    e.preventDefault();

    if (login_email_id && login_password) {
      const loginData = {
        // email: login_email_id,
        // password: login_password,
        username: login_email_id,
        password: login_password,
      };

      axios
        .post(login_URL, loginData)
        .then((response) => {
          //get token from response
          const accessToken = response.data;

          //set JWT token to local
          localStorage.setItem("accessToken", accessToken);
          toast.success("Login successfully");

          // setTimeout(() => {
          //   navigate("/admin");
          // }, 2000);
        })
        .catch((error) => {
          // console.log("error", error.response.data.message);
          console.error(error.response);
        });
    } else {
      toast.error("please fill the login details");
    }
  }
  return (
    <>
      <main>
        <section className="pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                <div className="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
                  <h2>Log in to your account</h2>
                  <form className="mt-4">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="emailid">
                        Email address
                      </label>
                      <input
                        type="email"
                        autoComplete="off"
                        className="form-control"
                        id="emailid"
                        placeholder="email@example.com"
                        onChange={(e) => {
                          setLogin_email_id(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="input-group">
                        <input
                          type={passwordShown ? "text" : "password"}
                          autoComplete="off"
                          className="form-control"
                          id="password"
                          placeholder="*********"
                          onChange={(e) => {
                            setLogin_password(e.target.value);
                          }}
                        />
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
                    </div>

                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={login}
                        >
                          Sign in
                        </button>
                      </div>
                      <div className="col-sm-8 text-sm-end">
                        <span className="">
                          Forget{" "}
                          <a href="#">
                            <u>password?</u>
                          </a>
                        </span>
                        <br />
                        <span>
                          Don't have an account?{" "}
                          <Link to="/signup">
                            <u>Sign up</u>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div className="text-center">
                    <p>Sign in with your social network for quick access</p>
                    <ul className="list-unstyled d-flex flex-column flex-sm-row mt-3 justify-content-center align-items-center">
                      <li className="mx-2">
                        <a
                          href="/"
                          className="btn bg-facebook d-inline-block text-wrap "
                        >
                          <i className="fab fa-facebook-f me-2" /> Sign in with
                          Facebook
                        </a>
                      </li>
                      <li className="mx-2">
                        <a
                          href="/"
                          className="btn bg-google d-inline-block text-wrap"
                        >
                          <i className="fab fa-google me-2" /> Sign in with
                          google
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
    </>
  );
}

export default SignIn;
