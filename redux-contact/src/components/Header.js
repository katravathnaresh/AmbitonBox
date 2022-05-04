
import React from "react";
import {Link} from "react-router-dom";


const Header = () => {


  return (
    <div>
            <div className="App ">

      
      <nav className="navbar navbar-expand-lg navbar-dark  nav-bg " >
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/ambition" href="#"><img className='img-fluid' src="https://static.ambitionbox.com/static/awards/black-theme/awards22/ambox-gold-leaves-logo.svg"/> Ambitionbox</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" aria-labelledby="navbarSupportedContent" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/companies" className="nav-link active h4" aria-current="page" > Companies</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link active h4 "  to="/reviews">Reviews</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active h4 "  to="/interviews"> Interviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active h4 "  to="/jobs"> Jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active h4 "  to="/salary"> Salary Calculator</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active h4 "  to="/Awards">  Awards 2022</Link>
        </li>
      </ul>
     
   
      <ul id='navright' className="navbar-nav me-auto  mb-2 mb-lg-0 d-flex">
          <li className="nav-item">
              <Link className="nav-link active h4" to="/contribute">+Contribute</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link active h4" to="/login">Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link active h4" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link active h4" to="/employer">Employer?</Link>
          </li>
      </ul>
      </div>
  </div>
</nav>
<div  >
{/* <img id="headimg" src="https://blog.veilsun.com/hubfs/ConstructBase/Images/Construction_background.jpg#keepProtocol"/> */}
</div>
</div>

{/* this is header */}




    </div>
  )
}

export default Header
