import React from 'react'

const Contribute = () => {
  return (
    <div className="mt-5">
      
{/* this is 8th row-------------------------------------------------------------------------- */}
<h1 className="mt-5 text-white">hello</h1>
<div className="row mt-5 mb-5 my-4">
          <div className="col-md-9 col-9 m-auto ">
            {/* Company reviews */}
           <h2 className=' text-center' id="senior">Someone needs your advice!</h2>
           <p className='mb-5 text-center'>Actually, it’s a few million people. Share your voice. You always gain by giving.</p>
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
                      <div class="card text-center">
                        <div class="card-body shere">
                            <img src="https://static.ambitionbox.com/static/icons/contribute/messaging-circle.svg"/>
                          <h4>Review a company</h4>
                          <p className="text-center">shere a review of your current or past
                            companies. you opinion matters.
                          </p>
                          <button style={{borderRadius:"20px " ,color:"#2f81ef" ,borderBlockColor:"#2f81ef",padding:'5px 15px',marginBottom:"10px"}}>write a Review</button>
                        </div>
                      </div>
                    </div>
                         <div className="col-md-4  mb-2">
                      <div class="card text-center">
                        <div class="card-body shere">
                            <img src="https://static.ambitionbox.com/static/icons/contribute/person-typing.svg"/>
                          <h4>Shere your salary</h4>
                          <p className="text-center">Add salary of your current or past
                          company anonymously
                          </p>
                          <button style={{borderRadius:"20px " ,color:"#2f81ef" ,borderBlockColor:"#2f81ef",padding:'5px 15px',marginBottom:"10px"}}>Add a Salary</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4  mb-2">
                      <div class="card text-center">
                        <div class="card-body shere">
                            <img src="https://static.ambitionbox.com/static/icons/contribute/person-typing.svg"/>
                          <h4>Share interview advice</h4>
                          <p className="text-center">shere a review of your current or past
                            companies. you opinion matters.
                          </p>
                          <button style={{borderRadius:"20px " ,color:"#2f81ef" ,borderBlockColor:"#2f81ef",padding:'5px 15px',marginBottom:"10px"}}>write Interview Advice</button>
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


        </div>

        
  )
}

export default Contribute
