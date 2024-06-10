import React, { useState, useEffect } from "react";
import { Text, Box, Card, Flex, Image, Avatar } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import PostBottom from "../utilities/PostBottom";
import axios from "axios";

function Postmodel() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(3);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${count}`,
          {
            withCredentials: true,
          }
        );
        console.log(count);
        setPosts((prev) => [...prev, ...response.data.posts]); // all data is being fetched
        // setPosts(response.data.posts); // limited (2) data is being fetched which is as planned
      } catch (error) {
        console.error("Error:", error);
      }
    };

    postData();
  }, [count]);

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight // innerHeight and scrollHeight is always same..(error)
      ) {
        // console.log("innerHeight : ", window.innerHeight);
        // console.log("ScrollTop : ", document.documentElement.scrollTop); // output : 0;
        // console.log("scrollHeight : ", document.documentElement.scrollHeight);

        setCount(count + 3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Adding scroll event listener", window.addEventListener);
    document.addEventListener("scroll", handleInfiniteScroll, true);
    return () => {
      console.log("Removing scroll event listener");
      document.removeEventListener("scroll", handleInfiniteScroll, true);
    };
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <Card
          key={index}
          borderRadius={"15px"}
          display={"flex"}
          flexDirection={"column"}
          bgSize="cover"
          bgPosition="center"
          my="20px"
          p={"20px"}
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
            />
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
            <PostBottom postId={post._id} />
          </Flex>
        </Card>
      ))}
    </div>
  );
}

export default Postmodel;
