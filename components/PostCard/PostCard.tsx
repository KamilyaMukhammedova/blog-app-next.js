import React from 'react';
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  id: number,
  title: string
}

const PostCard:React.FC<IProps> = ({id, title}) => {
  return (
    <Box p="6" mb="4" rounded="lg" bg="dimgrey" color="white">
      <Text>Post number: {id}</Text>
      <Text mb="3">{title}</Text>
      <Link href={'/posts/' + id}>
        <Button variant="outline" colorScheme="whiteAlpha">See details</Button>
      </Link>
    </Box>
  );
};

export default PostCard;