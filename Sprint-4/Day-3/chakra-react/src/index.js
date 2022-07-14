import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const colors = {
  primaryColor: {
    color1: "#E5C2C0",
    color2: "#8FD5A6",
    color3: "#329F5B",
    color4: "#0C8346",
    color5: "#0D5D56"
  }
};

const theme = extendTheme({ colors });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
