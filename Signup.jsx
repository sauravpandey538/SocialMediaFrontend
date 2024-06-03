import React, { useState } from "react";
import { Card, Input, Button, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
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
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"gray.600"}
      w={"90%"}
      h={"100vh"}
      // border={"2px solid black"}
      // boxShadow={"lg"}
    >
      <Card maxW={"lg"} gap={3} p={"50px"} boxShadow={"lg"}>
        <Flex className="inputOne" direction={"column"} gap={1}>
          <Text>Your email</Text>
          <Input
            placeholder="eg: example@gmail.com"
            value={form.email}
            onChange={handleChange}
            name="email"
          />
        </Flex>
        <Flex className="inputTwo" direction={"column"} gap={1}>
          <Text>Your password</Text>
          <Flex border={"1px solid gray"} borderRadius={"4px"}>
            <Input
              placeholder="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              name="password"
              // borderRadius={"5px 0px 0px 5px"}
              border={"none"}
            />
            <Button
              bg={"transparent"}
              _hover={{ bg: "none" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </Flex>
        </Flex>

        <Button onClick={handleSubmit}>Signup</Button>
        <Flex gap={2}>
          <Text>Already signedup?</Text>
          <Link to="/login">
            <Text borderBottom={"1px solid gray"}>login</Text>
          </Link>
        </Flex>
      </Card>
    </Box>
  );
}

export default Signup;
