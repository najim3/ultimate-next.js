import React from "react";

const SinglePage = ({ params }) => {
  console.log("params from server component:", params);
  console.log("params from server component:", params.postId);

  return <div>SinglePage</div>;
};

export default SinglePage;
