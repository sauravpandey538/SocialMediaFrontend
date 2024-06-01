import React from "react";
import { Image, Avatar } from "@chakra-ui/react";
function SmallProfileImage({ pp, username }) {
  return <Avatar borderRadius="full" boxSize="50px" src={pp} alt={username} />;
}

export default SmallProfileImage;
