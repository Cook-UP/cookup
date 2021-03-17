import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from "./components/Nav/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
              {/* Placing  Navbar here has it appear on the top of  every page in Webapp  */}
            <Navbar />   
             {/*Link webpages to dispaly the correct component    */}
            <Switch> 
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} /> 
               <Route exact path="/" component={Home} /> 
               <Route exact path="/aboutUs" component={About} /> 
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
