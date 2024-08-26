"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SinglePost = () => {
  const params = useParams();
  console.log("params", params.postId);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      const data = await fetch(`https://dummyjson.com/posts/${params.postId}`);
      const post = await data.json();
      if (post?.title) {
        setPost(post);
        setLoading(false);
      }
    } catch (error) {
      setPost([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return <div>{post?.title && <div>{post?.title} </div>}</div>;
};

export default SinglePost;
