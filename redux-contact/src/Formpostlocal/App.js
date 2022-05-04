import React from 'react'
import Navbar from './Navbar/Navbar';
import Logins from './forms/Logins';
import Signup from './forms/Signup';
import {
  BrowserRouter ,
  Route,
  Switch
} from "react-router-dom";


const App = () => {

  return (
    <div>
 < BrowserRouter>

     <Navbar/>
      <Switch>
        <Route  path="/Logins" component={Logins }/>
          <Route   path="/signup" component={Signup } />
      </Switch>
    
    </BrowserRouter>
   </div>

    
  )
}

export default App
