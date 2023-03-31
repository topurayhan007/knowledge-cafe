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
      <div className="flex md:flex-row sm:flex-col items-center md:gap-0 gap-2 justify-between md:mt-8 mt-4">
        {/* Author Info */}
        <div className="flex gap-6 items-center">
          <img
            className="md:w-14 w-12 md:h-14 h-12 object-cover rounded-full"
            src={blog.authorImg}
            alt="Profile Image"
          />
          <div className="flex flex-col text-left gap-2">
            <h4 className="lg:text-2xl md:text-xl text-lg font-bold">
              {blog.authorName}
            </h4>
            <p className="text-gray-400 md:text-base text-sm">
              {formatedDate} ({daysPassed} Days ago)
            </p>
          </div>
        </div>

        {/* Blog duration and Bookmark */}
        <div className="">
          <p className="text-gray-400 lg:text-lg text-base">
            {blog.readTime / 10 < 1 ? "0" + blog.readTime : blog.readTime} min
            read{" "}
            <FontAwesomeIcon
              className="md:ml-2 sm:ml-4 ml-2 fa-lg"
              onClick={() => handleBookmark(blog.blogTitle)}
              icon={faBookmark}
            />
          </p>
        </div>
      </div>
      <h3 className="lg:text-4xl md:text-2xl text-xl font-bold text-left md:my-5 my-3">
        {blog.blogTitle}
      </h3>

      {/* Tags section */}
      <div className="flex gap-3 md:mb-5 mb-3 text-gray-400 lg:text-lg md:text-base">
        {blog.tags.map((tag) => (
          <p>#{tag}</p>
        ))}
      </div>

      {/* Mark as read button */}
      <h6
        className="text-purple-500 underline underline-offset-2 hover:text-purple-400 cursor-pointer lg:text-xl md:text-lg font-semibold text-left"
        onClick={() => handleReadTime(blog.readTime)}
      >
        Mark as read
      </h6>
      <hr className="border md:my-8 my-5" />
    </div>
  );
};

export default Blog;
