import Link from "next/link";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1 className="text-center text-2xl leading-[200px]">Loading...</h1>;
  }

  return (
    <div>
      <ul className=" flex flex-wrap justify-center items-center gap-4 p-4">
        {products.map((product) => (
          <li
            className="w-[90%] sm:w-[45%] lg:w-[20%] border-gray-500 border-[1px] shadow-md p-3 rounded-md flex flex-col items-center justify-center"
            key={product.id}
          >
            <h2 className="line-clamp-1 mb-2">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              className="h-[120px] w-[100px] object-fill my-3"
            />
            <p className="line-clamp-3 my-3">{product.description}</p>
            <div className="w-full my-2 flex justify-between items-center text-sm">
              <p className="bg-green-500 p-1 rounded-md">{product.price} $</p>
              <p className="bg-yellow-500 p-1 rounded-md">
                {product.rating.rate} Stars
              </p>
            </div>
            <Link
              href={`/products/${product.id}`}
              className="text-sm p-2 bg-blue-300 rounded-md"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
