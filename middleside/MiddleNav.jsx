import React from "react";
import { Box, Flex, Button, ButtonGroup, Text } from "@chakra-ui/react";
function MiddleNav() {
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
    >
      <Text fontSize={"25px"} fontWeight={700} color={"gray.700"}>
        Feeds
      </Text>
      <Flex>
        <ButtonGroup>
          <Button bg={"black"} color={"white"} borderRadius={"20px"}>
            Login
          </Button>
          <Button bg={"black"} color={"white"} borderRadius={"20px"}>
            Signup
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}

export default MiddleNav;
