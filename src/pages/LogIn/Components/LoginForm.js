import React, { useState } from "react";

import './login.css';
import { Link } from 'react-router-dom'

const LoginForm = ({ loginIn }) => {

      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      function handleSubmit(e) {
        e.preventDefault();
        loginIn(email, password);
      }

      

      function lookPass() {
        let x = document.getElementById("input-password");
        if (x.type == "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      };
                      return (
                        <div className="container-login">
                          <h1 className="h1-login">Log in</h1>
                          <hr className="hr" />
                          <form onSubmit={handleSubmit} action="" className="form" >
                            <label htmlFor="">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Write your email..."
                              maxLength="30"
                              autoComplete="off"
                              onChange={e => setEmail(e.target.value)}
                              value={email} />
                            <br />
                            <label>Password</label>
                            <input
                              type="password"
                              name=""
                              id="input-password"
                              maxLength="15"
                              placeholder="Write password..."
                              minLength="8"
                              onChange={e => setPassword(e.target.value)}
                              value={password}
                            />
                            <div className="div-lookPass-login">
                              <input type="checkbox"
                                
                                onClick={lookPass} />
                              <h6>Show password</h6>
                            </div>

                          </form>
                          <div className="div-buttons">
                            <Link type="submit"
                              onClick={handleSubmit}
                              className="btn-1" to="#" >Get in</Link>
                            <Link className="btn-lost" to="#">Have you forgotten password?</Link>
                            <Link className="btn-2" to="/Home/NewUser">Create new account</Link>
                          </div>

                        </div>
  )
}

export default LoginForm;