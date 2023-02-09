import React from 'react';
import { Box, Text } from "@chakra-ui/react";

interface IProps {
  id: number,
  title: string
}

const PostCard:React.FC<IProps> = ({id, title}) => {
  return (
    <Box p="6" mb="4" rounded="lg" bg="dimgrey" color="white">
      <Text>Post number: {id}</Text>
      <Text>{title}</Text>
    </Box>
  );
};

export default PostCard;