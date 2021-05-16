import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button, Card, CardContent, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "580px",
    margin: "20px",
    height: "300px",
    background: "#fbfeff",

    float: "left",
  },
  title: {
    textTransform: "capitalize",
    marginBottom: "30px",
  },
  body: {
    color: "dimgray",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  button: {
    marginTop: "20px",
  },
});
const PostContent = (props) => {
  const { body, title, id } = props.post;

  const history = useHistory();
  const readButtonClick = (id) => {
    const url = `/posts/${id}`;
    history.push(url);
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          {id}. {title}
        </Typography>
        <Typography variant="body1" className={classes.body}>
          {body}
        </Typography>
        <Button
          onClick={() => readButtonClick(id)}
          mb={2}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostContent;
