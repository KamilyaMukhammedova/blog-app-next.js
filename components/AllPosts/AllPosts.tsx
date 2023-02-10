import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import { ApiPost } from "@/types";
import PostCard from "@/components/PostCard/PostCard";

interface IProps {
  apiPosts: ApiPost[]
}

const AllPosts: React.FC<IProps> = ({apiPosts}) => {
  return (
    <>
      <Heading as="h6" mb="3" color="dimgrey">Posts</Heading>
      <Box maxWidth="600px">
        {apiPosts.map(post => (
          <PostCard key={post.id} id={post.id} title={post.title}/>
        ))}
      </Box>
    </>
  );
};

export default AllPosts;

