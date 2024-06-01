import React from "react";
import { Card, Image, Flex, Text, Box } from "@chakra-ui/react";
function Story() {
  const api = [
    {
      email: "Saurav0325@gmail.com",
      image:
        "https://m.economictimes.com/thumb/msid-103914319,width-1600,height-900,resizemode-4,imgsize-74464/demon-slayer-season-5-heres-everything-we-about-the-series-so-far.jpg",
    },
    {
      email: "hello8848@gmail.com",
      image:
        "https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg",
    },
    {
      email: "johndoe@gmail.com",
      image:
        "https://sportshub.cbsistatic.com/i/2024/02/03/1a44be06-ff8d-4849-98e4-4177178ca139/demon-slayer-hashira-training-arc-movie-tickets-buy-sale.jpg",
    },
  ];
  return (
    <Card>
      {/* story
        suggestions
        friends */}
      <Flex gap={2} bg={"white"} overflow={"scroll"}>
        {api.map((data, index) => (
          <Box w={"250px"} key={index}>
            <Image
              h={"2xs"}
              objectFit="cover"
              src={data.image}
              borderRadius={"10px"}
              filter="brightness(50%)"
            />
            <Text
              fontWeight={700}
              position={"relative"}
              bottom={"20px"}
              bg={"black"}
              color={"white"}
              //   fontSize={"14px"}
              textAlign={"center"}
            >
              {data.email}
            </Text>
          </Box>
        ))}
      </Flex>
    </Card>
  );
}

export default Story;
