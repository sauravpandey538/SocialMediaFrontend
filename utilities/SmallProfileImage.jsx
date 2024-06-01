import React from "react";
import { Image } from "@chakra-ui/react";
function SmallProfileImage() {
  return (
    <Image
      borderRadius="full"
      boxSize="50px"
      src="https://bit.ly/dan-abramov"
      alt="Profile Image"
    />
  );
}

export default SmallProfileImage;
