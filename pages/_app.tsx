import type { AppProps } from 'next/app';
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { ChakraProvider, CircularProgress } from "@chakra-ui/react";
import Layout from "@/components/Layout/Layout";


export default function App({Component, pageProps}: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ChakraProvider>
      <Layout>
        {loading ?
          <CircularProgress isIndeterminate color='grey'/> :
          <Component {...pageProps} />
        }
      </Layout>
    </ChakraProvider>
  );
};
