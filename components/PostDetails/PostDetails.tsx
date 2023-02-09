import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

interface IProps {
  username?: string,
  email?: string,
  id: number,
  title: string,
  body: string
}

const PostDetails: React.FC<IProps> = ({username, email, id, title, body}) => {
  return (
    <>
      <Heading as="h6" mb="3" color="dimgrey">Post number: {id}</Heading>
      <Box p="6" rounded="lg" bg="mistyrose" color="grey">
        {
          (username && email) &&
            <Text mb="2">{username} / {email}</Text>
        }
          <Text mb="2">{title}</Text>
          <Text mb="2" color="dimgrey" fontSize="lg">{body}</Text>
      </Box>
    </>
  );
};

export default PostDetails;