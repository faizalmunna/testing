import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postsSlice";
const AddPost = () => {
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({
    _id: "",
    date: "",
    title: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost({
        title: formdata.title,
        message: formdata.message,
      })
    );
    setFormData({});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          type="text"
          value={formdata.name}
          onChange={(e) => setFormData({ ...formdata, title: e.target.value })}
        />
        <input
          placeholder="message"
          type="text"
          value={formdata.message}
          onChange={(e) =>
            setFormData({ ...formdata, message: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
