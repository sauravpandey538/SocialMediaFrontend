import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Text, Box, Card, Flex, Image, Avatar } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import PostBottom from "../utilities/PostBottom";
import MiddleNav from "../middleside/MiddleNav";
import Upload from "../middleside/upload";
function Postmodel({ device, pp, username }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 2; // Number of posts to fetch per page
  const limit = 2; // Initial limit for the number of posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts`, {
          params: { page, limit },
        });
        const { data } = response;
        const fetchedPosts = data.posts;
        const totalPosts = data.totalPosts;
        setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);

        if (postsPerPage * page >= totalPosts) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPosts();
  }, [page]); // Fetch posts when page changes

  const fetchMorePosts = () => {
    setPage(page + 1); // Increment page to fetch next set of posts
  };
  // checking
  // console.log("page number is ", page);
  // console.log("array length is :", posts.length);
  return (
    <Card w={"100%"} maxH={"100vh"} overflow={"auto"} id="scrollableDiv">
      <MiddleNav device={device} />
      <Upload pp={pp} username={username} />
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts} // Call fetchMorePosts when scrolling to the bottom
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <Text py={"100px"} fontWeight={700} textAlign={"center"}>
            You are upto date
          </Text>
        }
        scrollableTarget="scrollableDiv"
      >
        {posts.map((post, index) => (
          <Card
            key={index}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            s
            bgSize="cover"
            bgPosition="center"
            my="20px"
            p={"20px"}
          >
            {/* 1st row */}
            <Flex
              className="account_details"
              alignItems="center"
              minW={"sm"}
              maxW={"lg"}
            >
              <Avatar
                borderRadius="full"
                boxSize="50px"
                src={post.uploader.profileImage}
                alt={post.uploader.email}
              />
              <Flex direction={"column"} ml="10px">
                <Text fontWeight="bold">{post.uploader.email}</Text>
                <Text fontSize="sm" color="gray.500">
                  {formatDistanceToNow(new Date(post.customTimestamp), {
                    addSuffix: true,
                  })}
                </Text>
              </Flex>
              <Box ml="auto" className="three_dot">
                {/* Add your three-dot menu here */}
              </Box>
            </Flex>

            {/* 2nd row */}
            <Text className="user_caption" width={"100%"} h={"auto"} my="10px">
              {post.caption}
            </Text>

            {post.postImage && (
              <Box className="user_image" width="100%" my="10px">
                <Image
                  src={post.postImage}
                  alt="User's post image"
                  borderRadius="10px"
                  objectFit={"cover"}
                  h={"300px"}
                />
              </Box>
            )}
            {/* 3rd row */}

            {/* 4th row */}
            <Flex
              className="like_comment_section"
              justifyContent="space-between"
              mt="10px"
            >
              <PostBottom postId={post._id} />
            </Flex>
          </Card>
        ))}
      </InfiniteScroll>
    </Card>
  );
}

export default Postmodel;
