import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import  { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GG_APP_ID}>
    <React.StrictMode>
      <Toaster />
      <App />
    </React.StrictMode>{" "}
  </GoogleOAuthProvider>
);
