import { GetStaticProps } from "next";
import axios from "axios";
import { ApiPost } from "@/types";
import AllPosts from "@/components/AllPosts/AllPosts";
import React from "react";

interface IProps {
  posts: ApiPost[]
}

const Home: React.FC<IProps> = ({posts}) => {
  return (
    <AllPosts apiPosts={posts}/>
  );
};

export const getStaticProps: GetStaticProps<{ posts: ApiPost[] }> = async (context) => {
  const response = await axios.get<ApiPost[]>('https://jsonplaceholder.typicode.com/posts');

  return {
    props: {
      posts: response.data
    }
  };
};

export default Home;
