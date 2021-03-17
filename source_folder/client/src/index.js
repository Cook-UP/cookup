import React from "react";
import ReactDOM from "react-dom";
import Amplify, { navBar } from "aws-amplify";
import awsExports from "./aws-exports";
import config from "./config";
import App from "./App";
Amplify.configure(awsExports);


Amplify.configure({
  Auth: {
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

ReactDOM.render(
  <div>
    <App/>
  </div>,

  document.getElementById("root")
);

