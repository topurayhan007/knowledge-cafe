import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookmarksContainer from "../BookmarksContainer/BookmarksContainer";

const BlogsContainer = ({ showToastMessage }) => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadTime = (time) => {
    setReadTime(readTime + time);
    // console.log(time);
  };

  const handleBookmark = (title) => {
    // console.log(title);
    let newBookmark = [];
    const exists = bookmarks.find((bookmark) => bookmark === title);
    if (!exists) {
      newBookmark = [...bookmarks, title];
      setBookmarks(newBookmark);
    } else {
      // Show toast
      // console.log("already");
      showToastMessage();
    }
  };
  // console.log(bookmarks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Blogs Section */}
      <div className="md:col-span-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleReadTime={handleReadTime}
            handleBookmark={handleBookmark}
          ></Blog>
        ))}
      </div>
      {/* Bookmarks Section */}
      <div className="md:col-span-1">
        <BookmarksContainer
          readTime={readTime}
          bookmarks={bookmarks}
        ></BookmarksContainer>
      </div>
    </div>
  );
};

export default BlogsContainer;
