import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from './Context/CardContext';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext';

// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
    <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </CartProvider>
  </AuthProvider>,
  document.getElementById("root")
);
