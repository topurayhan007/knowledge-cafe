import React from "react";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      {/* Blog Image */}
      <img
        className="w-full object-cover rounded-lg"
        src="https://t4.ftcdn.net/jpg/02/18/74/91/360_F_218749112_UsyOUMEp3R2Gfmp481PrC2lA22y2G7hb.webp"
        alt=""
      />
      {/* Info Section */}
      <div className="flex items-center justify-between mt-8">
        {/* Author Info */}
        <div className="flex gap-6 items-center">
          <img
            className="md:w-14 w-12 md:h-14 h-12 object-cover rounded-full"
            src="profile-pic.jpg"
            alt="Profile Image"
          />
          <div className="flex flex-col text-left gap-2">
            <h4 className="md:text-2xl text-lg font-bold">{blog.authorName}</h4>
            <p className="text-gray-400">Mar 14 (4 Days ago)</p>
          </div>
        </div>

        {/* Blog duration and Bookmark */}
        <div>
          <p className="text-gray-400 text-lg">
            {blog.readTime / 10 < 1 ? "0" + blog.readTime : blog.readTime} min
            read
          </p>
        </div>
      </div>
      <h3 className="md:text-4xl text-2xl font-bold text-left my-5">
        How to get your first job as a self-taught programmer
      </h3>

      {/* Tags section */}
      <div className="flex gap-3 mb-5 text-gray-400 text-lg">
        <p>#beginners</p>
        <p>#beginners</p>
      </div>

      {/* Mark as read button */}
      <h6 className="text-purple-500 underline underline-offset-2 hover:text-purple-400 cursor-pointer text-xl font-semibold text-left">
        Mark as read
      </h6>
      <hr className="border my-8" />
    </div>
  );
};

export default Blog;
