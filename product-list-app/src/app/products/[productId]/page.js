import SingleProductList from "@/components/product-list/single-product-list";
import React from "react";

async function getProduct(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!res.ok) {
    throw new Error("could not get product");
  }

  const data = await res.json();
  return data;
}

const SingleProductPage = async ({ params }) => {
  const data = await getProduct(params?.productId);
  console.log("data: ", data);

  return (
    <div>
      <SingleProductList singleProductData={data} />
    </div>
  );
};

export default SingleProductPage;
