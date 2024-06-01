import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci"; // normal
import { FcLike } from "react-icons/fc"; // red
import { BiSolidCommentDetail } from "react-icons/bi";
function PostBottom() {
  const api = [
    { name: IoEyeSharp, data: 200 },
    { name: CiHeart, data: "Like" },
    { name: BiSolidCommentDetail, data: "Comment" },
  ];
  return (
    <Flex gap={"6px"} justifyContent={"left"}>
      {api.map((data, index) => (
        <Button
          leftIcon={<data.name size={"25px"} />}
          variant={"ghost"}
          key={index}
        >
          {data.data}
        </Button>
      ))}
    </Flex>
  );
}

export default PostBottom;
