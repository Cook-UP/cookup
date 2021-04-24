
import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Welcome from "./components/auth/Welcome";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutUs";
import RegisterKitchen from "./ChefPages/RegisterKitchen";
import MenuUpload from "./ChefPages/MenuUpload";
import DisplayKitchens from "./FoodiePages/DisplayKitchens";
import S3Upload from "./components/Upload/S3Upload.js";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    userIsAuthenticated: false, // tracks  the authentication state of the webapp
    userIsAuthenticating: true,
    user: null, // holds the user object
  };

  // chages the authentication state  when a user logins and logs out
  setAuthStatus = (authenticated) => {
    this.setState({ userIsAuthenticated: authenticated });
  };
  // sets and nulls user object when someone login and logs out of the app
  setUser = (user) => {
    this.setState({ user: user });
  };

  async componentDidMount() {
    try {
      // retrvives the session object from local storage
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      // stores user from local storage as user from Aws Cognito
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
    // This line of code makes sure whether or not componentDidMount try catch succeeds the webpage will render
    this.setState({ isAuthenticating: false });
  }
  render() {
    const authProps = {
      userIsAuthenticated: this.state.userIsAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };
    return (
      // This will checks if the webpage is currently  Authenticating a user and if not uthenticating a user renders page
      !this.state.isAuthenticating && (
        <div className="App">
          <Router>
            <div>
              {/* Placing  Navbar here has it appear on the top of  every page in Webapp  */}
              <Navbar auth={authProps} />{" "}
              {/* Passes object properties of authProps to the navbar ( the properties being passed over  are setUser,userIsAuthenticated,etc)*/}
              {/* React Router Link a web link route with a react Compent  */}
              <Switch>
                {/* Special render synax to pass passes auth properties into route specified components*/}
                <Route
                  exact
                  path="/"
                  render={(props) => <Home {...props} auth={authProps} />}
                />{" "}
                {/* render={(props) => <Home {...props} allows props 
              from diffent pages to coexist, without that only one's page props would vaild */}
                <Route
                  exact
                  path="/register"
                  render={(props) => <Register {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/login"
                  render={(props) => <Login {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/welcome"
                  render={(props) => <Welcome {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/aboutUs"
                  render={(props) => <About {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/s3"
                  render={(props) => <S3Upload {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/RegisterKitchen"
                  render={(props) => (
                    <RegisterKitchen {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/MenuUpload"
                  render={(props) => <MenuUpload {...props} auth={authProps} />}
                />
                 <Route
                  exact
                  path="/DisplayKitchens"
                  render={(props) => <DisplayKitchens{...props} auth={authProps} />}
                />
                {/* <Route exact path="/" component={Home} />   MenuUpload    Nomal way to use react Router */}
              </Switch>
              
            </div>
           
          </Router>
          <Footer />
        </div>
    
      )
    );
  }
}
export default App;
