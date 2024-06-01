import React, { useState, useEffect } from "react";
import { Card, Image, Flex, Text, Box, Avatar } from "@chakra-ui/react";
import axios from "axios";

function Story() {
  const [api, setApi] = useState([]);
  const [count, setCount] = useState(5);
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/story/${count}`,
          {
            withCredentials: true,
          }
        );
        setApi(response.data.suggestions);
      } catch (error) {
        console.error("Error:", error);
        // Handle error
      }
    };

    postData();
  }, []);
  console.log(api);
  return (
    <Card>
      {/* story
        suggestions
        friends */}
      <Flex gap={2} bg={"white"} overflow={"scroll"}>
        {api?.map((data, index) => (
          <Box minW={"200px"} key={index} position={"relative"}>
            <Image
              h={"2xs"}
              objectFit="cover"
              src={data.storyImage}
              borderRadius={"10px"}
              filter="brightness(40%)"
            />
            <Avatar
              src={data.uploaderPP}
              position={"absolute"}
              top={"10px"}
              left={"15px"}
              bg={"white"}
            />
          </Box>
        ))}
      </Flex>
    </Card>
  );
}
export default Story;
// "story": {
//   "uploader": "hello2@gmail.com",
//   "uploaderPP": "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png",
//   "storyImage": "http://res.cloudinary.com/ddqif698j/image/upload/v1717256830/ajlkfklmlz8icqc3zatu.jpg",
//   "_id": "665b427f8a1017dafab45ae7",
//   "createdAt": "2024-06-01T15:47:11.380Z",
//   "__v": 0
// }
// }
// const api = [
//   {
//     email: "Saurav0325@gmail.com",
//     image:
//       "https://m.economictimes.com/thumb/msid-103914319,width-1600,height-900,resizemode-4,imgsize-74464/demon-slayer-season-5-heres-everything-we-about-the-series-so-far.jpg",
//   },
//   {
//     email: "hello8848@gmail.com",
//     image:
//       "https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg",
//   },
//   {
//     email: "johndoe@gmail.com",
//     image:
//       "https://sportshub.cbsistatic.com/i/2024/02/03/1a44be06-ff8d-4849-98e4-4177178ca139/demon-slayer-hashira-training-arc-movie-tickets-buy-sale.jpg",
//   },
//   {
//     email: "Saurav0325@gmail.com",
//     image:
//       "https://m.economictimes.com/thumb/msid-103914319,width-1600,height-900,resizemode-4,imgsize-74464/demon-slayer-season-5-heres-everything-we-about-the-series-so-far.jpg",
//   },
//   {
//     email: "hello8848@gmail.com",
//     image:
//       "https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg",
//   },
//   {
//     email: "johndoe@gmail.com",
//     image:
//       "https://sportshub.cbsistatic.com/i/2024/02/03/1a44be06-ff8d-4849-98e4-4177178ca139/demon-slayer-hashira-training-arc-movie-tickets-buy-sale.jpg",
//   },
// ];
