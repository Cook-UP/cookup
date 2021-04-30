import React, { Component } from "react";
import { Container, Button } from "../../globalStyles";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledFieldset,
  StyledTextArea
} from  "../../components/PageStructure/FormStyle/Form.elements";

class Review extends Component {

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
        this.props.history.push("/ConfrimReview");
        
    }
  render() {
    return (
      <div>
         <GlobalFormStyle />
         <StyledFormWrapper>
         <StyledForm>
         <label htmlFor="name">What is name of the restaurant you would like to review?</label>
         <StyledInput
                  type="text"
                  name="restaurant"
                  placeholder="What is name of the restaurant you would like to review"
                  onChange={this.myChangeHandler}
                />
{/*  
<StyledFieldset>
                <legend>How many stars would give this restaurant? </legend>
                <label>
                  <input
                    type="radio"
                    value="1_Star"
                    name="1_Star"
                    onChange={this.myChangeHandler}
                  />
                  1 Star
                </label>
                <label>
                  <input
                    type="radio"
                    value="2_Stars"
                    name="2_Stars"
                    onChange={this.myChangeHandler}
                  />
                  2 Stars
                </label>

                <label>
                  <input
                    type="radio"
                    value="3_Stars"
                    name="3_Stars"
                    onChange={this.myChangeHandler}
                  />
                  3 Stars
                </label>
                <label>
                  <input
                    type="radio"
                    value="4_Stars"
                    name="4_Stars"
                    onChange={this.myChangeHandler}
                  />
                  4 Stars
                </label>

                <label>
                  <input
                    type="radio"
                    value="5_Stars"
                    name="5_Stars"
                    onChange={this.myChangeHandler}
                  />
                  5 Stars
                </label>
              </StyledFieldset>
              */}
         <label htmlFor="name">Additional comments</label>
                  <StyledTextArea/>
                  <Button type="submit">Submit</Button>
        </StyledForm>
        </StyledFormWrapper>
      </div>
    );
  }
}


export default Review;