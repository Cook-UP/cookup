import React, { Component } from "react";
import { Auth } from "aws-amplify";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Cookup!</h1>
        <p>Your has been new successfully created.</p>
        <p>
          We've sent you a email. Please click on the confirmation link to
          verify your account.
        </p>
        <p>
          {" "}
          Until you confrim your email you will be unable to sign into Cookup
        </p>
      </div>
    );
  }
}

export default Welcome;
