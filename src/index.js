import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
