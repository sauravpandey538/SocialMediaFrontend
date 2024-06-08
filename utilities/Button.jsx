import React from "react";
import { Button } from "@chakra-ui/react";

export default function CustomizedButton({ text, icon, loading }) {
  return (
    <Button
      w={"100%"} // changed
      bg={"black"}
      color={"white"}
      borderRadius={"20px"}
      rightIcon={icon}
      isLoading={loading}
    >
      {text}
    </Button>
  );
}
