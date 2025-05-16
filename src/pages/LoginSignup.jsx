import React from "react";
import "./CSS/loginsignup.css";
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Id" />
          <input type="password" placeholder="password" />
        </div>

        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" className="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
        <div className="centerbtn">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};
