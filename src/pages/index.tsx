import Head from "next/head";
import Hero from "@/comps/Hero";
import Form from "@/comps/Form";
import { ContentPaper } from "@/comps/ContentPaper";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Green Nucleus</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ContentPaper />
    </>
  );
}
