import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./hooks/context";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
