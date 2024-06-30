import React, { useState, useEffect } from "react";
import { Image, Box, Flex, Button, Card, Input } from "@chakra-ui/react";
import EditIcon from "../utilities/EditIcon";
import axios from "axios";
import CustomizedButton from "../utilities/Button";
import { MdOutlineCloudUpload } from "react-icons/md";

function Bio() {
  const [bio, setBio] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(null);

  const handleUpdate = async () => {
    try {
      setLoadingUpload(true);
      const response = await axios.post(
        "https://socialmediabackend-uwpt.onrender.com/bio",
        { bio },
        {
          withCredentials: true,
        }
      );
      setLoadingUpload(false);
      console.log("Bio updated:", response.data);
    } catch (error) {
      setLoadingUpload(false);
      console.error("Error updating bio:", error);
    }
  };
  return (
    <Box>
      <EditIcon
        children={
          <Card display={"flex"} flexDirection={"column"} gap={3}>
            <Input
              placeholder="enter your news bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <Box onClick={handleUpdate} minW={"100px"} px={"50px"}>
              <CustomizedButton
                text="Update"
                icon={<MdOutlineCloudUpload />}
                loading={loadingUpload}
              />
            </Box>
          </Card>
        }
      />
    </Box>
  );
}

export default Bio;
