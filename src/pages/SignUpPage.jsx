import React from "react";
import OtherHeader from "../components/super components/other header/OtherHeader";
import Footer from "../components/super components/footer/Footer";
import SignUp from "../components/main components/signUpPage component/sign up/SignUp";
import { GoogleOAuthProvider } from "@react-oauth/google";
function SignUpPage() {
  return (
    <>
      <OtherHeader />
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GG_APP_ID}`}>
        <SignUp />
      </GoogleOAuthProvider>
      <Footer />
    </>
  );
}

export default SignUpPage;
