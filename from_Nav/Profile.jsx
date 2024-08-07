import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Text,
  Card,
  Button,
  Flex,
  Avatar,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProfileImageName from "../leftside/ProfileImageName";
import { formatDistanceToNow } from "date-fns";
import PostBottom from "../utilities/PostBottom";
import { Link } from "react-router-dom";
import MiddleNav from "../middleside/MiddleNav";
import { FollowButton, Unfollow } from "../utilities/Follow";
function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  // const [isFollowing, setIsFollowing] = useState(false);
  const [postCount, setPostCount] = useState(0);
  const [showPost, setShowPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(null);
  const [clicked, setClicked] = useState(false);
  const device = useBreakpointValue({
    base: "iphone",
    md: "ipad",
    lg: "macbook",
  });
  useEffect(() => {
    const response = async () => {
      try {
        const response = await axios.get(`/api/${userId}/profile`, {
          withCredentials: true,
        });
        setUser(response.data.data);
        setPostCount(response.data.postCount);
        setPosts(response.data.posts);
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    response();
  }, [userId, clicked]);
  console.log(isFollowing);

  return (
    <Card
      display={"flex"}
      flexDirection={"column"}
      w={"100%"}
      overflowY={"scroll"}
      maxH={"100vh"}
      mx={"auto"}
    >
      {(device === "iphone" || device === "ipad") && <MiddleNav />}
      <Box p={"30px"} overflowX={"hidden"}>
        <ProfileImageName
          pp={user.profileImage}
          cp={user.coverImage}
          email={user.email}
          bio={user.bio}
          hideIcon={true}
        />
        <Flex justifyContent={"space-between"} alignItems={"end"}>
          <Flex gap={6} fontSize={"20px"}>
            <Text>{postCount} posts </Text>
            <Text>{user.followCount} followers </Text>
            <Link to={`/${user._id}/friends`}>
              <Text>{user.followingCount} following </Text>
            </Link>
          </Flex>
          {/* <Button>{isFollowing ? "Following" : "Follow"}</Button> */}
          {isFollowing !== undefined && (
            <>
              {isFollowing ? (
                <Box onClick={() => setClicked(!clicked)}>
                  {" "}
                  <Unfollow userID={userId} />
                </Box>
              ) : (
                <Box onClick={() => setClicked(!clicked)}>
                  <FollowButton userId={userId} />
                </Box>
              )}
            </>
          )}
        </Flex>
        <Button onClick={() => setShowPost(!showPost)} minH={"40px"}>
          {showPost ? "Hide Post" : "Show Post"}
        </Button>
        {showPost && (
          <Box>
            {posts?.map((post, index) => (
              <Card
                key={index}
                borderRadius={"15px"}
                display={"flex"}
                flexDirection={"column"}
                bgSize="cover"
                bgPosition="center"
                my="20px"
                p={"15px"}
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
                    src={user.profileImage}
                    alt={user.email}
                  />{" "}
                  <Flex direction={"column"} ml="10px">
                    <Text fontWeight="bold">{user.email}</Text>
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
                <Text
                  className="user_caption"
                  width={"100%"}
                  h={"auto"}
                  my="10px"
                >
                  {post.caption}
                </Text>

                {/* 3rd row */}
                <Box className="user_image" width="100%" my="10px">
                  <Image
                    src={post.postImage}
                    alt="User's post image"
                    borderRadius="10px"
                    objectFit={"cover"}
                    h={"300px"}
                  />
                </Box>

                {/* 4th row */}
                <Flex
                  className="like_comment_section"
                  justifyContent="space-between"
                  mt="10px"
                >
                  {/* Add your like/comment buttons here */}
                  <PostBottom postId={post._id} />
                </Flex>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Card>
  );
}
export default Profile;
