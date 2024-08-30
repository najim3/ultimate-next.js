import ProductList from "@/components/product-list";
import React from "react";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("could not get products data");
  }

  const data = await res.json();
  return data.products;
}

const ProductPage = async () => {
  const data = await getProducts();

  return (
    <div>
      <ProductList productsData={data} />
    </div>
  );
};

export default ProductPage;
