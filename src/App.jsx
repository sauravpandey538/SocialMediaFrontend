import React, { useState, useEffect, useContext } from "react";
import { Card, Flex, Text, Image, Heading } from "@chakra-ui/react";
import NavItem from "../leftside/NavItem";
import ProfileImageName from "../leftside/ProfileImageName";
import Story from "../rightside/Story";
import Suggestions from "../rightside/Suggestions";
import Postmodel from "../models/post.model";
import MiddleNav from "../middleside/MiddleNav";
import Upload from "../middleside/upload";
import axios from "axios";
import { useBreakpointValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../Signup.jsx";
import Login from "../Login.jsx";
// import Logout from "../Logout.jsx";
import ReactDOM from "react-dom/client";
// import Profile from "../middleside/Profile";
import { UserContext } from "../context/userContext";
import Profile from "../from_Nav/Profile";
import Friends from "../from_Nav/Friends";
import Setting from "../from_Nav/Setting";

function App() {
  const { user, updateUser } = useContext(UserContext);
  const device = useBreakpointValue({
    base: "iphone",
    md: "ipad",
    lg: "macbook",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          "http://localhost:3000/myprofile",
          {
            withCredentials: true,
          }
        );
        console.log(userResponse);
        updateUser(userResponse.data.user);
        console.log(userResponse);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [updateUser]);
  console.log(user);
  return (
    <Router>
      <Flex
        bg={"gray.400"}
        gap={4}
        justifyContent={"space-between"}
        maxW={"100vw"}
      >
        {/* left side */}
        {device === "macbook" && (
          <Card
            className="left"
            maxW={"300px"}
            minW={"200px"}
            bg={"white"}
            px={"20px"}
            display={"flex"}
            direction={"column"}
            alignItems={"left"}
            h={"100vh"}
            gap={4}
            py={"10px"}
          >
            <ProfileImageName
              pp={user.profileImage}
              cp={user.coverImage}
              email={user.email}
              bio={user.bio}
            />
            <NavItem />
          </Card>
        )}
        {/* middle side */}
        <Routes>
          <Route
            path="/"
            element={
              <Card
                flex={2}
                overflowY={"scroll"}
                maxH={"100vh"}
                px={"20px"}
                minW={"sm"}
                // border={"2px solid black"}
                overflowX={"hidden"}
              >
                <MiddleNav device={device} />
                <Upload pp={user.profileImage} username={user.email} />
                <Postmodel />
              </Card>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/:userId/friends" element={<Friends />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/" */}
        </Routes>
        {/* right side */}
        {(device === "macbook" || device === "ipad") && (
          <Card
            display={"flex"}
            direction={"column"}
            alignItems={"left"}
            p={"10px"}
            gap={4}
            h={"100vh"}
            maxW={"350px"}
            minW={"250px"}
          >
            <Heading fontSize={"25px"} fontWeight={700} color={"gray.700"}>
              Stories
            </Heading>
            {Object.keys(user) !== 0 && <Story />}
            <Text fontSize={"25px"} fontWeight={700} color={"gray.700"}>
              Suggestions{" "}
            </Text>{" "}
            {Object.keys(user).length !== 0 && <Suggestions />}
          </Card>
        )}
      </Flex>
    </Router>
  );
}

export default App;
