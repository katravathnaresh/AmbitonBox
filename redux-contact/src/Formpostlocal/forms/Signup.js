import React,{useState} from 'react'

import Logins from './Logins';
import axios from "axios";
import {useForm} from "react-hook-form"
import "./style.css"
const Signup = () => {
    
   

    const [names, setName] = useState('');
    const [numbers, setNumber] = useState('');
    const [emails, setEmail] = useState('');
    const [passwords, setPassword] = useState("");
    const [cpasswords, setCpassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    const [checks, setCheck] = useState('');
    // this is error flags
    // const [nameflag,setNameflag] = useState(false);
    // const [numberflag,setNumberflag] =useState(false);
    // const [emailflag,setEmailflag] =useState(false);
    const [cpasswordflag,setCpasswordflag] =useState(false);
  // DESTRUCTURING

  const data = {
    NAMES: names,
    PHONE: numbers,
    EMAIL: emails,
    PASSWORD: passwords,
  };


  //  onSUBMIT

  const submit = async (e) => {
    e.preventDefault();
    if (
      names ==="" ||
      numbers ==="" ||
      emails === "" ||
      passwords ==="" ||
      checks ==="" ||
      cpasswords ===""
    ) {
      setFlag(true);
      
      
    }
else if(
!cpasswordflag || !passwords

){
setCpasswordflag(true);
}

  else  {
    setCpasswordflag(true);
      setFlag(false);
      localStorage.setItem("name", JSON.stringify(names));
      localStorage.setItem("email", JSON.stringify(emails));
      localStorage.setItem("password", JSON.stringify(passwords));
      localStorage.setItem("phone", JSON.stringify(numbers));
      console.log("saved in local storage");
      setLogin(!login);
      posting();
      
    }
    
  };

  // json API
  const posting = async () => {
    await axios
      .post("  http://localhost:8000/data", data)
      saveTokenInLocalStorage(data);
      
  };

  const click = () => {
    setLogin(!login);
  }

  return (

    
    <div>

 {login ? ( 
            <div className="signup-page">
      <div className="form">
        <div className="signup">
          <div className="signup-header">
            <h3>SIGN UP</h3>
            <p>Please enter your credentials to signup.</p>
          </div>
        </div>
        <form onSubmit={submit} className="signup-form">
          <input
           type="text"
           placeholder="username"
           name="name"
           
           onChange={(e) => setName(e.target.value)}
           />
           
           {/* {nameflag && <p className="text-danger">please enter user name  </p>} */}
      
          
          <input
           type="email"
            placeholder="email"
            name="email"

            onChange={(e) => setEmail(e.target.value)}
            />
           
            
          <input
           type="phone" 
           placeholder='phone'
           name="phone"
           onChange={(e) => setNumber(e.target.value)}
           />
          
          <input
           type="password" 
           placeholder="password"
           name="password"
           onChange={(e) => setPassword(e.target.value)}pm 
           />

         <input
           type="cpassword" 
           placeholder="conform password"
           name="cpassword"
           onChange={(e) => setCpassword(e.target.value)}pm 
           />
{cpasswordflag && <p className="text-danger">Plz enter the the correct password  </p>}

            <input
              type="checkbox"
              className="form-check-input "
              onChange={(e) => setCheck(e.target.value)}
              // onChange={change}
            />
            <label className="form-check-label">Check me out</label>
          

{flag && <p className="text-danger">Please fill the all inputs  </p>}
          

          <button>signup</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
          <p onClick={click}>have a account {setLogin}</p>
   

        </form>
      </div>
      </div>
      ) : (
        <Logins />
      )} 
    </div>
  )
};

export default Signup;
export function saveTokenInLocalStorage(tokenDetails){
    localStorage.setItem('userDetails',JSON.stringify(tokenDetails));
}
