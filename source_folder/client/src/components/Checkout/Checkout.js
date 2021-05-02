import React, { Component } from "react";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from "../../components/PageStructure/FormStyle/Form.elements";

class Checkout extends Component {
    

  async mySubmitHandler(e) {}
  render() {
    
    return (
      <div>
        <GlobalFormStyle />
        <StyledFormWrapper>
          <StyledForm>
            <h1> Deilvery Address</h1>
            <h5>Use Deafult address</h5>
         
            <Link to="/OrderConfirmation">
              <Button>Sumbit Order</Button>
            </Link>
          </StyledForm>
          <StyledForm>
            <h1>Checkout</h1>
            <Link to="/OrderConfirmation">
              <Button>Hey there</Button>
            </Link>
          </StyledForm>
        </StyledFormWrapper>
      </div>
    );
  }
}

export default Checkout;
