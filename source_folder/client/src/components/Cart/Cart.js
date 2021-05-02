import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {  Button } from "../../globalStyles";
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
        <Link to='/Checkout'>
        <Button>Checkout</Button>
        </Link>
        </StyledForm>
        
       
        </StyledFormWrapper>

      </div>
    );
  }
}


export default Cart;