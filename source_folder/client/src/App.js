import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Welcome from "./components/auth/Welcome";
import Home from "./pages/HomePage/Home";
import ContactConfirmation from "./pages/ContactUs/ContactConfirmation";
import ContactUS from "./pages/ContactUs/ContactUS";
import RegisterKitchen from "./ChefPages/RegisterKitchen";
import MenuUpload from "./ChefPages/MenuUpload";
import DisplayMenu from "./FoodiePages/DisplayMenu";
import DisplayRestaurant from "./FoodiePages/DisplayRestaurant";
import Footer from "./components/Footer";
import Review from "./pages/Review/Review";
import ConfrimReview from "./pages/Review/ConfrimReview";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderConfirmation from "./components/Checkout/OrderConfirmation";

class App extends Component {
  state = {
    userIsAuthenticated: false, // tracks  the authentication state of the webapp
    userIsAuthenticating: true,
    user: null, // holds the user object
    cart: ["Hello"],
    setCart: [],
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
      // setter
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
      // this props will able to be accesssed by every Page of the site
      userIsAuthenticated: this.state.userIsAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
      cart: this.state.cart,
      setCart: [this.state.setCart],
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
                  path="/contact"
                  render={(props) => <ContactUS {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/contactConfirmation"
                  render={(props) => (
                    <ContactConfirmation {...props} auth={authProps} />
                  )}
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
                  path="/DisplayMenu"
                  render={(props) => (
                    <DisplayMenu {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/ConfrimReview"
                  render={(props) => (
                    <ConfrimReview {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/Review"
                  render={(props) => <Review {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/Cart"
                  render={(props) => <Cart {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/Checkout"
                  render={(props) => <Checkout {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/OrderConfirmation"
                  render={(props) => (
                    <OrderConfirmation {...props} auth={authProps} />
                  )}
                />
                <Route
                  exact
                  path="/DisplayRestaurant"
                  render={(props) => (
                    <DisplayRestaurant {...props} auth={authProps} />
                  )}
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
