import React, { useState, useContext } from "react";
import { Card, Input, Button, Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "./context/userContext";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", form, {
        withCredentials: true, // Include cookies
      });
      navigate("/");
      updateUser(response.data.user);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"gray.600"}
      h={"100vh"}
      w={"100%"}
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

        <Button onClick={handleSubmit}>Login</Button>
        <Flex gap={2}>
          <Text>Already loggedIn?</Text>
          <Link to="/signup">
            <Text borderBottom={"1px solid gray"}>Signup</Text>
          </Link>
        </Flex>
      </Card>
    </Box>
  );
}

export default Login;
