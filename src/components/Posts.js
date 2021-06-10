import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPostsAsync } from "../features/posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allposts);

  console.log(posts);
  useEffect(() => {
    dispatch(fetchAllPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <button>Add new </button>
      {posts?.map(({ _id, ...rest }) => (
        <SinglePost key={_id} rest={rest} id={_id} />
      ))}
    </div>
  );
};

export default Posts;
