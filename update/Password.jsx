import React, { useState, useEffect } from "react";
import { Image, Box, Flex, Button, Card, Input } from "@chakra-ui/react";
import EditIcon from "../utilities/EditIcon";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function Password() {
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/update/password",
        { oldpassword, newpassword },
        {
          withCredentials: true,
        }
      );
      console.log("Bio updated:", response.data);
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };
  return (
    <Box>
      <EditIcon
        children={
          <Card display={"flex"} flexDirection={"column"} gap={3}>
            <Flex border={"1px solid gray"} borderRadius={"4px"}>
              <Input
                placeholder="Enter your old password"
                type={showOldPassword ? "text" : "password"}
                value={oldpassword}
                onChange={(e) => setOldPassword(e.target.value)}
                name="password"
                border={"none"}
              />
              <Button
                bg={"transparent"}
                _hover={{ bg: "none" }}
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </Flex>
            <Flex border={"1px solid gray"} borderRadius={"4px"}>
              <Input
                placeholder="Enter your new password"
                type={showNewPassword ? "text" : "password"}
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                name="password"
                border={"none"}
              />
              <Button
                bg={"transparent"}
                _hover={{ bg: "none" }}
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </Flex>
            <Button onClick={handleUpdate}>Update</Button>
          </Card>
        }
      />
    </Box>
  );
}

export default Password;
// not working at this moment
