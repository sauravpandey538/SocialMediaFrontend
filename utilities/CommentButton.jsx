import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box, Card, Flex, Input, Avatar, Text } from "@chakra-ui/react";
import { BiSolidCommentDetail } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
function CommentButton({ postId }) {
  const [clicked, setClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [commentApi, setcommentApi] = useState([]);
  const handleComment = async () => {
    if (comment && comment !== "") {
      try {
        const response = await axios.post(
          `https://socialmediabackend-uwpt.onrender.com/${postId}/comment`,
          { comment },
          {
            withCredentials: true,
          }
        );
        console.log(response);
        setComment("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://socialmediabackend-uwpt.onrender.com/${postId}/comments`,

          {
            withCredentials: true,
          }
        );
        setcommentApi(response.data.comments);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [comment]);
  return (
    <Flex>
      <Button
        leftIcon={<BiSolidCommentDetail />}
        onClick={() => setClicked(!clicked)}
      >
        Comment
      </Button>
      {clicked && (
        <Box
          h={"100vh"}
          w={"100vw"}
          backgroundColor="rgba(0, 0, 0, 0.7)"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"fixed"}
          top={0}
          left={0}
          zIndex={900}
        >
          <Card
            h={"lg"}
            w={"sm"}
            display={"flex"}
            flexDirection={"column"}
            p={"15px"}
            justifyContent={"space-between"}
            position={"relative"}
            gap={3}
          >
            <Flex
              onClick={() => setClicked(!clicked)}
              justifyContent={"flex-end"}
            >
              <MdCancel fontSize={"20px"} />
            </Flex>
            {/* middle one or comment array */}
            <Flex
              flexDir={"column"}
              gap={5}
              overflowY={"auto"}
              alignItems={"flex-start"}
              justifyContent={"start"}
              h={"100%"}
            >
              {commentApi.map((item) => (
                <Flex key={item._id} gap={3}>
                  <Link to={`/profile/${item.commentor._id}`}>
                    <Avatar
                      name={item.commentor.email}
                      src={item.commentor.profileImage}
                    />{" "}
                  </Link>
                  <Text w={"200px"} h={"auto"} minW={"100px"}>
                    <Link to={`/profile/${item.commentor_id}`}>
                      {item.comment}
                    </Link>
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Flex gap={3}>
              <Input
                placeholder={"what's your thought on it?"}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button onClick={handleComment}>Comment</Button>
            </Flex>
          </Card>
        </Box>
      )}
    </Flex>
  );
}

export default CommentButton;
