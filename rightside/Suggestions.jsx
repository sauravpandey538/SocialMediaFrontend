import React, { useState, useEffect } from "react";
import { Box, Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
function Suggestions() {
  const [api, setApi] = useState([]);
  const [count, setCount] = useState(10);
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/suggestions/${count}`,
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
  return (
    <Box
      w={"100%"}
      display={"flex"}
      gap={4}
      flexDirection={"column"}
      overflowX={"scroll"}
    >
      {api?.map((data, index) => (
        <Flex justifyContent={"left"} gap={3} alignItems={"end"} key={index}>
          {" "}
          {/*id of user */}
          <Link to={`/profile/${data._id}`}>
            <Avatar name={data.email} src={data.profileImage} />{" "}
          </Link>
          <Text w={"200px"} h={"auto"} minW={"100px"}>
            <Link to={`/profile/${data._id}`}>{data.email}</Link>
          </Text>
          <Button bg={"black"} color={"white"} borderRadius={"20px"}>
            Follow{" "}
            {/*this will be upgraded later knowing already folloing or not */}
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export default Suggestions;
