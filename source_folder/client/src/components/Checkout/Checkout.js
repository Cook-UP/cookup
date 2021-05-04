import React, { Component } from "react";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledMiniInput,
} from "../../components/PageStructure/FormStyle/Form.elements";
import { Auth } from "aws-amplify";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      user: "",
    };
  }
  setUser = (user) => {
    this.setState({ user: user });
  };
  async componentDidMount() {
    // stores user from local storage as user from Aws Cognito
    const user = await Auth.currentAuthenticatedUser();
    this.setUser(user);
    // setter
  }
  catch(error) {
    if (error !== "No current user") {
      console.log(error);
    }
    console.log(this.state.user);
    var attributes = this.state.user.attributes;
    for (var key in attributes) {
      console.log(key);
    }
  }

  render() {
    return (
      <div>
        <GlobalFormStyle />
        <StyledFormWrapper>
          <StyledForm>
            <h1>Enter Deilvery Address</h1>

            <label htmlFor="Address1">Address 1</label>
            <StyledInput
              type="text"
              name="Address1"
              placeholder=""
              onChange={this.myChangeHandler}
            />
            <label htmlFor="Address2">Address 2</label>
            <StyledInput
              type="text"
              name="Address2"
              placeholder=""
              onChange={this.myChangeHandler}
            />
            <div display="flex">
              <label htmlFor="state"> State </label>
              <StyledMiniInput
                type="text"
                name="State"
                placeholder=""
                onChange={this.myChangeHandler}
              />
              <label htmlFor="city"> City </label>
              <StyledMiniInput
                type="text"
                name="City"
                placeholder=""
                onChange={this.myChangeHandler}
              />

              <label htmlFor="city"> Zipcode </label>
              <StyledMiniInput
                type="text"
                name="zipcode"
                placeholder=""
                onChange={this.myChangeHandler}
              />
            </div>

            <Link>
              <Button>Save</Button>
            </Link>
          </StyledForm>

          <StyledForm>
            <h1>Payment Info</h1>
            <label htmlFor="Address1"> Name On Card </label>
            <StyledInput
              type="text"
              name="name"
              placeholder=""
              onChange={this.myChangeHandler}
            />
            <label htmlFor="Address1"> Card Info </label>
            <StyledInput
              type="text"
              name="card"
              placeholder=""
              onChange={this.myChangeHandler}
            />
            <label htmlFor="state"> Ex </label>
            <StyledMiniInput
              type="text"
              name="ex"
              placeholder=""
              onChange={this.myChangeHandler}
            />
            <label htmlFor="city"> Cvv </label>
            <StyledMiniInput
              type="text"
              name="Cvv"
              placeholder=""
              onChange={this.myChangeHandler}
            />

            <Link to="/OrderConfirmation">
              <Button>Submit</Button>
            </Link>
          </StyledForm>
        </StyledFormWrapper>
      </div>
    );
  }
}

export default Checkout;
