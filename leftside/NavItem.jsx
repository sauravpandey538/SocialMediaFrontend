import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { Button, Text, Box, Flex } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdNotificationAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { UserContext } from "../context/userContext";
import { FaHistory } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

function NavItem({ device }) {
  const { user } = useContext(UserContext);
  const navForMacbook = [
    { icon: IoIosHome, name: "Home" },
    // { icon: IoMdMail, name: "Message" },
    // { icon: MdNotificationAdd, name: "Notification" },
    { icon: FaUserFriends, name: "Friends" },
    { icon: IoPersonCircleSharp, name: "Profile" },
    { icon: FaHistory, name: "Stories" },

    { icon: IoSettings, name: "Setting" },
  ];

  const navForMobile = [
    { icon: IoIosHome, name: "Home" },
    // { icon: IoMdMail, name: "Message" },
    // { icon: MdNotificationAdd, name: "Notification" },
    { icon: FaHistory, name: "Stories" },
    { icon: FaUserFriends, name: "Friends" },
    { icon: IoPersonAddSharp, name: "Suggestions" },
    { icon: IoPersonCircleSharp, name: "Profile" },
    { icon: IoSettings, name: "Setting" },
  ];
  return (
    <Flex
      direction="column"
      gap="2"
      h={"max-content"}
      zIndex={898}
      overflowY={"auto"}
      overflowX={"hidden"}
      bg={"white"}
      // border={"2px solid black"}
      py={"10px"}
    >
      {device === "macbook" && (
        <>
          {navForMacbook.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              // style={{ border: "2px solid black", overflow: "hidden" }}
            >
              <Link
                to={
                  item.name === "Home"
                    ? "/"
                    : item.name === "Profile"
                    ? `/profile/${user._id}`
                    : item.name === "Friends"
                    ? `/${user._id}/friends`
                    : `/${item.name.toLowerCase()}`
                }
                // <Link to={`/profile/${data._id}`}>{data.email}</Link>
              >
                <Button
                  leftIcon={<item.icon />}
                  variant={"link"}
                  color={"black"}
                  my={"10px"}
                >
                  {item.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </>
      )}

      {device !== "macbook" && (
        <>
          {navForMobile.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              // style={{ border: "2px solid black", overflow: "hidden" }}
            >
              <Link
                to={
                  item.name === "Home"
                    ? "/"
                    : item.name === "Profile"
                    ? `/profile/${user._id}`
                    : item.name === "Friends"
                    ? `/${user._id}/friends`
                    : `/${item.name.toLowerCase()}`
                }
                // <Link to={`/profile/${data._id}`}>{data.email}</Link>
              >
                <Button
                  leftIcon={<item.icon />}
                  variant={"link"}
                  color={"black"}
                  my={"10px"}
                >
                  {item.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </>
      )}
    </Flex>
  );
}

export default NavItem;
