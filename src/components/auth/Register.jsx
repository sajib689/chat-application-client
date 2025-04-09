import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const inputHandle = (e) => {};

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form action="">
            {/* UserName */}
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                onChange={inputHandle}
                name="userName"
                className="form-control"
                placeholder="User Name"
                id="username"
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={inputHandle}
                name="email"
                className="form-control"
                placeholder="Email"
                id="email"
              />
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={inputHandle}
                name="password"
                className="form-control"
                placeholder="Password"
                id="password"
              />
            </div>
            {/*Confirm Password */}
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="confirmPassword"
                onChange={inputHandle}
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
              />
            </div>
            {/* Image */}
            <div className="form-group">
              <div className="file-image">
                <div className="image"></div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    onChange={inputHandle}
                    name="image"
                    className="form-control"
                    id="image"
                  />
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="form-group">
              <input type="submit" className="btn" value="Register" />
            </div>
            <div className="form-group">
              <span className="link">
                <Link className="text" to="/login">
                  Already Have An Account?
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
