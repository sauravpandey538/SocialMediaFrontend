import React, { useState, useEffect, useContext } from "react";
import { Card, Flex, Text, Image, Heading } from "@chakra-ui/react";
import NavItem from "../leftside/NavItem";
import ProfileImageName from "../leftside/ProfileImageName";
import Story from "../rightside/Story";
import Suggestions from "../rightside/Suggestions";
import Postmodel from "../models/post.model";
// import MiddleNav from "../middleside/MiddleNav";
// import Upload from "../middleside/upload";
import axios from "axios";
import { useBreakpointValue, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../Signup.jsx";
import Login from "../Login.jsx";
// import ReactDOM from "react-dom/client";
import { UserContext } from "../context/userContext";
import Profile from "../from_Nav/Profile";
import Friends from "../from_Nav/Friends";
import Setting from "../from_Nav/Setting";
import MiddleNav from "../middleside/MiddleNav";

function App() {
  const { user, updateUser } = useContext(UserContext);
  const device = useBreakpointValue({
    base: "iphone",
    md: "ipad",
    lg: "macbook",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          "https://social-media-backend-mocha.vercel.app/myprofile",
          {
            withCredentials: true,
          }
        );
        // console.log(userResponse);
        updateUser(userResponse.data.user);
        // console.log(userResponse);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [updateUser]);
  // console.log(user);
  return (
    <Router>
      <Flex
        bg={"gray.400"}
        gap={4}
        justifyContent={"space-between"}
        maxW={"100vw"}
      >
        {/* left side */}
        {device === "macbook" && (
          <Card
            className="left"
            maxW={"300px"}
            minW={"200px"}
            bg={"white"}
            px={"20px"}
            display={"flex"}
            direction={"column"}
            alignItems={"left"}
            h={"100vh"}
            gap={4}
            py={"10px"}
          >
            <ProfileImageName
              pp={user.profileImage}
              cp={user.coverImage}
              email={user.email}
              bio={user.bio}
            />
            <NavItem device={device} />
          </Card>
        )}
        {/* middle side */}
        <Routes>
          <Route
            path="/"
            element={
              // <Card
              //   flex={2}
              //   overflowY={"scroll"}
              //   maxH={"100vh"}
              //   // minW={"sm"}
              //   // border={"2px solid black"}
              //   overflowX={"hidden"}
              // >
              // {/* <MiddleNav device={device} /> */}
              // {/* <Upload pp={user.profileImage} username={user.email} /> */}
              <Postmodel
                device={device}
                pp={user.profileImage}
                username={user.email}
              />
              // </Card>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/:userId/friends" element={<Friends />} />
          <Route
            path="/stories"
            element={<Story useFullScreen={true} device={device} />}
          />
          <Route path="/suggestion" element={<Suggestions device={device} />} />

          {/* out of service*/}
          <Route
            path="/notification"
            element={
              <Flex direction={"column"} w={"100%"} zIndex={999}>
                <MiddleNav />
                <p>
                  {" "}
                  Opps!, <br />
                  Notification is out of service at this moment
                </p>
              </Flex>
            }
          />
          <Route
            path="/message"
            element={
              <Flex direction={"column"} w={"100%"} zIndex={999}>
                <MiddleNav />
                <p>
                  {" "}
                  Opps!, <br />
                  Message is out of service at this moment
                </p>
              </Flex>
            }
          />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/" */}
        </Routes>
        {/* right side */}
        {(device === "macbook" || device === "ipad") && (
          <Card
            display={"flex"}
            direction={"column"}
            alignItems={"left"}
            p={"10px"}
            gap={4}
            h={"100vh"}
            maxW={"350px"}
            minW={"250px"}
          >
            <Heading fontSize={"25px"} fontWeight={700} color={"gray.700"}>
              Stories
            </Heading>
            {Object.keys(user) !== 0 && <Story device={device} />}
            <Text fontSize={"25px"} fontWeight={700} color={"gray.700"}>
              Suggestions{" "}
            </Text>{" "}
            {Object.keys(user).length !== 0 && <Suggestions />}
          </Card>
        )}
      </Flex>
    </Router>
  );
}

export default App;

// import InfiniteScroll from "react-infinite-scroll-component";
// import React, { useState } from "react";

// function App() {
//   const [dataSource, setDataSource] = useState(Array.from({ length: 5 }));
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMoreData = () => {
//     if (dataSource.length < 50) {
//       // making api call
//       setTimeout(() => {
//         setDataSource(dataSource.concat(Array.from({ length: 5 })));
//       }, 1000);
//     } else {
//       setHasMore(false);
//     }
//   };

//   return (
//     <div>
//       <p>title : Infinite scroll tutorial</p>
//       <div>
//         <InfiniteScroll
//           dataLength={dataSource.length}
//           next={fetchMoreData}
//           hasMore={hasMore}
//           loader={<p>loading...</p>}
//           endMessage={<p>You're set...</p>}
//           height={500}
//         >
//           {dataSource.map((item, index) => {
//             return (
//               <div
//                 style={{
//                   height: "300px",
//                   border: "2px solid black",
//                   margin: "50px",
//                 }}
//               >
//                 {" "}
//                 This is div #{index + 1} inside infinite scroll
//               </div>
//             );
//           })}
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// }

// export default App;
