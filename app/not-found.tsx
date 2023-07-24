import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const metaData = { 
  title : 'Goodcode | Not Found', 
  keyword : 'not found' 
};

const NotFound = () => {

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="keywords" content={metaData.keyword} />
      </Head>
      <main className="main flex flex-col gap-5 justify-center items-center transform -translate-y-20">
        <h1 className="font-bold text-2xl">Oooopps...</h1>
        <p>That page cannot be found.</p>
        <p>Go back to the <Link href={'/'}> <span className="text-blue-500 underline hover:text-blue-700 active:text-blue-900">Hompage</span> </Link></p>
      </main>
    </>
  );
}

export default NotFound;

