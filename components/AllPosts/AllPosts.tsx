import React, { useState } from 'react';
import ReactPaginate from "react-paginate";
import { Box, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ApiPost } from "@/types";
import PostCard from "@/components/PostCard/PostCard";
import styles from '../../styles/AllPosts.module.css';

interface IProps {
  apiPosts: ApiPost[]
}

const AllPosts: React.FC<IProps> = ({apiPosts}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = apiPosts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(apiPosts.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % apiPosts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Heading as="h6" mb="3" color="dimgrey">Posts</Heading>
      <Box maxWidth="600px">
        {currentItems.map(post => (
          <PostCard key={post.id} id={post.id} title={post.title}/>
        ))}
      </Box>
      <ReactPaginate
        activeClassName={`${styles.item} ${styles.active}`}
        breakClassName={`${styles.item} ${styles.breakMe}`}
        breakLabel="..."
        containerClassName={styles.pagination}
        disabledClassName={styles.disabledPage}
        marginPagesDisplayed={2}
        nextClassName={`${styles.item} ${styles.next}`}
        nextLabel={<ArrowRightIcon w={3} h={3} color="grey"/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageClassName={`${styles.item} ${styles.paginationPage}`}
        pageCount={pageCount}
        previousClassName={`${styles.item} ${styles.previous}`}
        previousLabel={<ArrowLeftIcon w={3} h={3} color="grey"/>}
      />
    </>
  );
};

export default AllPosts;

