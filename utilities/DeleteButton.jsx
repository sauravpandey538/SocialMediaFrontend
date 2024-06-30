import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";

// Function to handle deleting posts
async function deletePosts() {
  try {
    const response = await axios.delete(
      "https://socialmediabackend-uwpt.onrender.com/delete/posts",
      {
        withCredentials: true,
      }
    ); // Adjust the URL as needed
    console.log("Posts deleted:", response.data);
  } catch (error) {
    console.error("Error deleting posts:", error);
  }
}

// Function to handle deleting account
async function deleteAccount() {
  try {
    const response = await axios.delete(
      "https://socialmediabackend-uwpt.onrender.com/delete/account",
      { withCredentials: true }
    ); // Adjust the URL as needed
    console.log("Account deleted:", response.data);
  } catch (error) {
    console.error("Error deleting account:", error);
  }
}

export function DeleteButtonForPost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleDelete = async () => {
    await deletePosts();
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Delete Posts
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Posts
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? All your posts will be deleted.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export function DeleteButtonForAccount() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  const handleDelete = async () => {
    await deleteAccount();
    onClose();
    navigate("/signup");
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Delete Account
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? Your account will be removed from this website
              permanently.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
