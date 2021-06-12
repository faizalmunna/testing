import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPostsAsync } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allposts);

  //console.log(posts);
  useEffect(() => {
    dispatch(fetchAllPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <Link to="/addpost">Add new </Link>
      {posts?.map(({ _id, ...rest }) => (
        <SinglePost key={_id} rest={rest} id={_id} />
      ))}
    </div>
  );
};

export default Posts;
