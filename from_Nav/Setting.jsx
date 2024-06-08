import React from "react";
import { Box, Text, Card, Avatar, Button } from "@chakra-ui/react";
import EditIcon from "../utilities/EditIcon";
import ProfilePicture from "../update/ProfilePicture";
import Bio from "../update/Bio";
import CoverPicture from "../update/CoverPicture";
import Password from "../update/Password";
import {
  DeleteButtonForAccount,
  DeleteButtonForPost,
} from "../utilities/DeleteButton";
function Setting() {
  return (
    <Card
      h={"100vh"}
      w={"100vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"30px"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={3} w={"100%"}>
        <Text fontSize={"25px"} fontWeight={700} color={"gray.700"}>
          Settings{" "}
        </Text>{" "}
        <Card
          className="Profile_Image"
          w={"100%"}
          p={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
          gap={"4"}
          flexDirection={"row"}
        >
          {" "}
          <Text>Change Profile Picture</Text>
          <Box>
            <ProfilePicture />
          </Box>
        </Card>
        <Card
          className="Cover_Image"
          w={"100%"}
          p={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
          gap={"4"}
          flexDirection={"row"}
        >
          {" "}
          <Text>Change Cover Picture</Text>
          <Box>
            <CoverPicture />
          </Box>
        </Card>
        <Card
          className="Cover_Image"
          w={"100%"}
          p={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
          gap={"4"}
          flexDirection={"row"}
        >
          {" "}
          <Text>Change Your Bio</Text>
          <Box>
            <Bio />
          </Box>
        </Card>{" "}
        {/*working*/}
        <Card
          className="E-mail"
          w={"100%"}
          p={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
          gap={"4"}
          flexDirection={"row"}
        >
          {" "}
          <Text>Change Your Password</Text>
          <Box>
            <Password />
          </Box>
        </Card>
        <DeleteButtonForPost>Delete Posts</DeleteButtonForPost>
        <DeleteButtonForAccount>Delete Account</DeleteButtonForAccount>
      </Box>
    </Card>
  );
}

export default Setting;
