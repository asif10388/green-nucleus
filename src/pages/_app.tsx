import "../styles/globals.css";

import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "@/comps/Header";
import Footer from "@/comps/Footer";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          nucleus: [`#32CD32`],
        },
      }}
    >
      <HeaderSimple
        links={[
          { link: "/", label: "Home" },
          { link: "/mission", label: "Our Mission" },
          { link: "/register", label: "Register" },
        ]}
      />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}

// #00FF00 (Bright Green)
// #32CD32 (Lime Green)
// #006400 (Dark Green)
// #00FF7F (Spring Green)
