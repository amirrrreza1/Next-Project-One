import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductShow = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch product");
          }
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading)
    return <h1 className="text-center text-2xl leading-[200px]">Loading...</h1>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div
        style={{ height: `calc(100vh - 120px)` }}
        className="p-[20px] text-center max-w-[700px] m-auto"
      >
        <h1>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-[200px] m-auto my-5"
        />
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p className="line-clamp-3">
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating?.rate} (
          {product.rating?.count} reviews)
        </p>
      </div>
      <Link
        href="/products"
        className="text-white bg-red-700 p-1 rounded-md absolute top-[120px] left-5"
      >
        Get Back
      </Link>
    </>
  );
};

export default ProductShow;
