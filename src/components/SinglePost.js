import React from "react";
import { Link } from "react-router-dom";
const SinglePost = ({ rest, id }) => {
  // let history = useHistory();
  // function handleClick() {
  //   history.push(`/${rest._id}`);
  // }
  // console.log(rest);
  return (
    <Link to={`/details/${id}`}>
      <div className="post">
        <div className="post__title">{rest.title}</div>
        <div className="post__body">{rest.message}</div>
        <div className="post__body">{rest.date}</div>
      </div>
    </Link>
  );
};

export default SinglePost;
