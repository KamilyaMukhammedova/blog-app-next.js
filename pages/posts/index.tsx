import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { ApiPost } from "@/types";
import PostCard from "@/components/PostCard/PostCard";

interface IProps {
  posts: ApiPost[]
}

const Posts: React.FC<IProps> = ({posts}) => {
  return (
    <>
      <Heading as="h6" mb="3" color="dimgrey">Posts</Heading>
      <Box maxWidth="600px">
        {posts.map(post => (
          <PostCard key={post.id} id={post.id} title={post.title}/>
        ))}
      </Box>
    </>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (content) => {
  const response = await axios.get<ApiPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');

  return {
    props: {
      posts: response.data
    }
  };
};