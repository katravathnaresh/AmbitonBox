import React from "react";
import Footer from "../Footer";

const Reviews = () => {
  return (
    <div >
    
    <div className="nav-bgg">
        <div className="row nav-bgg top-header">
          <div className="col-md-9   m-auto">
            {/* Company reviews */}
            <div className="row mt-5">
              <div className="col-md-9">
                <h4 className="header-Discover ">
                Search Company Reviews & Ratings
                </h4>
                <p className="text-light hello ">
                Read what employees are saying about companies.
                </p>
                <div className="row justify-content-evenly">
                  <div class=" col-md-7 col-7 m-0 mt-3 mb-5 ">
                    <input
                      type="search"
                      className="form-control round ml-5 "
                      placeholder="Search by Company or Designation"
                    />
                  </div>
                  <div class=" col-md-3 col-3 mt-3 mb-5 ">
                    <button class="btn  blackdiv-btn mt-2 " type="submit">
                      SEARCH
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* this is Reviwes first row-------------------------------------------------------------- */}
  
<div className="container-fluid">
        <div className="row justify-content-evenly mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4 className="browse">Browse Companies by Location</h4>
              </div>
            </div>
            {/* this is carosul */}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* this is a first card -----------------------------------------------*/}
                <div className="carousel-item active">
                  <div className="row mt-4 justify-content-evenly">
                    <div className=" col-lg-2  col-md-4 col-9  mb-2">
                      <div class="card">
                        <div class="card-body  justify-content-center">
                          <img className="pl-5 img-locations" 
                            src="https://static.ambitionbox.com/static/icons/locations/delhi.svg"
                            
                          />
                          <h6 className="text-center lacation-text mt-3">Delhi</h6>
                        </div>
                      </div>
                    </div>
                    {/* this is second div */}
                    <div className=" col-lg-2  col-md-4 col-9  mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img className="img-locations"
                            src="https://static.ambitionbox.com/static/icons/locations/mumbai.svg"  />
                         <h6 className="text-center lacation-text mt-3">Mumbai</h6>
                        </div>
                      </div>
                    </div>
                    {/* this is 1st row in 3nd div */}
                    <div className="col-lg-2  col-md-4 col-9  mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img className="img-locations"
                            src="https://static.ambitionbox.com/static/icons/locations/hyderabad.svg" />
                         <h6 className="text-center lacation-text mt-3 ">Hyd</h6>
                        </div>
                      </div>
                    </div>
                    {/* this is 1st row in 4nd div */}
                    <div className="col-lg-2  col-md-4 col-9  mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img className="img-locations"
                            src="https://static.ambitionbox.com/static/icons/locations/chennai.svg" />
                          <h6 className="text-center lacation-text mt-3">Chennai</h6>
                        </div>
                      </div>
                    </div>
                    {/* this is 1st row in 5nd div */}
                    <div className="col-lg-2  col-md-4 col-9  mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img className="img-locations"
                            src="https://static.ambitionbox.com/static/icons/locations/bengaluru.svg" />
                          <h6 className="text-center lacation-text mt-3">Benglre</h6>
                        </div>
                      </div>
                    </div>
                    {/* this is 1st row in 6nd div */}
                    <div className="col-lg-2  col-md-4 col-9  mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img className="img-locations"
                            src="https://static.ambitionbox.com/static/icons/locations/pune.svg" />
                            <h6 className="text-center lacation-text mt-3">Pune</h6>
                          
                        </div>
                      </div>
                    </div>
              
 
                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
                </div>
              
               
              </div>

            
            </div>
</div>
</div>

{/* this is second row ------------------------------------------------------------------*/}
<div className="row mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Company reviews</h4>
                <p>
                  Real employees share how it is to work at their company. Read
                  reviews and make informed decisions.
                </p>
              </div>
            </div>
            {/* this is carosul */}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* this is a first card */}
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-md-4 mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/cromptongreaves.jpg"
                            style={{ height: "50px" }}
                          />
                          <h5>Crompton Greaves</h5>
                          <h6>Anonymous</h6>
                          <p class="card-text">
                            Production
                          </p>
                          <h6 className="">Like:</h6>
                          <p>Work culture recognition,respect and Training programs</p>
                          <h6 className="mt-4">Dislikes:</h6>
                          <p>very low salary rise,no proper salary structure as per experience.</p>
                        
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/societe-generale-global-solution-centre.jpg"
                            style={{ height: "50px" ,borderRadius:"50%" }}
                          />
                          <h5>Crompton Greaves</h5>
                          <h6>Anonymous</h6>
                          <p class="card-text">
                            Production
                          </p>
                          <h6 className="">Like:</h6>
                          <p>Work culture recognition,respect and Training programs</p>
                          <h6 className="mt-4">Dislikes:</h6>
                          <p>very low salary rise,no proper salary structure as per experience.</p>
                        
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card">
                        <div class="card-body">
                          <img 
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/v-mart-retail-ltd.jpg"
                            style={{ height: "50px" ,borderRadius:"50%" }}
                          />
                          <h5>Crompton Greaves</h5>
                          <h6>Anonymous</h6>
                          <p class="card-text">
                            Production
                          </p>
                          <h6 className="">Like:</h6>
                          <p>Work culture recognition,respect and Training programs</p>
                          <h6 className="mt-4">Dislikes:</h6>
                          <p>very low salary rise,no proper salary structure as per experience.</p>
                        
                        </div>
                      </div>
                    </div>
                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
                </div>
              
               
              </div>

            
            </div>
</div>
</div>




{/* this is 3rd row ------------------------------------------------------------------*/}
<div className="row mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Company reviews</h4>
                <p>
                  Real employees share how it is to work at their company. Read
                  reviews and make informed decisions.
                </p>
              </div>
            </div>
            {/* this is carosul */}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* this is a first card */}
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/army-medical-corps.jpg"
                            style={{ height: "50px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">Army medical Corps Reviews</h6>
                          <p >Federal Agencies,<br/>Medical<br/> Service</p>
                          <p>10k+ employees</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/aditya-birla-sunlife-asset-management-company.jpg"
                            style={{ height: "50px"}}
                          />
                          </div>
                          <div id="army" >
                          <h6 className="army">Army medical Corps Reviews</h6>
                          <p >Federal Agencies,<br/>Medical <br/>Service</p>
                          <p>10k+ employees</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/nis-management-private.jpg"
                            style={{ height: "50px"}}
                          />
                          </div>
                          <div id="army" >
                          <h6 className="army">Army medical Corps Reviews</h6>
                          <p >Federal Agencies,<br/>Medical<br/> Service</p>
                          <p>10k+ employees</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
                </div>
              
               
              </div>

            
            </div>


            {/* this is 4th row -----------------------------------------------------------------*/}

            <div className="row mb-3 justify-content-evenly">
                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/pmkvy.jpg"
                            style={{ height: "30px"}}
                          />
                          </div>
                          <div id="army" >
                          <h6 className="army">Army medical Corps Reviews</h6>
                          <p >Federal Agencies,<br/>Medical<br/> Service</p>
                          <p>10k+ employees</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/yes.jpg"
                            style={{ height: "20px"}}
                          />
                          </div>
                          <div id="army" >
                          <h6 className="army">Army medical Corps Reviews</h6>
                          <p >Federal Agencies,<br/>Medical<br/> Service</p>
                          <p>10k+ employees</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/mpmkvvcl.jpg"
                            style={{ height: "50px"}}
                          />
                          </div>
                          <div id="army" >
                          <h6 className="army">Army medical Corps Reviews</h6>
                          <p >Federal Agencies,<br/>Medical<br/> Service</p>
                          <p>10k+ employees</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* this is row div */}
                  </div>
</div>
</div>













{/* this is 5th row------------------------------------------------------------------------------------------------- */}

<div className="row my-4">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Contribute to the growing community</h4>
                <p>
                  Don`t worry. You can chose to be anonymous.
                </p>
              </div>
            </div>
            {/* this is carosul */}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* this is a first card */}
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-md-4 mb-2">
                      <div class="card text-center">
                        <div class="card-body shere">
                          <p className="text-center">shere a review of your current or past
                            companies. you opinion matters.
                          </p>
                          <button style={{borderRadius:"20px " ,color:"#2f81ef" ,borderBlockColor:"#2f81ef",padding:'5px 15px',marginBottom:"10px"}}>write a Review</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card text-center">
                        <div class="card-body shere">
                          <p className="text-center">shere a review of your current or past
                            companies. you opinion matters.
                          </p>
                          <button style={{borderRadius:"20px " ,color:"#2f81ef" ,borderBlockColor:"#2f81ef",padding:'5px 15px',marginBottom:"10px"}}>write a Review</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card text-center">
                        <div class="card-body shere">
                          <p className="text-center">shere a review of your current or past
                            companies. you opinion matters.
                          </p>
                          <button style={{borderRadius:"20px " ,color:"#2f81ef" ,borderBlockColor:"#2f81ef",padding:'5px 15px',marginBottom:"10px"}}>write a Review</button>
                        </div>
                      </div>
                    </div>
                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
                </div>
              
               
              </div>

            
            </div>
</div>
</div>



{/* this is 6th row ------------------------------------------------------------------*/}
<div className="row mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Company reviews</h4>
                <p>
                  Real employees share how it is to work at their company. Read
                  reviews and make informed decisions.
                </p>
              </div>
            </div>
            {/* this is carosul */}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* this is a first card */}
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/tata-group.jpg"
                            style={{ height: "50px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">Tata </h6>
                          <p >Architecture<br/>Interior <br/> design</p>
                          
                          </div>
                        </div>
                        <div className=" d-flex justify-content-evenly">
                          <p>Reviews</p>
                          <p>salaries</p>
                          <p>Interviews</p>
                          </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/reliance.jpg"
                            style={{ height: "50px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">Reliance</h6>
                          <p >Architecture<br/>Interior <br/>design</p>
                          
                          </div>
                        </div>
                        <div className=" d-flex justify-content-evenly">
                          <p>Reviews</p>
                          <p>salaries</p>
                          <p>Interviews</p>
                          </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/icici_bank.jpg"
                            style={{ height: "20px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">ICICI </h6>
                          <p >Architecture<br/>Interior<br/> design</p>
                          
                          </div>
                        </div>
                        <div className=" d-flex justify-content-evenly">
                          <p>Reviews</p>
                          <p>salaries</p>
                          <p>Interviews</p>
                          </div>
                      </div>
                    </div>

                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
                </div>
              
               
              </div>

            
            </div>


            {/* this is 7th row -----------------------------------------------------------------*/}

            <div className="row mb-3 justify-content-evenly">
            <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/tcs.jpg"
                            style={{ height: "14px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">TCS</h6>
                          <p >Architecture<br/>Interior<br/> design</p>
                          
                          </div>
                        </div>
                        <div className=" d-flex justify-content-evenly">
                          <p>Reviews</p>
                          <p>salaries</p>
                          <p>Interviews</p>
                          </div>
                      </div>
                    </div>


                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/hdfc.jpg"
                            style={{ height: "30px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">HDFC </h6>
                          <p >Architecture<br/>Interior <br/> design</p>
                          
                          </div>
                        </div>
                        <div className=" d-flex justify-content-evenly">
                          <p >Reviews</p>
                          <p>salaries</p>
                          <p>Interviews</p>
                          </div>
                      </div>
                    </div>

                    <div className="col-md-4  mb-2">
                      <div className="card  justify-content-between  ">
                        <div className="card-body d-flex">
                         <div className=" mt-4">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/l-and-t-group.jpg"
                            style={{ height: "20px"}}
                          />
                          </div>
                          <div id="army" className="text-fluid" >
                          <h6 className="army">Larsen</h6>
                          <p >Architecture<br/>Interior<br/> design</p>
                          
                          </div>
                        </div>
                        <div className=" d-flex justify-content-evenly">
                          <p>Reviews</p>
                          <p>salaries</p>
                          <p>Interviews</p>
                          </div>
                      </div>
                    </div>

                    {/* this is row div */}
                  </div>
</div>
</div>



{/* this is footer div */}
<Footer/>



{/* this is container div */}
   




</div>
  
   </div>
  );
};

export default Reviews;