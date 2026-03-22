import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    
    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "userName": userName,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
      }),
    });

    const json = await res.json();
    if (json.status === "Authenticated") {
      sessionStorage.setItem('username', json.userName);
      window.location.href = window.location.origin;
    } else {
      alert("Registration failed. Please check your details.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={register}>
        <h2>Sign Up</h2>
        <hr />
        
        <div className="input-group">
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" placeholder="Username" required 
            onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="First Name" required 
            onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Last Name" required 
            onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required 
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required 
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;