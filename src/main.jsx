import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import fonttheme from "../theme/font.jsx";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={fonttheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
