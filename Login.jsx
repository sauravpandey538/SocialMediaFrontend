import React, { useState } from "react";
import { Box, Flex, Card, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/login", form, {
      withCredentials: true, // Include cookies
    });
    navigate("/");
  };

  return (
    <Card maxW={"md"}>
      <Input
        placeholder="eg: example@gmail.com"
        value={form.email}
        onChange={handleChange}
        name="email"
      />
      <Input
        placeholder="eg: example@gmail.com"
        value={form.password}
        onChange={handleChange}
        name="password"
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Card>
  );
}

export default Login;
