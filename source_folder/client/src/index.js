import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import config from "./config";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
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
    {/* connects the react-app to redux */}
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  </div>,

  document.getElementById("root")
);
