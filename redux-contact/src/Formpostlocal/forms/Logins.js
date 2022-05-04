import React, { useState } from "react";
  import "./style.css";
  import Welcome from "./Welcome"
  
  const Logins = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
  
    const submit = (e) => {
      e.preventDefault();
      let nam = localStorage.getItem("name").replace(/"/g, "");
      let pass = localStorage.getItem("password").replace(/"/g, "");
      if (!name || !password) {
        setFlag(true);
      } else if (name !== nam || password !== pass) {
        setFlag(true);
      } else {
        setFlag(false);
        setHome(!home);
      }
    };

  return (
    <div>
         {home ? (
       <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form onSubmit={submit} className="login-form">
          <input type="text"
           name="name"
           onChange={(e) => setName(e.target.value)}
            placeholder="username"/>
          <input type="password" 
          name="password" 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"/>
             {flag && (
            <alert className="text-danger">
              **Please enter valid creditionals**
            </alert>
          )}
          <button type='submit'>login</button>
          {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
        </form>
      </div>
    </div>
      ) : (
        <Welcome />
      )}
    </div>
  )
}

export default Logins;
