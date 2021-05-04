import React, { Component } from "react";
import axios from "axios";
import { Container, Button } from "../globalStyles";
import {
  GlobalFormStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
} from "../components/PageStructure/FormStyle/Form.elements";
class RegisterKitchen extends Component {
  constructor(props) {
    super(props);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      UserInfo: "",
      KitchenName: "",
      KitchenDesc: "",
      uId: "",
    };
  }

  //Function to be called when user makes a change
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val }); //nam is the name of the value you want to change.
    // so it will not set "nam" instead will see the value of nam then set stuff,
  };

  componentDidMount() {
    // When the webstie is first loaded if the user is logined in this code will
    //run to retrieve the users info from the Mongobd database
    if (this.props.auth.userIsAuthenticated) {
      //console.log("Hello" + this.state.UserInfo);

      let Api = "http://3.85.44.54:3000/users/get?uID=";
      let UserId = this.props.auth.user.attributes.sub; // the UserId saved both Mongodb and amazon cognito
      let FullApi = Api + UserId; // The working URL for the Api to get the User info from Mongodb
      console.log("The URL for the Api to get a User by Id is: " + FullApi);

      var self = this; // this keyword has a different value depending of where it is called so use a diffent var name if you want us in axios
      axios
        .get(FullApi)
        .then(function (response) {
          self.setState({ UserInfo: response.data }); // All of the User Info from Mongobd saved in state
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  async mySubmitHandler(e) {
    e.preventDefault();

     // When the webstie is first loaded if the user is logined in this code will
    //run to retrieve the users info from the Mongobd database
  
        let Api = "http://3.85.44.54:3000/users/get?uID=";
        let UserId = this.props.auth.user.attributes.sub; // the UserId saved both Mongodb and amazon cognito
        let FullApi = Api + UserId; // The working URL for the Api to get the User info from Mongodb
        console.log("The URL for the Api to get a User by Id is: " + FullApi);
  
        var self = this; // this keyword has a different value depending of where it is called so use a diffent var name if you want us in axios
        axios
          .get(FullApi)
          .then(function (response) {
            self.setState({ UserInfo: response.data }); // All of the User Info from Mongobd saved in state
          })
          .catch(function (error) {
            console.log(error);
          });
      

    console.log(this.state.UserInfo);
    console.log("Before Kitchen");
    console.log(this.state.UserInfo);
    let randomKitchenID = parseInt(Math.random() * 10000000);
    try {
      // The  specific API  used to crete a new Kitchen based on a Users uID
      let createKitchenURL =
        "http://3.85.44.54:3000/kitchen/create?uID=" + this.state.UserInfo.uID;
      console.log(
        "The URL to create a new Kitchen by uId: " + createKitchenURL
      );

      // Creates a new Kitchen in the Mongobd database
      axios
        .post(createKitchenURL, {
          kID: randomKitchenID,
          name: this.state.KitchenName,
          desc: this.state.KitchenDesc,
          owner: {
            _id: this.state.UserInfo._id,
            uID: this.state.UserInfo.uID,
            firstName: this.state.UserInfo.firstName,
            lastName: this.state.UserInfo.lastName,
            email: this.state.UserInfo.email,
            address: this.state.UserInfo.address,
            phone: this.state.UserInfo.phone,
          },
        })
        .then(
          (response) => {
            console.log("The Kitchen has been created");
            console.log(response);
            this.props.history.push("/MenuUpload");
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        {/* Form to take in User input and create a new account  */}
        {/* Displays if the user is signed in */}
        <GlobalFormStyle />

        {this.props.auth.userIsAuthenticated && (
          <Container>
            <GlobalFormStyle />
            {/*Container div for all Component */}
            <StyledFormWrapper>
              {console.log(this.state.UserInfo)}
              <StyledForm onSubmit={this.mySubmitHandler}>
                {/* The form  */}
                <h2>Register Your Kitchen </h2>
                {/* All of the input for the form below */}
                <label htmlFor="name">What is the Name of your Kitchen</label>
                <StyledInput
                  type="text"
                  name="KitchenName"
                  placeholder="Kitchen Name"
                  onChange={this.myChangeHandler}
                />

                <label htmlFor="name">What is your Kitchen's Description</label>
                <StyledInput
                  type="text"
                  name="KitchenDesc"
                  placeholder="Kitchen Description"
                  onChange={this.myChangeHandler}
                />

                <Button type="submit">Sumbit</Button>
              </StyledForm>
            </StyledFormWrapper>
          </Container>
        )}
      </div>
    );
  }
}

export default RegisterKitchen;
