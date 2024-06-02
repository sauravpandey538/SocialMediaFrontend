import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import fonttheme from "../theme/font.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "../Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login.jsx";
import Logout from "../Logout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={fonttheme}>
      {/* <App /> */}
      {/* <Signup /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <App />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/notification" element={<Logout />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
