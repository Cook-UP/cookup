import React, { Component } from "react";


import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
} from  "../../components/PageStructure/FormStyle/Form.elements";

class ContactConfirmation extends Component {
    render() {
       
        return (
           
           
                <div>
                     <GlobalFormStyle />
                 <StyledFormWrapper>
             
              <StyledForm onSubmit={this.mySubmitHandler}>
               <h3> Thank You, we have received your message and will get back to you soon</h3>
               
              </StyledForm>
              </StyledFormWrapper>
                </div>
        )};
} 

export default ContactConfirmation ;