// working as expected
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
// import { FcLike } from "react-icons/fc";
import { Button } from "@chakra-ui/react";
function LikeButton({ postId }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/${postId}/like`,
        {},
        {
          withCredentials: true,
        }
      );
      setLike(!like);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Fetch initial counts
    const fetchCounts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/post/${postId}`,
          {
            withCredentials: true,
          }
        );

        console.log(response);
        setLikeCount(response.data.post.likeCount);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCounts();
  }, [like]);

  return (
    <Button onClick={handleLike} leftIcon={<CiHeart />}>
      {likeCount}
    </Button>
  );
}

export default LikeButton;
