import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { MdGroupAdd } from "react-icons/md";
import CustomizedButton from "./Button";
import axios from "axios";
import { MdPersonRemoveAlt1 } from "react-icons/md";

export function FollowButton({ userId }) {
  const handleFollow = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/${userId}/follow`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("User followed:", response.data);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  return (
    <Box onClick={handleFollow}>
      <CustomizedButton text="Follow" icon={<MdGroupAdd />} />
    </Box>
  );
}
export function Unfollow({ userID }) {
  const handleRemove = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/suggestion/${userID}/delete`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box onClick={handleRemove}>
        <CustomizedButton text="Remove" icon={<MdPersonRemoveAlt1 />} />
      </Box>
    </>
  );
}
