import React from 'react'

const Employer = (props) => {

   const hello=()=>{
       console.log("hello i am naresh");
   }; 
    
return(
    <div className="mt-5">
     <h1 onBlur={hello}> Click me</h1>
    </div>
)
  
}

export default Employer
