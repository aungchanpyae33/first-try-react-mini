import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
    <button id="turn">X</button>
    <button id="win"></button>
  </React.StrictMode>
);
