import React, { useState } from "react";


const Welcome = () => {
    const [name, setName]= useState({
       
    })
    const names=localStorage.getItem("name").replace(/"/g, "")
    return(
        <div>
            <h2 className="text-center">welcome {names}</h2>
        </div>
    );
};


export default Welcome;