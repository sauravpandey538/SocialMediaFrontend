// status : working fine
import React, { useState } from "react";
import { Flex, Card, Input, Button, ButtonGroup } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import axios from "axios";
import SmallProfileImage from "../utilities/SmallProfileImage";

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
      console.log("success");
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
          <Button
            bg={"black"}
            color={"white"}
            borderRadius={"20px"}
            //   onClick={handleUpload}
          >
            Story
          </Button>
          <Button
            bg={"black"}
            color={"white"}
            borderRadius={"20px"}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </ButtonGroup>
      </Flex>
    </Card>
  );
}

export default Upload;
