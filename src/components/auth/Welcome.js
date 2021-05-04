import React, { Component } from "react";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from  "../../components/PageStructure/FormStyle/Form.elements";

class Welcome extends Component {
  render() {
    return (
      <div>
         <GlobalFormStyle />
         <StyledFormWrapper>
         <StyledForm>
        <h1>Welcome To Cookup!</h1>
        <p>Your has been new successfully created.</p>
        <p>
          We've sent you a email. Please click on the confirmation link to
          verify your account.
        </p>
        <p>
          {" "}
          Until you confrim your email you will be unable to sign into Cookup.
        </p>
        </StyledForm>
        </StyledFormWrapper>
      </div>
    );
  }
}


export default Welcome;
