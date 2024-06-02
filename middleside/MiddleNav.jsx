import React, { useState } from "react";
import { Box, Flex, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";

import NavItem from "../leftside/NavItem";
function MiddleNav({ device }) {
  const [open, setOpen] = useState(false);
  return (
    <Flex
      justifyContent={"space-between"}
      borderBottom={"1px solid gray"}
      py={"10px"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={999}
      bg={"white"}
      w={"auto"}
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
            top: "70px",
            left: 0,
            backgroundColor: "white",
            width: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "3",
            padding: "10px 0px",
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
      <Flex>
        <ButtonGroup>
          <Link to="/login">
            <Button bg={"black"} color={"white"} borderRadius={"20px"}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button bg={"black"} color={"white"} borderRadius={"20px"}>
              Signup
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}

export default MiddleNav;
