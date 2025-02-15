import Link from "next/link";
import { useRouter } from "next/router";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Company", path: "/about/company" },
  { name: "Products", path: "/products" },
];

const SpecialLayout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <header className="h-[60px] bg-red-500 flex justify-between items-center px-3 text-white sticky top-0">
        <Link href="/" className="text-xl bg-blue-900 p-1 rounded-md">
          Home Page
        </Link>
      </header>
      {children}
      <footer className="h-[60px] bg-red-500 flex justify-center items-center text-white">
        <p>&copy; Created by Amirreza</p>
      </footer>
    </>
  );
};

export default SpecialLayout;
