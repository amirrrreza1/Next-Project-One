import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="w-[90%] max-w-[800px] m-auto"
        style={{ direction: "rtl", height: `calc(100vh - 120px)` }}
      >
        <h1 className="text-2xl font-bold text-center p-4 flex justify-center items-center">
          پروژه جلسه اول{" "}
        </h1>
        <p className="mt-5 mb-2">این پروژه شامل 5 صفحه زیر است :</p>
        <ul className="list-disc list-inside mb-5">
          <li>صفحه اصلی (Home)</li>
          <li>صفحه درباره ما (About)</li>
          <li>زیر صفحه درباره ما (About/Company)</li>
          <li>محصولات (Products)</li>
          <li>صفحه محصول با آیدی (Products/[id])</li>
        </ul>
        <p>
          برای این پروژه 2 Layout جداگانه صراحی شده که Layout اصلی در صفحات زیر
          قابل مشاهده است
        </p>
        <ul className="list-disc list-inside mb-5 mt-2">
          <li>
            <Link href="/" className="opacity-50 hover:opacity-100">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="opacity-50 hover:opacity-100">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/about/company"
              className="opacity-50 hover:opacity-100"
            >
              About/Company
            </Link>
          </li>
        </ul>
        <p>و Layout مخصوصی برای صفحه محصولات و صفحه محصول با آیدی است</p>
        <ul className="list-disc list-inside mb-5 mt-2">
          <li>
            <Link href="/products" className="opacity-50 hover:opacity-100">
              Products
            </Link>
          </li>
          <li>
            <Link href="/products/1" className="opacity-50 hover:opacity-100">
              {" "}
              Products/1
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
