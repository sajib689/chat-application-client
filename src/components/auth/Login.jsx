import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="register">
        <div className="card">
          <div className="card-header">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <form action="">
            
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
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
                  className="form-control"
                  placeholder="Password"
                  id="password"
                />
              </div>
             
              {/* Button */}
              <div className="form-group">
                <input type="submit" className="btn" value="Login" />
              </div>
              <div className="form-group">
                <span className="link">
                  <Link className="text" to='/register'>Have An Account?</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;