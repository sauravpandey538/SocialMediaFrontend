import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
function ProfileImageName({ pp, cp, bio, email }) {
  return (
    <Flex direction={"column"}>
      <Box className="ProfileImageName">
        <Image
          h={"auto"}
          w={"100%"}
          objectFit="cover"
          src={cp}
          borderRadius={"10px"}
        />
        <Avatar
          size="lg"
          name="Prosper Otemuyiwa"
          src={pp}
          mt={"-30px"}
          border={"2px solid white"}
        />
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
