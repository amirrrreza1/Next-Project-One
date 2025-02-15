import Head from "next/head";

const Company = () => {
  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <h1
        className="text-2xl font-bold text-center p-4 flex justify-center items-center"
        style={{ height: `calc(100vh - 120px)` }}
      >
        This is the Company page
      </h1>
    </>
  );
};

export default Company;
