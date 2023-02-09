import React from 'react';
import { GetServerSideProps } from "next";
import axios from "axios";
import { ApiPost, ApiUser, FullPostInfo } from "@/types";
import PostDetails from "@/components/PostDetails/PostDetails";

interface IProps {
  post: FullPostInfo
}

const Post: React.FC<IProps> = ({post}) => {
  return (
    <>
      <PostDetails
        username={post.username}
        email={post.email}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postId = context.params?.id as string;

  const postResponse = await axios.get<ApiPost | null>('https://jsonplaceholder.typicode.com/posts/' + postId);

  if (postResponse.data) {
    const userId = postResponse.data.userId;
    const userResponse = await axios.get<ApiUser | null>('https://jsonplaceholder.typicode.com/users/' + userId);

    if (userResponse.data) {
      const postFullInfo: FullPostInfo = {
        username: userResponse.data.username,
        email: userResponse.data.email,
        id: postResponse.data.id,
        title: postResponse.data.title,
        body: postResponse.data.body,
      };
      return {
        props: {
          post: postFullInfo
        }
      };
    }
  } else {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: postResponse.data
    }
  }
};