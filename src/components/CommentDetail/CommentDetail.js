import React from "react";
import { Card, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  card: {
    display: "flex",
    padding: "12px",
    margin: "15px",
    alignItems: "center",
  },
});
const CommentDetail = (props) => {
  const { email, body } = props.comment;
  const picture = props.user
 
  const classes = useStyles();
 
  return (
    <>
      <Card className={classes.card}>  
           <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}     //img random prooblem future update it
            src={picture.medium}
            alt="img"
          />       
        <div style={{ margin: "10px" }}>
          <p>{email}</p>
          <p>{body}</p>
        </div>
      </Card>
    </>
  );
};

export default CommentDetail;
