import React from "react";
import {
  BrowserRouter ,
  Route,
  Switch
} from "react-router-dom";

import Header from "./components/Header";
import Companies from "./components/Companies";
import Jobs from "./components/Jobs";
import Interviews from "./components/Interviews";
import Reviews from "./components/Reviews";
import Salaries from "./components/Salaries";
import Award from "./components/Award";
import Salary from "./components/Salary";
import Ambition from "./components/Ambition";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contribute from "./components/Contribute";
import Employer from "./components/Employer";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Header />

      
          <Switch>
          <Route path="/ambition" component={Ambition} />
          <Route path="/companies" component={Companies} />
            <Route path="/award" component={Award} />
            <Route path="/interviews" component={Interviews} />
            <Route path="/Jobs" component={Jobs} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/salaries" component={Salaries} />
            <Route path="/salary" component={Salary} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/contribute" component={Contribute} />
            <Route path="/employer" component={Employer }  />
          </Switch>
      
      </BrowserRouter>

    </>
  );
};

export default App;
