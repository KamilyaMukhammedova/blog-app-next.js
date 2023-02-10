import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import { FullPostInfo } from "@/types";

const PostDetails: React.FC<FullPostInfo> = ({username, email, id, title, body}) => {
  return (
    <>
      <Heading as="h6" mb="3" color="dimgrey">Post # {id}</Heading>
      <Box p="6" rounded="lg" bg="mistyrose" color="grey">
        <Text mb="2" fontSize="sm">Username: {username} | email: {email}</Text>
        <Text mb="2">Title: {title}</Text>
        <Text mb="2" color="dimgrey" fontSize="lg" fontStyle="italic">{body}</Text>
      </Box>
    </>
  );
};

export default PostDetails;