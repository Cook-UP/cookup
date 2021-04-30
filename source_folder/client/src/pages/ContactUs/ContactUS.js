import React, { Component } from "react";

import { Button } from "../../globalStyles";

import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from  "../../components/PageStructure/FormStyle/Form.elements";
class ContactUS extends Component {
    constructor(props) {
        super(props);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);

    }
    //Function to be called when user makes a change
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val }); //nam is the name of the value you want to change.
    // so it will not set "nam" instead will see the value of nam then set stuff,
  };

    async mySubmitHandler(e) {
        e.preventDefault();
        this.props.history.push("/contactConfirmation");
        
    }
    render() {
       
        return (
           
            <div>
                 <GlobalFormStyle />
                 <StyledFormWrapper>
             
              <StyledForm onSubmit={this.mySubmitHandler}>
              <h2>Contact US </h2>
              <h4>How we can help?   </h4>

              <label htmlFor="name"> What is your First and Last Name</label>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="What is your first and last Name"
                  onChange={this.myChangeHandler}
                />
                  <label htmlFor="name">What are you Contactings us about</label>
                  <StyledTextArea/>

                  <label htmlFor="name">Additional comments</label>
                  <StyledTextArea/>
                  <Button type="submit">Submit</Button>
              </StyledForm>
            
              </StyledFormWrapper>
            
            </div>
            );
        }

}
export default ContactUS; 
