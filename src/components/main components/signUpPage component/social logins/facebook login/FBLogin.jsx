import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function FBLogin() {
  const fbAppId = process.env.REACT_APP_FB_APP_ID;
  const [login, setLogin] = useState(false);
  const [data, setData] = useState();
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <FacebookLogin
        appId={fbAppId}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </>
  );
}

export default FBLogin;
