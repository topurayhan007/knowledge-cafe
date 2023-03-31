import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookmarksContainer from "../BookmarksContainer/BookmarksContainer";

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Blogs Section */}
      <div className="md:col-span-2">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      {/* Bookmarks Section */}
      <div className="md:col-span-1">
        <BookmarksContainer></BookmarksContainer>
      </div>
    </div>
  );
};

export default BlogsContainer;
