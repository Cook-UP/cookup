import React, { Component } from "react";
import { Auth } from "aws-amplify";

class Login extends Component {
  constructor(props) {
    super(props);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      username: "",
      password: "",
      email: "",
      errors: {
        cognito: null,
        blankfield: false,
      },
    };
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
      },
    });
  };

  //Function to be called when user makes a change
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val }); //nam is the name of the value you want to change.
    // so it will not set "nam" instead will see the value of nam then set stuff,
  };
  async mySubmitHandler(e) {
    e.preventDefault();
    // AWS Cognito integration here
    try {
      const user = await Auth.signIn(this.state.username, this.state.password);
      this.state.email = this.state.username;
      console.log(this.state.email);
      console.log(this.state.username);
      console.log(user);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      this.props.history.push("/");
    } catch (error) {
      alert(
        "Invaild Login Credentials username or password is incorrect try againc"
      );
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err,
        },
      });
    }
  }

  render() {
    return (
      <div>
        {/* Form to take in User input and create a new account  */}
        <section className="section auth">
          <div className="container">
            <h1>Login </h1>
            <form onSubmit={this.mySubmitHandler}>
              <div className="field">
                <p className="control">
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onChange={this.myChangeHandler}
                      />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={this.myChangeHandler}
                      />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control">
                      <button className="button is-success">Login</button>
                    </p>
                  </div>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
