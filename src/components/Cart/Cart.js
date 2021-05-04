import React, { Component } from "react";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from  "../../components/PageStructure/FormStyle/Form.elements";

class Cart extends Component {
  render() {
   
    return (
      <div>
         <GlobalFormStyle />
         <StyledFormWrapper>
         <StyledForm>
        <h1>Here is your cart</h1>
      
        </StyledForm>
        </StyledFormWrapper>
      </div>
    );
  }
}


export default Cart;