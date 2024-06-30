import React, { useState, useEffect } from "react";
import { Image, Box, Flex, Button, Card, Input } from "@chakra-ui/react";
import EditIcon from "../utilities/EditIcon";
import axios from "axios";

function Email() {
  const [email, setEmail] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        "https://socialmediabackend-uwpt.onrender.com/bio",
        { email },
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
          <Card display={"flex"} flexDirection={"column"}>
            <Input
              placeholder="enter your new email"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <Button onClick={handleUpdate}>Update</Button>
          </Card>
        }
      />
    </Box>
  );
}

export default Email;
// not working at this moment
