import Link from "next/link";
import { useRouter } from "next/router";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Company", path: "/about/company" },
  { name: "Products", path: "/products" },
];

const MainLayout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <header className="h-[60px] bg-blue-500 flex justify-between items-center px-3 text-white">
        <h1 className="text-xl">Project one</h1>
        <nav className="flex gap-3">
          {ROUTES.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              style={{ height: "60px", lineHeight: "60px", opacity: "0.6" }}
              className={
                path === route.path
                  ? "border-b-[2px] border-white !opacity-100"
                  : ""
              }
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </header>
      {children}
      <footer className="h-[60px] bg-blue-500 flex justify-center items-center text-white">
        <p>&copy; Created by Amirreza</p>
      </footer>
    </>
  );
};

export default MainLayout;
