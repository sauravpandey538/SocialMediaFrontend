import React, { useState, useEffect, useContext, useCallback } from "react";
import { Box, Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { MdGroupAdd } from "react-icons/md";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomizedButton from "../utilities/Button";
import { FollowButton } from "../utilities/Follow";
function Suggestions() {
  const [api, setApi] = useState([]);
  const [count, setCount] = useState(5);
  const { user } = useContext(UserContext);

  const handleFetchMore = useCallback(() => {
    setCount((prev) => prev + 5);
  }, [count]);

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
  }, [user, handleFetchMore]);

  return (
    <Box
      w={"100%"}
      display={"flex"}
      gap={4}
      flexDirection={"column"}
      overflowY={"auto"}
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
      <Text onClick={handleFetchMore} cursor={"pointer"}>
        See more
      </Text>
    </Box>
  );
}

export default Suggestions;
