// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="container mt-5">
        <div className='row justify-content-center p-5 mt-5'>
          
          <div className="col-md-4 ">
          </div>
        <div className="col-md-4 card p-5 bg-light">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link to='/'>
              <button type="submit" className="btn btn-success w-100">Login</button>
              </Link>
          </form>
          </div>
          <div className="col-md-4 ">
          </div>
        </div>
      </div>
  );
}

export default Login;
