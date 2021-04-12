import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Container, Button } from "../../globalStyles";

import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledFieldset,
} from "../PageStructure/FormStyle/Form.elements";

class Register extends Component {
  constructor(props) {
    super(props);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      givenName: "" /*{given name is the same a firstName */,
      familyName: "" /*{family name is the same a lastName */,
      username: "",
      userType: "",
      email: "",
      password: "",
      confirmpassword: "",
      address: "",
      birthday: "",
      phoneNumber: "",
      errors: {
        //  error handling
        cognito: null,
        blankfield: false,
        passwordmatch: false,
      },
    };
  }

  //Function to be called when user makes a change
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val }); //nam is the name of the value you want to change.
    // so it will not set "nam" instead will see the value of nam then set stuff,
  };
  // SubmitHandler when submit button is cliked a new account is made
  async mySubmitHandler(e) {
    e.preventDefault();
    try {
      const params = {
        username: this.state.username,
        password: this.state.password,
        attributes: {
          email: this.state.email,
          phone_number: this.state.phoneNumber,
          given_name: this.state.givenName,
          family_name: this.state.familyName,
          "custom:userType": this.state.userType,
        },

        validationData: [],
      };

      const data = await Auth.signUp(params);
      console.log(data);
      this.setState({ stage: 1 });
      // Make sure the user enter the right password
      if (this.state.password !== this.state.confirmpassword) {
        alert("Error Passwords are not identical ");
      }
      this.props.history.push("/welcome");
    } catch (err) {
      if (err === "No userPool") {
        // User pool not defined in Amplify config file
        console.error("User Pool not defined");
        alert(
          "User Pool not defined. Amplify config must be updated with user pool config"
        );
      } else if (err.message === "User already exists") {
        // Setting state to allow user to proceed to enter verification code
        this.setState({ stage: 1 });
      } else {
        if (err.message.indexOf("phone number format") >= 0) {
          err.message =
            "Invalid phone number format. Must include country code. Example: +14252345678";
        }
        alert(err.message);
        console.error("Exception from Auth.signUp: ", err);
        this.setState({ stage: 0, email: "", password: "", confirm: "" });
      }
    }
    /*
     *    Title: Module 1 User flows configuration
     *    Author: Amazon
     *    Date: 2021
     *    Availability: https://serverless-idm.awssecworkshops.com/01-user-auth/
     */
  }

  render() {
    return (
      <div>
        <Container>
          {" "}
          {/*Container div for all Component */}
          <GlobalFormStyle />
          <StyledFormWrapper>
            <StyledForm onSubmit={this.mySubmitHandler}>
              {" "}
              {/* The form  */}
              <h2>Register Account</h2>
              {/* All of the input for the form below */}
              <label htmlFor="name">Username</label>
              <StyledInput
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={this.myChangeHandler}
              />
              <label htmlFor="name">Email</label>
              <StyledInput
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.myChangeHandler}
              />
              <label htmlFor="name">Phone Number</label>
              <StyledInput
                className="input"
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                onChange={this.myChangeHandler}
              />
              <label htmlFor="name">First Name</label>
              <StyledInput
                type="text"
                name="givenName"
                placeholder="Enter Frist name"
                onChange={this.myChangeHandler}
              />
              <label htmlFor="name">Last Name</label>
              <StyledInput
                type="text"
                name="familyName"
                placeholder="Enter Last name"
                onChange={this.myChangeHandler}
              />
              <StyledFieldset>
                <legend>What type of account do you want to create?</legend>
                <label>
                  <input
                    type="radio"
                    value="Foodie"
                    name="userType"
                    onChange={this.myChangeHandler}
                  />
                  Foodie
                </label>
                <label>
                  <input
                    type="radio"
                    value="Chef"
                    name="userType"
                    onChange={this.myChangeHandler}
                  />
                  Chef
                </label>
              </StyledFieldset>
              <label htmlFor="name">Password</label>
              <StyledInput
                className="input"
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.myChangeHandler}
              />
              <label htmlFor="name"> Confrim Password</label>
              <StyledInput
                className="input"
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                onChange={this.myChangeHandler}
              />
              <Button type="submit">Register Account</Button>
            </StyledForm>
          </StyledFormWrapper>
        </Container>
      </div>
    );
  }
}

export default Register;
