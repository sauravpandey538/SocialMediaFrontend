// status : working fine
import React, { useState } from "react";
import { Flex, Card, Input, Button, ButtonGroup, Box } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import axios from "axios";
import SmallProfileImage from "../utilities/SmallProfileImage";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import CustomizedButton from "../utilities/Button";

function Upload({ pp, username }) {
  const [post, setPost] = useState({
    image: "",
    caption: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPost((prevPost) => ({ ...prevPost, image: file }));
  };

  const handleCaptionChange = (e) => {
    const caption = e.target.value;
    setPost((prevPost) => ({ ...prevPost, caption }));
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/upload/post",
        post,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      window.location.reload(); // this is unfair and will be removed later
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Card p={"30px"} gap={3} bg={"gray.100"}>
      <Flex gap={3} alignItems={"end"}>
        <SmallProfileImage pp={pp} username={username} />
        <Input
          placeholder="Share something"
          bg={"white"}
          borderRadius={"30px"}
          value={post.caption}
          onChange={handleCaptionChange}
        />
      </Flex>
      <Flex justifyContent={"space-between"}>
        <label htmlFor="upload-image">
          <Button leftIcon={<BsFillImageFill />} bg={"none"} as="span">
            Image
          </Button>
          <input
            type="file"
            id="upload-image"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </label>
        <ButtonGroup>
          <CustomizedButton text="Story" icon={<FaHistory />} />
          <Box onClick={handleUpload}>
            <CustomizedButton text="Upload" icon={<MdOutlineCloudUpload />} />
          </Box>
        </ButtonGroup>
      </Flex>
    </Card>
  );
}

export default Upload;
