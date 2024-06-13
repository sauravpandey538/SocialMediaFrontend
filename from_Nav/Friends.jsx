import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MdGroupAdd } from "react-icons/md";
import CustomizedButton from "../utilities/Button";
import { UserContext } from "../context/userContext";
import { MdPersonRemoveAlt1 } from "react-icons/md";

import {
  Box,
  Text,
  Flex,
  Avatar,
  Card,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { Unfollow } from "../utilities/Follow";
import MiddleNav from "../middleside/MiddleNav";

function Friends({ userId }) {
  //   const { user } = useContext(UserContext);
  const id = useParams().userId;
  const [api, setApi] = useState([]);
  //checking

  const device = useBreakpointValue({
    base: "iphone",
    md: "ipad",
    lg: "macbook",
  });
  const handleRemove = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/suggestion/${userId}/delete`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // handleRemove is overwriting here and i can't even remove cause it will affect useeffect.
  // todo: fit this later
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
  }, [handleRemove]);
  return (
    <Card
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
      overflowY={"scroll"}
      //   justifyContent={"center"}
      //   alignItems={"center"}
      minW={"sm"}
      h={"100vh"}
      p={"10px"}
    >
      {(device === "iphone" || device === "ipad") && <MiddleNav />}
      <Flex flexDirection={"column"} gap={4} h={"90vh"} overflowY={"scroll"}>
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
            <Unfollow userID={data.following._id} />
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}

export default Friends;
