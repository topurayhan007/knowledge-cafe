import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = ({ blog, handleReadTime, handleBookmark }) => {
  // console.log(blog);
  const publishDate = blog.publishDate;

  const formatedDate = new Date(publishDate)
    .toLocaleString("default", { month: "short", day: "numeric" })
    .replace(/ /g, " ");
  const timeNow = new Date();
  const publish = new Date(publishDate);
  const difference = timeNow.getTime() - publish.getTime();
  const daysPassed = Math.ceil(difference / (1000 * 3600 * 24));

  return (
    <div>
      {/* Blog Image */}
      <img
        className="w-full object-cover rounded-lg"
        src={blog.blogCoverImg}
        alt=""
      />
      {/* Info Section */}
      <div className="flex items-center justify-between mt-8">
        {/* Author Info */}
        <div className="flex gap-6 items-center">
          <img
            className="md:w-14 w-12 md:h-14 h-12 object-cover rounded-full"
            src={blog.authorImg}
            alt="Profile Image"
          />
          <div className="flex flex-col text-left gap-2">
            <h4 className="md:text-2xl text-lg font-bold">{blog.authorName}</h4>
            <p className="text-gray-400">
              {" "}
              {formatedDate} ({daysPassed} Days ago)
            </p>
          </div>
        </div>

        {/* Blog duration and Bookmark */}
        <div>
          <p className="text-gray-400 text-lg">
            {blog.readTime / 10 < 1 ? "0" + blog.readTime : blog.readTime} min
            read{" "}
            <FontAwesomeIcon
              className="ml-2 fa-lg"
              onClick={() => handleReadTime(blog.readTime)}
              icon={faBookmark}
            />
          </p>
        </div>
      </div>
      <h3 className="md:text-4xl text-2xl font-bold text-left my-5">
        {blog.blogTitle}
      </h3>

      {/* Tags section */}
      <div className="flex gap-3 mb-5 text-gray-400 text-lg">
        {blog.tags.map((tag) => (
          <p>#{tag}</p>
        ))}
      </div>

      {/* Mark as read button */}
      <h6
        className="text-purple-500 underline underline-offset-2 hover:text-purple-400 cursor-pointer text-xl font-semibold text-left"
        onClick={() => handleBookmark(blog.blogTitle)}
      >
        Mark as read
      </h6>
      <hr className="border my-8" />
    </div>
  );
};

export default Blog;
