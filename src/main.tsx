import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { marvelApi } from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiProvider api={marvelApi}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
);
