import React, { useState } from "react";
import { Image, Box, Flex, Button } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import axios from "axios";
import EditIcon from "../utilities/EditIcon";
import CustomizedButton from "../utilities/Button";
import { MdOutlineCloudUpload } from "react-icons/md";

function ProfilePicture() {
  const [image, setImage] = useState(null);
  const [loadingUpload, setLoadingUpload] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleApiUpdate = async () => {
    try {
      setLoadingUpload(true);
      const response = await axios.post(
        "/api/profileimage",
        { image },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("sucessfully updated");
      setLoadingUpload(false);
    } catch (error) {
      setLoadingUpload(false);
      console.log(error);
    }
  };
  return (
    <Box>
      <EditIcon
        children={
          <Flex w={"100%"} px={"auto"} justifyContent={"center"}>
            <label
              htmlFor="upload-image"
              style={{ display: "flex", gap: "30px" }}
            >
              <Button
                leftIcon={<BsFillImageFill />}
                bg={"none"}
                as="span"
                // onClick={handleUpdateImage}
              >
                Choose
              </Button>
              <input
                type="file"
                id="upload-image"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <Box onClick={handleApiUpdate}>
                <CustomizedButton
                  text="Upload"
                  icon={<MdOutlineCloudUpload />}
                  loading={loadingUpload}
                />{" "}
              </Box>
            </label>
          </Flex>
        }
      />
    </Box>
  );
}

export default ProfilePicture;
