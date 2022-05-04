import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* this is a footer---------------------------------------------------------------------------- */}
      <div className="App bg-light">
          <div className="row ">

            <div className="col-md-9">
              <div className="col-md-7 m-auto">
                <div className="image">
                  <img
                    src="https://static.ambitionbox.com/static/logo.svg"
                    style={{ width: "30px" }}
                  />

                  <span className="logo_text ml-2">Ambition Box</span>
                  <p>
                    {" "}
                    job seekers every month in choosing their right fit company
                  </p>
                  <div className="lakh">
                    <div className="row text-center">
                      <div className="col-md-3 col-3">
                        <span className="logo_text text-center lakhss">36 Lakh+</span>
                        <p className="text-center lakhs">Reviews</p>
                      </div>
                      <div className="col-md-3 col-2">
                        <span className="logo_text lakhss">1 Crore+</span>
                        <p className="lakhs">Salaries</p>
                      </div>
                      <div className="col-md-3 col-3">
                        <span className="logo_text lakhss">3 Lakh+</span>
                        <p className="lakhs">Interviews</p>
                      </div>
                      <div className="col-md-3 col-2">
                        <span className="logo_text lakhss">63 Lakh+</span>
                        <p className="lakhs">Users/Month</p>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-5">
                    <input
                      type="search"
                      class="form-control round"
                      placeholder="Search by Company or Designation"
                    />
                    <button type="button" class="btn btn-primary round">
                      search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-evenly">
              <div className="col-md-9">
                <div className="row  justify-content-evenly">
                  <div className="col-2">
                    <h6 className="col-2 lakhs">Jobseekers</h6>
                   <li className="lakhs">Companies</li>
                   <li className="lakhs">Reviews</li>
                   <li className="lakhs">Salaries</li>
                   <li className="lakhs">Jobs</li>
                   <li className="lakhs">Interviews</li>
                   <li className="lakhs">Best Places to Work 2022</li>
                   <li className="lakhs">Best Places to Work 2021</li>
                   <li className="lakhs">Salary Calculatoe</li>
                   <li className="lakhs">Practice test</li>
                  </div>
                  <div className="col-2">
                    <h6 className="col-2 lakhs">Employers</h6>
                   <li className="lakhs">Create a new company</li>
                   <li className="lakhs">Update company information</li>
                   <li className="lakhs">Respond to reviews</li>
                   <li className="lakhs">Invite employees to review</li>
                  </div>
                  <div className="col-2">
                    <h6 className="col-2 lakhs">Ambition</h6>
                   <li className="lakhs">About Us</li>
                   <li className="lakhs">Work with Us</li>
                   <li className="lakhs">Email Us</li>
                   <li className="lakhs">Blog</li>
                   <li className="lakhs">FAQ</li>
                  </div>
                  <div className="col-2">
                    <h6 className="col-2 lakhs">Support</h6>
                   <li className="lakhs">Privacy Policy</li>
                   <li className="lakhs">Grievances</li>
                   <li className="lakhs">Summons</li>
                   <li className="lakhs"> Guidelines</li>
                   <li className="lakhs">Terms of Use</li>
                  </div>
                  <div className="col-md-2 ">
                    <h6 className="col-2 lakhs">Follow us</h6>
                    <img src="https://img.icons8.com/color/38/000000/instagram-new.png" />
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
                    <img src="https://img.icons8.com/color/38/000000/facebook-new.png" />
                    <br /> <br />
                    <h5>Contribute</h5>
                    <button className="btn btn-outline-primary round">
                      Write 
                    </button>
                    <button className="btn btn-outline-primary round">
                      Add 
                    </button>
                    <button className="btn btn-outline-primary round">
                      Share 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Footer
