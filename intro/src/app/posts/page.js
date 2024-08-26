import React from "react";

const Post = ({ searchParams }) => {
  console.log("searchParams from server component:", searchParams);
  console.log("searchParams from server component:", searchParams.search);

  return <div>Post</div>;
};

export default Post;
