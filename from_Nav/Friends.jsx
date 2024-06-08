import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MdGroupAdd } from "react-icons/md";
import CustomizedButton from "../utilities/Button";
import { UserContext } from "../context/userContext";
import { Box, Text, Flex, Avatar, Card } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
function Friends({ userId }) {
  //   const { user } = useContext(UserContext);
  const id = useParams().userId;
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/${id}/followings`,
          {
            withCredentials: true,
          }
        );
        setApi(response.data.followingList);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Card
      w={"100%"}
      display={"flex"}
      gap={4}
      flexDirection={"column"}
      overflowY={"scroll"}
      justifyContent={"center"}
      alignItems={"center"}
      minW={"sm"}
      p={"10px"}
    >
      <Text fontSize={"25px"} fontWeight={700} color={"gray.700"}>
        Friends{" "}
      </Text>{" "}
      {api.length === 0 && <Text>User is not following anynone yet.</Text>}
      {api.map((data) => (
        <Flex
          justifyContent={"left"}
          gap={3}
          alignItems={"end"}
          key={data.following._id}
        >
          {" "}
          {/*id of user */}
          <Link to={`/profile/${data._id}`}>
            <Avatar
              name={data.following.email}
              src={data.following.profileImage}
            />{" "}
          </Link>
          <Text w={"200px"} h={"auto"} minW={"100px"}>
            <Link to={`/profile/${data.following._id}`}>
              {data.following.email}
            </Link>
          </Text>
          <Box>
            <CustomizedButton text="Followings" icon={<MdGroupAdd />} />
          </Box>
        </Flex>
      ))}
    </Card>
  );
}

export default Friends;
