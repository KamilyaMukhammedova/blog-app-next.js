import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import { FullPostInfo } from "@/types";

const PostDetails: React.FC<FullPostInfo> = ({username, email, id, title, body}) => {
  return (
    <>
      <Heading as="h6" mb="3" color="dimgrey">Post number: {id}</Heading>
      <Box p="6" rounded="lg" bg="mistyrose" color="grey">
        <Text mb="2">Username: {username} | email: {email}</Text>
        <Text mb="2">{title}</Text>
        <Text mb="2" color="dimgrey" fontSize="lg">{body}</Text>
      </Box>
    </>
  );
};

export default PostDetails;