import React, { Component } from "react";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from  "../PageStructure/FormStyle/Form.elements";

class OrderConfirmation  extends Component {
   
  render() {
   
    return (
      <div>
         <GlobalFormStyle />
         <StyledFormWrapper>
         <StyledForm>
        <h1>Your order has been sumbmitted</h1>
        </StyledForm>
       
        </StyledFormWrapper>
      </div>
    );
  }
}


export default OrderConfirmation;