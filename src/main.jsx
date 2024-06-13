import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import fonttheme from "../theme/font.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../context/userContext.jsx";
import Postmodel from "../models/post.model.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider theme={fonttheme}>
    <UserProvider>
      <App />
      {/* <Postmodel /> */}
    </UserProvider>
  </ChakraProvider>
  // </React.StrictMode>
);
