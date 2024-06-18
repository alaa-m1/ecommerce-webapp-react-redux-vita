
import ReactDOM from "react-dom/client";
import "./assets/style/app.scss";

import App from "App";
import "REO.js";
import { StrictMode } from "react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    
      <App />
  </StrictMode>
);
