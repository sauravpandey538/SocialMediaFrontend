import React, { useState } from "react";
import { Card, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signup", form);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
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
        placeholder="password : it will be hashed"
        value={form.password}
        onChange={handleChange}
        name="password"
      />
      <Button onClick={handleSubmit}>Signup</Button>
    </Card>
  );
}

export default Signup;
