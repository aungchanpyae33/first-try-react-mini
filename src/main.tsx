import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
    <button id="turn" className="btn btn-primary m-2">
      X turn
    </button>
    <button id="win" className="btn  m-2"></button>
  </React.StrictMode>
);
