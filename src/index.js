import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/header.css";
import "./components/footer.css";
import "./pages/about/about.css";
import "./pages/projects/projects.css";
import "./pages/contact/contact.css";
import "./pages/home/home.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
