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
  const [loadingUpload, setLoadingUpload] = useState(null);
  const [loadingStory, setLoadingStory] = useState(null);

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
      setLoadingUpload(true);

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
      setLoadingUpload(false);

      window.location.reload(); // this is unfair and will be removed later
    } catch (error) {
      setLoadingUpload(false);

      console.log("error", error);
    }
  };
  const handleStory = async () => {
    try {
      setLoadingStory(true);
      const response = await axios.post(
        "http://localhost:3000/upload/story",
        post,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoadingStory(false);
      window.location.reload(); // this is unfair and will be removed later
    } catch (error) {
      setLoadingStory(false);

      console.log(error);
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
          <Box onClick={handleStory}>
            <CustomizedButton
              text="Story"
              icon={<FaHistory />}
              loading={loadingStory}
            />
          </Box>
          <Box onClick={handleUpload}>
            <CustomizedButton
              text="Upload"
              icon={<MdOutlineCloudUpload />}
              loading={loadingUpload}
            />
          </Box>
        </ButtonGroup>
      </Flex>
    </Card>
  );
}

export default Upload;
