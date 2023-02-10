import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import AllPosts from "@/components/AllPosts/AllPosts";
import { ApiPost } from "@/types";
import Head from "next/head";

interface IProps {
  posts: ApiPost[]
}

const Home: React.FC<IProps> = ({posts}) => {
  return (
    <>
      <Head>
        <title>Blog app</title>
        <meta name="keywords" content="blog-app, next.js"/>
      </Head>
      <AllPosts apiPosts={posts}/>
    </>
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
