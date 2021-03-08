import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
<<<<<<< HEAD
import "./index.css";
=======
>>>>>>> c9cef1cd5c8ae1daf2bfd0f3c55c3dcedf1685f0
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
