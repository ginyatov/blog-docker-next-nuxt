import { ChakraProvider } from "@chakra-ui/react";
import { themeChackra } from "@theme/index";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import LayoutWrapper from "../layouts";
import GlobalStore from "@store/store";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStore>
        <ChakraProvider theme={themeChackra}>
          <LayoutWrapper type={pageProps.layout || "default"}>
            <Component {...pageProps} key={router.route} />
          </LayoutWrapper>
        </ChakraProvider>
      </GlobalStore>
    </QueryClientProvider>
  );
}

export default MyApp;
