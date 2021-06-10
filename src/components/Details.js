import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedpost } from "../features/posts/postsSlice";
const Details = () => {
  const { postId } = useParams();
  const [postshere, setPostshere] = useState(selectedpost);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allposts);
  const selectedpostsingle = useSelector((state) => state.posts.selectedPost);
  const selectedPostArray = posts?.filter((post) => post._id === postId);

  useEffect(() => {
    dispatch(selectedpost(setPostshere(selectedPostArray[0])));
  }, [dispatch]);
  //console.log(postshere, "ffffff");
  return (
    <div>
      <div key={postshere._id}>
        {postshere.title} {postshere.message}
      </div>
    </div>
  );
};

export default Details;
