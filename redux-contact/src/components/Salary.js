import React from 'react'
import Footer from '../Footer'

const Salary = () => {
  return (
    
    <div className="mt-5">
    <div className=" mt-5">
     
      
{/* this is a interviwe 1st row -----------------------------------------------------------*/}
<div className="container-fluid " style={{marginTop:"150px"}}>
        <div className="row mb-5 mt-5">
          <div className="col-md-9 m-auto">
            {/* Company reviews */}
            
                <h2 className='text-center mb-5' id="senior">Take Home Salary calculator</h2>
            {/* this is carosul */}
            
              <div className="carousel-inner">
                {/* this is a first card */}
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-md-3 mt-5 mb-2">
                    <div className="form__group field">
                   <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                      <label for="name" className="form__label">company Name</label>
                       </div>
                    </div>


                    <div className="col-md-3 mt-5 mb-2">
                    <div className="form__group field">
                   <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                      <label for="name" className="form__label">Designation</label>
                       </div>
                    </div>
                    <div className="col-md-3 mt-5 mb-2">
                    <div className="form__group field">
                   <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                      <label for="name" className="form__label">Annual CTC</label>
                       </div>
                    </div>


                    <div className="col-md-3 mt-5 mb-2">
                    <div className="form__group field">
                   <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                      <label for="name" className="form__label">Experience</label>
                       </div>
                    </div>

                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
                </div>
              
               
              </div>

            
            </div>
</div>


{/* this is 2nd row----------------------------------------------------------------- */}
<div className="row mb-5 mt-5">
          <div className="col-md-9 m-auto">
        
            {/* this is carosul */}
            
              
                {/* this is a first card */}
                <div className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-md-3 d-flex mt-3 mb-2">
                    
                    <button class="btn-primary  blackdiv-btn2 mt-2 " type="submit">
                    Calculate
                  </button>
                      
                       
                    </div>
                    <div className="col-md-3 mt-5 mb-2">
                    
                    </div>

                  

                    <div className="col-md-3 mt-5 mb-2">
                    
                    </div>


                    <div className="col-md-3 mt-5 mb-2">
                    
                    </div>

                    {/* this is row div */}
                  </div>
                  {/* this is carousel activ div */}
              
                  </div>
                  </div>
              </div>


{/* this is 3rd row--------------------------------------------------------------- */}
<div className="row mb-5 justify-content-center mt-5">
          <div className="col-md-9 card ">


        <p className='dropdown-toggle1 mt-3'>What is salary and it's components?</p>
        <p className='dropdown-toggle1 mt-2'>What is a Salary calculator?</p>
        <p className='dropdown-toggle1 mt-2'>How to use the Ambition calculatore?</p>
        <p className='dropdown-toggle1 mt-2'>How dose AmbitionBox salary calculate the monthly take home salary ?</p>
        <p className='dropdown-toggle1 mt-2'>What is the difference between CTC & Take Home Salary ?</p>
        <p className='dropdown-toggle1 mt-2'>How much is Basic Salary of CTC  ?</p>
        <p className='dropdown-toggle1 mt-2'>What is Gratuity? When can you avail it ?</p>
        <p className='dropdown-toggle1 mt-2'>What is Employers Provident Fund ?</p>
        <p className='dropdown-toggle1 mt-2'>How much contribution is mandatory from an Employeer towards Employees Provident Fund ?</p>
        <p className='dropdown-toggle1 mt-2'>What is VPF? What is the maximum amount that an emploee can contribute toward VPF ?</p>
        <p className='dropdown-toggle1 mt-2'>What is Gratuity? When can you avail it ?</p>
        <p className='dropdown-toggle1 mt-2'>Dose CTC include PF ?</p>
        <p className='dropdown-toggle1 mt-2'>Which tax regime should be chosen ?</p>
        <p className='dropdown-toggle1 mt-2'>What is the New Tax Regime ?</p>
        <p className='dropdown-toggle1 mt-2'>What is the difference between Financial and Assement Year ?</p>
        <p className='dropdown-toggle1 mt-2'>What is Form 16 ?</p>
           {/* this is row and col div-------------------------------------------- */}
          </div>
          
          </div>


{/* this is container div----------- */}
</div>
<Footer/>



{/* this is top 2  end divs */}
      
    </div>
  </div>
  )
}

export default Salary
