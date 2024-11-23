import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// import Challenge from "./Challenge";
import App from "./Components/App";
// import FinalChallenge from "./FinalChallenge";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Challenge /> */}
    {/* <FinalChallenge /> */}
  </React.StrictMode>
);
