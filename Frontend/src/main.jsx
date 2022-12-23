import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Router>
);
