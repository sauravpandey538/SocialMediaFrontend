import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
function ProfileImageName() {
  const user = {
    cp: "https://movies-b26f.kxcdn.com/wp-content/uploads/2017/09/Koe-1024x1024.jpg",
    pp: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/Ishida-Shoyo-from-A-Silent-Voice.jpg",
    email: "Saurav0325@gmail.com",
    bio: "Life is so short. So, enjoy a lot.Life is so short. So, enjoy a lot.Life is so short. So, enjoy a lot.Life is so short. So, enjoy a lot.Life is so short. So, enjoy a lot.",
  };

  return (
    <Flex direction={"column"}>
      <Box className="ProfileImageName">
        <Image
          h={"auto"}
          w={"100%"}
          objectFit="cover"
          src={user.cp}
          borderRadius={"10px"}
        />
        <Avatar
          size="lg"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
          mt={"-30px"}
          border={"2px solid white"}
        />
      </Box>
      <Box>
        <Text fontSize={"20px"} fontWeight={700} color={"gray.700"}>
          @ {user.email}
        </Text>
        <Text>{user.bio}</Text>
      </Box>
    </Flex>
  );
}
export default ProfileImageName;
