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
function NavItem() {
  const { user } = useContext(UserContext);
  const nav = [
    { icon: IoIosHome, name: "Home" },
    { icon: IoMdMail, name: "Message" },
    { icon: MdNotificationAdd, name: "Notification" },
    { icon: FaUserFriends, name: "Friends" },
    { icon: IoPersonCircleSharp, name: "Profile" },
    { icon: IoSettings, name: "Setting" },
  ];
  return (
    <Flex direction="column" gap="2" maxH={"fit-content"}>
      {nav.map((item, index) => (
        <motion.div whileHover={{ scale: 1.1 }} key={index}>
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
    </Flex>
  );
}

export default NavItem;
