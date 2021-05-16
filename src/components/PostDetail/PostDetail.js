import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { CardContent, makeStyles } from "@material-ui/core";
import Comment from "../Comments/Comment";

const useStyles = makeStyles({
  container: {
    background: "#fff",
  },
  title: {
    textTransform: "capitalize",
    marginBottom: "30px",
  },
  body: {
    "&::first-letter": {
      textTransform: "uppercase",
    },
    width: "700px",
  },
});
const PostDetail = () => {
  const { postId } = useParams();
  const classes = useStyles();

  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  const { title, body,} = post;
  return (
    <div>
      <CssBaseline />
      <Container className={classes.container}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {body}
          </Typography>
        </CardContent>
        <Comment></Comment>
      </Container>
    </div>
  );
};

export default PostDetail;
