import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Container, Button } from "../../globalStyles";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
} from "../PageStructure/FormStyle/Form.elements";

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
        <Container>
          {/*Container div for all Component */}
          <GlobalFormStyle />
          <StyledFormWrapper>
            <StyledForm onSubmit={this.mySubmitHandler}>
              {/* The form  */}
              <h2>Login </h2>
              {/* All of the input for the form below */}
              <label htmlFor="name">Username or Email</label>
              <StyledInput
                type="text"
                name="username"
                placeholder="Enter Username or Email"
                onChange={this.myChangeHandler}
              />

              <label htmlFor="name">Password</label>
              <StyledInput
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.myChangeHandler}
              />

              <Button type="submit">Login</Button>
            </StyledForm>
          </StyledFormWrapper>
        </Container>
      </div>
    );
  }
}
export default Login;
