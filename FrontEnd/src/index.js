import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<App />, document.getElementById("root"));
