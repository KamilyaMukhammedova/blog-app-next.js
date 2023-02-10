import React from 'react';
import Link from "next/link";
import { Box, Button, Divider, Text } from "@chakra-ui/react";

interface IProps {
  id: number,
  title: string
}

const PostCard:React.FC<IProps> = ({id, title}) => {
  return (
    <Box p="6" mb="4" rounded="lg" bg="dimgrey" color="white">
      <Text>Post # {id}</Text>
      <Divider/>
      <Text mb="3" mt="3" fontSize="lg">{title}</Text>
      <Link href={'/posts/' + id}>
        <Button variant="outline" colorScheme="whiteAlpha">See details</Button>
      </Link>
    </Box>
  );
};

export default PostCard;