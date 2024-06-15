import React, { useState, useEffect, useContext } from "react";
import { Card, Image, Flex, Text, Box, Avatar, Button } from "@chakra-ui/react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { IoIosBackspace } from "react-icons/io";

import { motion } from "framer-motion";
import MiddleNav from "../middleside/MiddleNav";
function Story({ useFullScreen, device }) {
  const [api, setApi] = useState([]);
  const [count, setCount] = useState(15);
  const { user, updateUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
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
  }, [user]);
  const setOpenImage = (url) => {
    setIsOpen(!isOpen);
    setImgUrl(url);
  };

  useEffect(() => {
    if (isOpen) {
      // console.log("under processing");
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 30000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // console.log(imgUrl);
  return (
    <Card>
      {useFullScreen !== true && (
        <Flex gap={2} bg={"white"} overflow={"scroll"}>
          {api?.map((data, index) => (
            <Box minW={"200px"} key={data._id} position={"relative"}>
              <Image
                h={"2xs"}
                objectFit="cover"
                src={data.storyImage}
                borderRadius={"10px"}
                filter="brightness(40%)"
                onClick={() => setOpenImage(data.storyImage)}
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
      )}
      {useFullScreen === true && (
        <>
          {(device === "iphone" || device === "ipad") && <MiddleNav />}

          <Flex
            gap={2}
            bg={"white"}
            flexWrap={"wrap"}
            px={"10px"}
            maxH={"100vh"}
            overflowY={"auto"}
          >
            {api?.map((data, index) => (
              <Box
                minW={"100px"}
                maxW={"160px"}
                key={data._id}
                position={"relative"}
                overflow={"auto"}
              >
                <Image
                  h={"2xs"}
                  objectFit="cover"
                  src={data.storyImage}
                  borderRadius={"10px"}
                  filter="brightness(40%)"
                  onClick={() => setOpenImage(data.storyImage)}
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
        </>
      )}
      {isOpen && (
        <Box
          h={"100vh"}
          w={"100vw"}
          position={"fixed"}
          top={0}
          left={0}
          zIndex={999}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor="rgba(0, 0, 0, 0.7)"
        >
          <Box position={"relative"} flexDirection={"column"} mx={"20px"}>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              position={"absolute"}
              top={"50px"}
              right={"50px"}
              border={"50%"}
              rightIcon={<IoIosBackspace />}
            >
              Back
            </Button>

            <Image
              src={imgUrl}
              h={"80vh"}
              w={"auto"}
              objectFit={"cover"}
              borderRadius={"10px"}
              mb={"5px"}
            />
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 30 }}
              style={{
                height: "5px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
      )}
    </Card>
  );
}
export default Story;
