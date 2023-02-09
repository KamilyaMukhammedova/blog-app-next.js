import React from 'react';
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header>
      <Box
        as="nav" bg="gray.700"
        p="4" color="white"
      >
        <Link href={'/'}>Blog app</Link>
      </Box>
    </header>
  );
};

export default Navbar;