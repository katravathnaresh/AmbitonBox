import React from "react";
import Footer from "../Footer";

const Jobs = () => {
  return (
    <div className="mt-5">
      <div className="text-center mt-5">
        
        
      <div >
        <div className="row  top-header">
          <div className="col-md-9   m-auto">
            {/* Company reviews */}
            <div className="row mt-5">
              <div className="col-md-9">
                <h4 className="header-Discover1 ">
                  Discover Best Places to Work!
                </h4>
                <p className=" hello ">
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
                    <button class="btn-primary  blackdiv-btn1 mt-2 " type="submit">
                      SEARCH
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>
{/* this is a popular */}
<div className="row justify-content-evenly">
      <h5 className="text-center">popular job searches</h5>
      
      <div className="col-md-7  ">
      <div className="row mt-4 justify-content-evenly  ">
        <div className="col-md-3">
      <p className="jobs">Developer (28.7k jobs)</p>
      </div>
      <div className="col-md-3">
      <p className="jobs">Full Stock (9.1k jobs)</p>
      </div>
      <div className="col-md-3">
      <p className="jobs">software  (7.8k jobs)</p>
      </div>
      <div className="col-md-3">
      <p className="jobs">Java developer (7.8k jobs)</p>
      </div>
      </div>
      </div>
      </div>

      <div className="row jobs-footer justify-content-evenly">
      <div className="col-md-6">
      <div className="row mt-4 justify-content-evenly  ">
        <div className="col-md-4">
      <p className="jobs">Engineer (28.7k jobs)</p>
      </div>
      <div className="col-md-4">
      <p className="jobs">manager (9.1k jobs)</p>
      </div>
      <div className="col-md-4">
      <p className="jobs">senior (7.8k jobs)</p>
      </div>
      </div>
      </div>
      </div>

{/* this is footer */}
   <Footer/>
    </div>

  );
};

export default Jobs;