import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import { Container } from "@chakra-ui/react";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <Navbar/>
      <Container as="main" maxWidth="7xl" p="5">
        {children}
      </Container>
    </>
  );
};

export default Layout;