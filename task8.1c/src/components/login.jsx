import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utl/firebase";
import './login.css';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/";
    }catch (error) {
      console.log(error.message);
      }
    };
  return (
    <div className='container1'>
      <form className='loginform' onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="email">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="button">
          <a href="/register">Register Here</a>
          </div>

          

        </div>
      </form>
    </div>
    
  );
}

export default Login;