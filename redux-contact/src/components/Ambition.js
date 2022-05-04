import React from "react";
import Footer from "../Footer";

const Ambition = () => {
  return (
    <div>
      <div className="nav-bgg">
        <div className="row nav-bgg top-header">
          <div className="col-md-9   m-auto">
            {/* Company reviews */}
            <div className="row mt-5">
              <div className="col-md-9">
                <h4 className="header-Discover ">
                  Discover Best Places to Work!
                </h4>
                <p className="text-light hello ">
                  Company reviews. Salaries. Interviews. Jobs.
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

      <div className="container-fluid">
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
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/ey.jpg"
                            style={{ height: "50px" }}
                          />
                          <h6>Rohit</h6>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="card-link">
                            Viwe detailed
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/capgemini.jpg"
                            style={{ height: "50px" }}
                          />
                          <h6>Rakesh varma</h6>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="card-link">
                            Viwe detailed
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/hcl-technologies-88.jpg"
                            style={{ height: "50px" }}
                          />
                          <h6>Sundhar sing</h6>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="card-link">
                            Viwe detailed
                          </a>
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




            {/* this is black div row --------------------------------------------------------------------------------------------*/}
            <div className="row justify-content-evenly  mt-5 " >
                  <div className="col-md-9">
                  <div className="row justify-content-evenly bg-dark" id="blackdiv" >
                  <div className="col-md-4 col-12 text-center  ">
                    <img src="https://static.ambitionbox.com/static/awards/black-theme/awards22/awards-badge-with-bg.svg" />
                  </div>
                  <div className="col-md-5 col-6 ">
                    <h4 className="blackdiv-text mt-5 text-center ">
                      Rate and help your company win <br /> AmbitionBox 2022
                      award!
                    </h4>
                  </div>
                  <div className="col-md-3 col-6 m-auto blackdiv-text text-center mt-5">
                    <h4 className="m-2">Hurry up!</h4>

                    <button className="btn  blackdiv-btn " type="submit">
                      RATENOW
                    </button>
                  </div>
                  </div>
                  </div>
            </div>
          

          

        {/* this second curosels ----------------------------------------------------------------------------------------------------------------------*/}

       



        <div className="row mb-5 mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Company salaries</h4>
                <p>
                  Search and compare average salaries by company, job title, and
                  experience.
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
                      <div class="card ">
                        <div class="card-body">
                          <h6>Junior Relationship officer</h6>

                          <p className="">(329.3k)</p>
                          <p className="text-center">1.9L</p>
                          <hr className="pb-1 hr-tag" />
                          <div className="d-flex justify-content-between">
                            <p>1.2L</p>
                            <p>2.5L</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <h6>Assistant Manager Salary</h6>
                          <p className="">(329.3k)</p>
                          <p className="text-center">1.9L</p>
                          <hr className="pb-1 hr-tag" />
                          <div className="d-flex justify-content-between">
                            <p>1.2L</p>
                            <p>2.5L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <h6>Assistant Manager Salary</h6>
                          <p className="">(329.3k)</p>
                          <p className="text-center">1.9L</p>
                          <hr className="pb-1 hr-tag" />
                          <div className="d-flex justify-content-between">
                            <p>1.2L</p>
                            <p>2.5L</p>
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

            {/* this is row and col div */}
          </div>
        </div>

        {/* it is a thrad carousel ---------------------------------------------------------------------------------------------------------------- */}

        <div className="row mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10 mb-2">
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
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/hcl-technologies-88.jpg"
                            style={{ height: "50px" }}
                          />
                          <h6 className="line-h">ROhit kumar</h6>
                          <p className="line-h">Sccm Administor</p>
                          <p class="card-text ">
                            Q1:salary will be discussed and HR will.. <br />
                            Q2:Question was asked about software..
                          </p>

                          <a href="#" class="card-link">
                            Viwe detailed
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/byjus-152843.jpg"
                            style={{ height: "49px" }}
                          />
                          <h6 className="line-h">manoj kumar</h6>
                          <p className="line-h">React.js developer</p>
                          <p class="card-text ">
                            Q1:salary will be discussed and HR will.. <br />
                            Q2:Question was asked about software..
                          </p>
                          <a href="#" class="card-link">
                            Viwe detailed
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/icici_bank.jpg"
                            style={{ height: "49px" }}
                          />
                          <h6 className="line-h">Karthik</h6>
                          <p className="line-h">Java developer</p>
                          <p class="card-text ">
                            Q1:salary will be discussed and HR will.. <br />
                            Q2:Question was asked about software..
                          </p>

                          <a href="#" class="card-link">
                            Viwe detailed
                          </a>
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

        {/* this is 4th card *------------------------------------------------------------------------------------------------------*/}

        <div className="row mb-5 mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Designation Salaries</h4>
                <p>
                  Get in-depth salary information based on location, experience
                  and industry
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
                      <div class="card ">
                        <div class="card-body">
                          <h6>Assistant Manager Salary</h6>
                          <p className="">(329.3k)</p>
                          <p className="text-center">1.9L</p>
                          <hr className="pb-1 hr-tag" />
                          <div className="d-flex justify-content-between">
                            <p>1.2L</p>
                            <p>2.5L</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <h6>Assistant Manager Salary</h6>
                          <p className="">(329.3k)</p>
                          <p className="text-center">1.9L</p>
                          <hr className="pb-1 hr-tag" />
                          <div className="d-flex justify-content-between">
                            <p>1.2L</p>
                            <p>2.5L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <h6>Assistant Manager Salary</h6>
                          <p className="">(329.3k)</p>
                          <p className="text-center">1.9L</p>
                          <hr className="pb-1 hr-tag" />
                          <div className="d-flex justify-content-between">
                            <p>1.2L</p>
                            <p>2.5L</p>
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

            {/* this is row and col div */}
          </div>
        </div>

        {/* this 5th carosul------------------------------------------------------------------------------------------------------------------- */}

        <div className="row  mb-5 mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Jobs</h4>
                <p>
                  Explore jobs across India and know about the company's salary,
                  employee reviews, interviews and benefits.
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
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/accenture.jpg"
                            style={{ height: "50px" }}
                          />
                          <h6>
                            Analyst Accentuer solutions
                            <br /> PV.Ltd
                          </h6>
                          <i class="bi bi-geo-alt">Hyderabad</i>
                          <div className="d-flex justify-content-between">
                            <i class="bi bi-briefcase-fill">3-5years</i>
                            <i class="bi bi-wallet2">Not Disclosed</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/techmahindra.jpg"
                            style={{ height: "49px" }}
                          />
                          <h6>
                          Talent Acquisition Consultant
                            <br />
                            Mahindra Ltd
                      
                          </h6>
                          <i class="bi bi-geo-alt">Bengulore</i>
                          <div className="d-flex justify-content-between">
                            <i class="bi bi-briefcase-fill">0-5years</i>
                            <i class="bi bi-wallet2">3.2l-5.6l</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div class="card ">
                        <div class="card-body">
                          <img
                            src="https://static.ambitionbox.com/alpha/company/photos/logos/capgemini.jpg"
                            style={{ height: "49px" }}
                          />
                          <h6>
                            Talent Acquisition Consultant <br />
                            Capgemini Ltd
                          </h6>
                          <i class="bi bi-geo-alt">Bengulore</i>
                          <div className="d-flex justify-content-between">
                            <i class="bi bi-briefcase-fill">0-5years</i>
                            <i class="bi bi-wallet2">3.2l-5.6l</i>
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
          </div>
        </div>

        {/* this is logo icons---------------------------------------------------------------------------------------------------- */}

        <div className="row mb-5 justify-content-evenly">
          <div className="col-md-9">
            {/* Company reviews */}
            <div className="row">
              <div className="col-md-10">
                <h4>Over 501k companies</h4>
                <p>
                  Get in depth information about companies. Know about their
                  mission, vision, products, services and much more.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="card col-md-2 col-2" id="card-logo">
                <img 
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/tata-group.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2 " id="card-logo">
                <img 
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/wipro.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/icici_bank.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/reliance.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/hdfc.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/icici_bank.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/l-and-t-group.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/accenture.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/cts.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/hcl-technologies-88.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/infosys.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/capgemini.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/flipkart-28.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/techmahindra.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/reliance-jio-infocomm.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/bajaj-group.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/axis_bank.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
              <div className="card col-md-2 col-2" id="card-logo">
                <img
                  src="https://static.ambitionbox.com/alpha/company/photos/logos/ey.jpg"
                    style={{ height: "70px", margin: "25px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* this is  */}

        <div className="row  mb-5 justify-content-evenly">
          <div className="col-md-10">
            <div className="row justify-content-evenly">
              <div className="col-3">
                <div className="text-center">
                  <i class="bi bi-star-fill h1  "></i>
                </div>
                <h4 className="text-center">Make An Impact</h4>
                <p className="text-center">
                  What you share reaches thousand others. Help them make
                  informed decisions.
                </p>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <i class="bi bi-shield-lock-fill h1"></i>
                </div>
                <h4 className="text-center">Make An Impact</h4>
                <p className="text-center">
                  What you share reaches thousand others. Help them make
                  informed decisions.
                </p>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <i class="bi bi-briefcase-fill h1"></i>
                </div>
                <h4 className="text-center">Make An Impact</h4>
                <p className="text-center">
                  What you share reaches thousand others. Help them make
                  informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
{/* this is a footer div---------------------------------------------------------------------------- */}
      <Footer/>
        {/* this is container div */}
      </div>
    </div>
  );
};

export default Ambition;
