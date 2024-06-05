// looks like error in time and fetching order.
import React, { useState, useEffect } from "react";
import { Button, Text, Box, Card, Flex, Image, Avatar } from "@chakra-ui/react";
import SmallProfileImage from "../utilities/SmallProfileImage";
import { formatDistanceToNow } from "date-fns";
import PostBottom from "../utilities/PostBottom";
import axios from "axios";

function Postmodel() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts", {
          withCredentials: true,
        });
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error:", error);
        // Handle error
      }
    };

    postData();
  }, []);
  return (
    <div>
      {posts?.map((post, index) => (
        <Card
          key={index}
          borderRadius={"15px"}
          display={"flex"}
          flexDirection={"column"}
          bgSize="cover"
          bgPosition="center"
          my="20px"
          p={"10px"}
        >
          {/* 1st row */}
          <Flex
            className="account_details"
            alignItems="center"
            minW={"sm"}
            maxW={"lg"}
          >
            <Avatar
              borderRadius="full"
              boxSize="50px"
              src={post.uploader.profileImage}
              alt={post.uploader.email}
            />{" "}
            <Flex direction={"column"} ml="10px">
              <Text fontWeight="bold">{post.uploader.email}</Text>
              <Text fontSize="sm" color="gray.500">
                {formatDistanceToNow(new Date(post.customTimestamp), {
                  addSuffix: true,
                })}
              </Text>
            </Flex>
            <Box ml="auto" className="three_dot">
              {/* Add your three-dot menu here */}
            </Box>
          </Flex>

          {/* 2nd row */}
          <Text className="user_caption" width={"100%"} h={"auto"} my="10px">
            {post.caption}
          </Text>

          {/* 3rd row */}
          <Box className="user_image" width="100%" my="10px">
            <Image
              src={post.postImage}
              alt="User's post image"
              borderRadius="10px"
              objectFit={"cover"}
              h={"300px"}
            />
          </Box>

          {/* 4th row */}
          <Flex
            className="like_comment_section"
            justifyContent="space-between"
            mt="10px"
          >
            {/* Add your like/comment buttons here */}
            <PostBottom />
          </Flex>
        </Card>
      ))}
    </div>
  );
}

export default Postmodel;
