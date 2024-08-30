import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProductList = ({ singleProductData }) => {
  return (
    <div className="m-4">
      <Link href={"/products"} className="hover:underline">
        Go back to Products
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full lg:static top-0 sm:flex gap-2">
            <Image
              src={singleProductData?.images[0]}
              alt={singleProductData?.name}
              width={"500"}
              height={"500"}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-gray-950">
              {singleProductData?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl">{singleProductData?.title}</p>
            </div>
            <div className="mt-5">
              <p className="text-2xl">${singleProductData?.price}</p>
            </div>
            <div className="mt-5">
              <p className="text-lg">Description</p>
              <p>{singleProductData?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductList;
