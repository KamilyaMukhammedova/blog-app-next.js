import React from 'react';
import { GetStaticProps } from "next";
import axios from "axios";
import { ApiPost } from "@/types";
import AllPosts from "@/components/AllPosts/AllPosts";

interface IProps {
  posts: ApiPost[]
}

const Posts: React.FC<IProps> = ({posts}) => {
  return (
    <AllPosts apiPosts={posts}/>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get<ApiPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');

  return {
    props: {
      posts: response.data
    }
  };
};