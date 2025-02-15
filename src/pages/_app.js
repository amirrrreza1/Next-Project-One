import MainLayout from "@/Components/Layout/MainLayout";
import SpecialLayout from "@/Components/Layout/SpecialLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const specialRoutes = ["/products" , `/products/[id]`];

  const Layout = specialRoutes.includes(router.pathname)
    ? SpecialLayout
    : MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
