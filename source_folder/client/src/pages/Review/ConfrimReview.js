import React, { Component } from "react";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from  "../../components/PageStructure/FormStyle/Form.elements";

class ConfrimReview extends Component {
  render() {
    return (
      <div>
         <GlobalFormStyle />
         <StyledFormWrapper>
         <StyledForm>
        <h1>Your Review has been submitted</h1>
      
        </StyledForm>
        </StyledFormWrapper>
      </div>
    );
  }
}


export default ConfrimReview;