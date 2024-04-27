import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Login() {
  const [name, setName] = useState('')
  const [password, setPass] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
     username : name,
     password : password
    }

    axios.post('http://localhost:8000/api/v1/auth/login', payload, {
      headers : {
        "Content-Type" : "application/json"
      }
    })
      .then(res => {
        const token = res.data
        localStorage.setItem('token', token)
      });

      
  }
  return (
    <>
      <form className="form-signin" action="home.html" onSubmit={handleSubmit}> 
        <h2 className="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputEmail"
          className="form-control"
          placeholder="Username"
          required
          autofocus
          value={name} onChange={e => {setName(e.target.value)}}
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          value={password} onChange={e => {setPass(e.target.value)}}
          required
        />
        <br />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
