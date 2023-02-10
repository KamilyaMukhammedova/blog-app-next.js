import React from 'react';
import { GetServerSideProps } from "next";
import axios from "axios";
import { ApiPost, ApiUser, FullPostInfo } from "@/types";
import PostDetails from "@/components/PostDetails/PostDetails";

interface IProps {
  post: FullPostInfo
}

const Post: React.FC<IProps> = ({post}) => {
  console.log(post)
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

export const getServerSideProps: GetServerSideProps<{ post: FullPostInfo }> = async (context) => {
  const postId = context.params?.id as string;
  const postFullInfo: FullPostInfo = {
    username: '',
    email: '',
    id: parseInt(postId),
    title: '',
    body: ''
  };

  try {
    const postResponse = await axios.get<ApiPost | null>('https://jsonplaceholder.typicode.com/posts/' + postId);
    if (postResponse.data) {
      const userId = postResponse.data.userId;
      const userResponse = await axios.get<ApiUser | null>('https://jsonplaceholder.typicode.com/users/' + userId);

      postFullInfo.username = userResponse.data ? userResponse.data.username : 'No user';
      postFullInfo.email = userResponse.data ? userResponse.data.email : 'No email';
      postFullInfo.title = postResponse.data.title;
      postFullInfo.body = postResponse.data.body;
    }
  } catch (e) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: postFullInfo
    }
  }
};
