import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./main.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./govuk-frontend.min.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Toaster position="top-center" />
      <div className="mt-6 flex justify-center w-full">
        <div className="w-full max-w-5xl flex items-center">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
