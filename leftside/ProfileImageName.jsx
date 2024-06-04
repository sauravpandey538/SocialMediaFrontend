import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import CoverPicture from "../update/CoverPicture";
function ProfileImageName({ pp, cp, bio, email }) {
  return (
    <Flex direction={"column"}>
      <Box className="ProfileImageName">
        <Box position={"relative"}>
          <Image
            h={"auto"}
            w={"100%"}
            objectFit="cover"
            src={cp}
            borderRadius={"10px"}
          />
          <Box
            position={"absolute"}
            bottom={"-3px"}
            right={"-3px"}
            border={"2px solid white"}
            bgColor={"black"}
            color={"white"}
            borderRadius={"50%"}
            // fontSize={"10px"}
          >
            <CoverPicture />
          </Box>
        </Box>
        <Box position={"relative"} w={"fit-content"}>
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src={pp}
            mt={"-30px"}
            border={"2px solid white"}
          />
          <Box
            position={"absolute"}
            bottom={"-3px"}
            right={"-3px"}
            border={"2px solid white"}
            bgColor={"black"}
            color={"white"}
            borderRadius={"50%"}

            // fontSize={"10px"}
          >
            <ProfileImageName />{" "}
          </Box>
        </Box>
      </Box>
      <Box>
        <Text fontSize={"20px"} fontWeight={700} color={"gray.700"}>
          {email}
        </Text>
        <Text>{bio}</Text>
      </Box>
    </Flex>
  );
}
export default ProfileImageName;
