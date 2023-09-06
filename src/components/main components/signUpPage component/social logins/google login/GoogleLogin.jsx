import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function GoogleLogin() {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  function logOut() {
    googleLogout();
    setProfile(null);
    setUser(null);
  }

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err.response));
    }
  }, [user]);

  if (profile && user) {
    console.log("user", user);
    console.log("profile", profile);
  }

  return (
    <>
      {profile ? (
        <button
          className="btn bg-google d-inline-block text-wrap"
          onClick={logOut}
        >
          <i className="fab fa-google me-2" />
          Sign out from Google
        </button>
      ) : (
        <button
          className="btn bg-google d-inline-block text-wrap"
          onClick={login}
        >
          <i className="fab fa-google me-2" />
          Sign in with Google
        </button>
      )}
    </>
  );
}

export default GoogleLogin;
