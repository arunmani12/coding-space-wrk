import React from "react";

import "./Login.css";
import image from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="image-container">
          <img src={image} alt="logo" className="login-logo" />
        </div>
        <form>
          <h3 className="login-title">Login</h3>
          <div className="form-group-login">
            <label htmlFor="userId" className="form-label-login">
              User ID
            </label>
            <input
              type="text"
              placeholder="User ID"
              className="form-input-login"
            />
          </div>
          <div className="form-group-login">
            <label htmlFor="userId" className="form-label-login">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-input-login"
            />
          </div>
          <button type="submit" className="form-submitBtn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
