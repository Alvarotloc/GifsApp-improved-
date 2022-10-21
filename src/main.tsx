import React from "react";
import ReactDOM from "react-dom/client";
import { GifsProvider } from "./context";
import { GifExpertApp } from "./GifExpertApp";
import { ToastContainer } from 'react-toastify';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GifsProvider>
      <GifExpertApp />
      <ToastContainer />
    </GifsProvider>
  </React.StrictMode>
);
