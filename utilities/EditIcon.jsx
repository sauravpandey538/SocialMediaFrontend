import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { Box, Card, Flex, Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";

function EditIcon({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        boxSize={"30px"}
        bg={open ? "transparent" : ""}
        cursor={"pointer"}
      >
        <GrEdit onClick={() => setOpen(!open)} />
      </Box>
      {open && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          boxSize={"50px"}
          bg={"rgba(0, 0, 0, 0.7)"}
          h={"100%"}
          w={"100%"}
          zIndex={1000}
          position={"fixed"}
          top={0}
          left={0}
        >
          <Card
            h={"md"}
            w={"sm"}
            border={"2px solid black"}
            display={"flex"}
            direction={"column"}
            p={"15px"}
            justifyContent={"space-between"}
          >
            <Flex justifyContent="end">
              {" "}
              <MdCancel onClick={() => setOpen(!open)} />
            </Flex>
            {children}
          </Card>
        </Box>
      )}
    </>
  );
}

export default EditIcon;
