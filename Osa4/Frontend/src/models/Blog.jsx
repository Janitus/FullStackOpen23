import React from 'react';
import { useState } from 'react';

const Blog = ({ blog }) => {
  const [likes, setLikes] = useState(blog.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h2>{blog.title}<span> by {blog.author}</span></h2>
      <p>{blog.url}</p>
      <p>{likes} <button onClick={handleLike}>Like</button></p>
    </div>
  );
}

export default Blog;