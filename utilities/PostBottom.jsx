import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci"; // normal
import { FcLike } from "react-icons/fc"; // red
import { BiSolidCommentDetail } from "react-icons/bi";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
function PostBottom({ postId }) {
  const api = [
    { name: IoEyeSharp, data: 200 },
    { name: CiHeart, data: "Like" },
    { name: BiSolidCommentDetail, data: "Comment" },
  ];
  return (
    <Flex gap={3} h={"fit-content"}>
      <LikeButton postId={postId} />
      <CommentButton postId={postId} />
    </Flex>
  );
}

export default PostBottom;
