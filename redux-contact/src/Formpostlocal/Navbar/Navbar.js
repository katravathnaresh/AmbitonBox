import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {


  return (
    <div>
            <div className="App">

      
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='img-fluid' src="http://images.clipartpanda.com/carpenter-clipart-royalty-free-vector-logo-of-a-banner-and-carpenter-by-patrimonio-771.jpg"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#taggle" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="taggle">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active h4" aria-current="page" to="/logins">LOGIN</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link active h4 "  to="/signup">SIGN UP</Link>
        </li>

      </ul>
     
      <form className="d-flex" >
        <input id="searchbar" className="form-control-lg " type="search" placeholder="Search" />
        <button className="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
      </form>
      </div>
  </div>
</nav>
<div  >
{/* <img id="headimg" src="https://blog.veilsun.com/hubfs/ConstructBase/Images/Construction_background.jpg#keepProtocol"/> */}
</div>
</div>

    </div>
  )
}

export default Navbar
