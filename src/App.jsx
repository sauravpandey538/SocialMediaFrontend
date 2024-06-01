import React, { useState, useEffect } from "react";
import { Card, Flex, Text, Image, Heading } from "@chakra-ui/react";
import NavItem from "../leftside/NavItem";
import ProfileImageName from "../leftside/ProfileImageName";
import Story from "../rightside/Story";
import Suggestions from "../rightside/Suggestions";
import Postmodel from "../models/post.model";
import MiddleNav from "../middleside/MiddleNav";
import Upload from "../middleside/upload";
import axios from "axios";
function App() {
  const [user, setUser] = useState({});
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
        setUser(userResponse.data.user);
        console.log(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <Flex
      bg={"gray.400"}
      gap={4}
      justifyContent={"space-between"}
      maxW={"100vw"}
    >
      {/* left side */}
      <Card
        className="left"
        w={"300px"}
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
      {/* middle side */}
      <Card w={"52vw"} overflowY={"scroll"} maxH={"100vh"} px={"20px"}>
        <MiddleNav />
        <Upload pp={user.profileImage} username={user.email} />
        <Postmodel />
      </Card>
      {/* right side */}
      <Card
        display={"flex"}
        direction={"column"}
        alignItems={"left"}
        p={"10px"}
        gap={4}
        h={"100vh"}
        w={"400px"}
        overflowX={"scroll"}
      >
        <Heading size={"lg"} color={"gray.700"}>
          Stories
        </Heading>
        <Story />
        <Text fontSize={"25px"} fontWeight={700} color={"gray.700"}>
          Suggestions{" "}
        </Text>{" "}
        <Suggestions />
      </Card>
    </Flex>
  );
}

export default App;
