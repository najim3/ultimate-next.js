import React from "react";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Post = async ({ searchParams }) => {
  const data = await getData();
  console.log("data:", data);

  console.log("searchParams from server component:", searchParams);
  console.log("searchParams from server component:", searchParams.search);

  return (
    <div>
      {data.posts.map((post, id) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
