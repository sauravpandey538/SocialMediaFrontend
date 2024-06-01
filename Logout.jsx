import React from "react";
import { Card, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Logout() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/logout");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle error here (e.g., show error message to user)
    }
  };

  return (
    <Card maxW={"md"}>
      <Button onClick={handleSubmit}>Logout</Button>
    </Card>
  );
}

export default Logout;
