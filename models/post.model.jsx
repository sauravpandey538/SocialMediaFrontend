// looks like error in time and fetching order.
import React, { useState, useEffect } from "react";
import { Button, Text, Box, Card, Flex, Image, Avatar } from "@chakra-ui/react";
import SmallProfileImage from "../utilities/SmallProfileImage";
import { formatDistanceToNow } from "date-fns";
import PostBottom from "../utilities/PostBottom";
import axios from "axios";

function Postmodel() {
  const [api, setApi] = useState(null);
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts", {
          withCredentials: true,
        });
        setApi(response.data.post);
      } catch (error) {
        console.error("Error:", error);
        // Handle error
      }
    };

    postData();
  }, []);
  return (
    <div>
      {api?.map((post, index) => (
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
              src={post.uploaderPP}
              alt={post.email}
            />{" "}
            <Flex direction={"column"} ml="10px">
              <Text fontWeight="bold">{post.uploader}</Text>
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

// const posts = [
//   {
//     uploader: "Alice Johnson",
//     uploadedAt: "2024-05-30T10:15:30Z",
//     caption: "A beautiful day in the park!",
//     imageUrl: "https://wallpapercave.com/wp/wp7637601.jpg",
//   },
//   {
//     uploader: "Bob Smith",
//     uploadedAt: "2024-05-29T08:45:00Z",
//     caption: "Enjoying a delicious meal!",
//     imageUrl:
//       "https://w0.peakpx.com/wallpaper/83/682/HD-wallpaper-happy-be-happy-boys-positive.jpg",
//   },
//   {
//     uploader: "Charlie Brown",
//     uploadedAt: "2024-05-28T14:20:10Z",
//     caption: "Just finished a great workout!",
//     imageUrl:
//       "https://i.pinimg.com/originals/54/02/c5/5402c54f69d0c02d9f01e7a5c667e4b0.jpg",
//   },
//   {
//     uploader: "Diana Prince",
//     uploadedAt: "2024-05-27T18:30:45Z",
//     caption: "Had an amazing time at the concert!",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEWe4SCQokx8-EaIiR-9ac3DItfyuJFcmHw&s",
//   },
//   {
//     uploader: "Eve Adams",
//     uploadedAt: "2024-05-26T11:00:00Z",
//     caption: "Sunset by the beach.",
//     imageUrl:
//       "https://www.desktopbackground.org/download/o/2013/10/09/651750_wallpapers-for-boys_1280x1024_h.jpg",
//   },
// ];
