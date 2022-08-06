import Head from "next/head";
import Homepage from "../components/Homepage";

export default function Home({ allBlogpost }) {
  return (
    <div>
      <Head>
        <title>Credit Union</title>
        <meta name="description" content="A Collection of Credit Union" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage allBlogpost={allBlogpost} />
    </div>
  );
}
