import React, { useEffect, useState } from "react";
import PostContent from "../PostContent/PostContent";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      {posts.map((post) => (
        <PostContent post={post}></PostContent>
      ))}
    </>
  );
};

export default Home;
