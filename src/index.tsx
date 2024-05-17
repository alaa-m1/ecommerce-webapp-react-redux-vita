import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/app.scss";

import App from "App";
import "REO.js";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    
      <App />
  </React.StrictMode>
);
