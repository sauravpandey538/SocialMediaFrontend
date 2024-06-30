import React, { useState, useContext } from "react";
import { Box, Flex, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import NavItem from "../leftside/NavItem";
import { UserContext } from "../context/userContext";
import CustomizedButton from "../utilities/Button";
import { IoEnterOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";

function MiddleNav({ device }) {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  const handleApiLogout = async () => {
    try {
      const response = await axios.post(
        "https://socialmediabackend-uwpt.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      justifyContent={"space-between"}
      borderBottom={"1px solid gray"}
      py={"10px"}
      px={"10px"} //added
      position={"sticky"}
      top={0}
      left={0}
      zIndex={800} // zindex for comment is 900
      bg={"white"}
      w={"100%"}
    >
      <Text
        fontSize={"25px"}
        fontWeight={700}
        color={"gray.700"}
        onClick={device === "macbook" ? null : () => setOpen(!open)}
      >
        {device === "macbook" ? "Feeds" : <VscThreeBars />}
      </Text>
      {open === true && (
        <motion.div
          style={{
            position: "fixed",
            top: "40px",
            left: 0,
            backgroundColor: "white",
            width: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "3",
            padding: "10px 0px",
            boxShadow: "rgba(0,0,0,0.3) 0px 4px 12px ",
            zIndex: "800", // it will be considered later
          }}
        >
          <Text
            onClick={() => setOpen(!open)}
            // border={"2px solid black"}
            w={"100%"}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            height={"100%"}
            pr={"20px"}
            fontSize={"20px"}
          >
            <MdCancel />
          </Text>
          <NavItem />
          <Text borderTop={"1px solid gray"} mt={"20px"}>
            Proudly developed by Saurav
          </Text>
        </motion.div>
      )}
      {/*working*/}
      <Flex>
        {Object.keys(user).length !== 0 ? (
          <Link onClick={handleApiLogout}>
            <CustomizedButton text="Logout" icon={<MdLogout />} />
          </Link>
        ) : (
          <ButtonGroup>
            <Link to="/login">
              <CustomizedButton text="Login" icon={<IoEnterOutline />} />
            </Link>
            <Link to="/signup">
              <CustomizedButton text="Signup" icon={<IoCreateOutline />} />
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  );
}

export default MiddleNav;
