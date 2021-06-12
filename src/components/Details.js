import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedpost } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";
const Details = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.allposts);
  const selectedpostsingle = useSelector((state) => state.posts.selectedPost);
  const [postshere, setPostshere] = useState(selectedpostsingle);
  const selectedPostArray = posts?.filter((post) => post._id === postId);

  useEffect(() => {
    dispatch(selectedpost(selectedPostArray[0]));
  }, [dispatch]);
  //console.log(postId, "ffffff");
  return (
    <div>
      <Link to="/">back</Link>
      <Link to="/addpost">add a post</Link>
      <div key={selectedpostsingle._id}>
        {selectedpostsingle.title} {selectedpostsingle.message}
      </div>
    </div>
  );
};

export default Details;
