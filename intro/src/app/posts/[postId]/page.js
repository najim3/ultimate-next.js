"use client";
import React, { useEffect, useState } from "react";

const SinglePost = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      const data = await fetch("https://dummyjson.com/posts/1");
      const post = await data.json();
      console.log("post", post);
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, []);
  return <div>SinglePost</div>;
};

export default SinglePost;
