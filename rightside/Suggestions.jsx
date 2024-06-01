import React from "react";
import { Box, Flex, Button, Avatar, Text } from "@chakra-ui/react";
function Suggestions() {
  const api = [
    {
      email: "john.doe@example.com",
      image_url: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    },
    {
      email: "jane.smith@example.com",
      image_url:
        "https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg",
    },
    {
      email: "alice.johnson@example.com",
      image_url:
        "https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg",
    },
    {
      email: "bob.brown@example.com",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiWNZ2UfH64J_rj_FqKhvwSqjULdmGokqrDnmcxKqhYPhFL8MZJghNH8tQYnbwBQhrag&usqp=CAU",
    },
    {
      email: "john.doe@example.com",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7wIetTmQ_HXNCHlLmhJ-i2MJ7kKmJr4-0-I2zV5zO3cHAz2oJLTzcQ_uD6W7UpWTZYg&usqp=CAU",
    },
    {
      email: "jane.smith@example.com",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcOCd2i8dI7e4RxES09Fx6dydG0dU18wbb2WWXcvWQyZMkoA2hdQmvHAe52Z9hyLvEnE&usqp=CAU",
    },
    {
      email: "alice.johnson@example.com",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-byiCvRWJKCYz9vSh1r1340OYv7AjyYEeOw&s",
    },
    {
      email: "bob.brown@example.com",
      image_url:
        "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-in-glasses-in-a-low-poly-piece-of-art-image_2872755.jpg",
    },
  ];
  return (
    <Box
      w={"100%"}
      //   border={"2px solid black"}
      display={"flex"}
      gap={4}
      flexDirection={"column"}
      overflowX={"scroll"}
    >
      {api.map((data, index) => (
        <Flex justifyContent={"left"} gap={3} alignItems={"end"} key={index}>
          <Avatar name="Prosper Otemuyiwa" src={data.image_url} />
          <Text w={"200px"}>{data.email}</Text>
          <Button bg={"black"} color={"white"} borderRadius={"20px"}>
            Follow
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export default Suggestions;
