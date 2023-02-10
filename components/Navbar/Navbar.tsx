import React from 'react';
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <header>
      <Box
        as="nav" bg="mistyrose"
        p="4" color="dimgrey"
        fontSize="25px"
      >
        <Link href={'/'}>Blog app</Link>
      </Box>
    </header>
  );
};

export default Navbar;