const ProductData = async () => {
  const res = await fetch("http://localhost:3000/product.json", {
    cache: "no-store", // Prevent caching in development
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await res.json();

  return <div>{products.length}</div>;
};

export default ProductData;
