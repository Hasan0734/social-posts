import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentDetail from "../CommentDetail/CommentDetail";
const Comment = () => {
  const { postId } = useParams();
  const commnetStyle = {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "10px",
  };
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  
  let userImg = {};
  for (let i = 0; i < users.length; i++) {
      const images = users[i];
      userImg = images.picture;

  }

  return (
    <div style={commnetStyle}>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <CommentDetail comment={comment} user={userImg}></CommentDetail>
      ))}
    </div>
  );
};

export default Comment;
