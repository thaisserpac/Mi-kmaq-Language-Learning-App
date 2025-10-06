import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

reportWebVitals();
