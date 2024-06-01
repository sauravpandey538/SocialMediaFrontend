import React from "react";
import { Card, Flex, Text, Image, Heading } from "@chakra-ui/react";
import NavItem from "../leftside/NavItem";
import ProfileImageName from "../leftside/ProfileImageName";
import Story from "../rightside/Story";
import Suggestions from "../rightside/Suggestions";
import Postmodel from "../models/post.model";
import MiddleNav from "../middleside/MiddleNav";
function App() {
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
        <ProfileImageName />
        <NavItem />
      </Card>
      {/* middle side */}
      <Card w={"52vw"} overflowY={"scroll"} maxH={"100vh"} px={"20px"}>
        <MiddleNav />
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
