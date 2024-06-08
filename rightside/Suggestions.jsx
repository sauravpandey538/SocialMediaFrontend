import React, { useState, useEffect, useContext } from "react";
import { Box, Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { MdGroupAdd } from "react-icons/md";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomizedButton from "../utilities/Button";
import { FollowButton } from "../utilities/Follow";
function Suggestions() {
  const [api, setApi] = useState([]);
  const [count, setCount] = useState(15);
  const { user } = useContext(UserContext);

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
  }, [user]);
  return (
    <Box
      w={"100%"}
      display={"flex"}
      gap={4}
      flexDirection={"column"}
      overflowY={"scroll"}
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
          <FollowButton userId={data._id} />
        </Flex>
      ))}
    </Box>
  );
}

export default Suggestions;
