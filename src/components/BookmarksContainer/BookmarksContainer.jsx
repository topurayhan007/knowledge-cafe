import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const BookmarksContainer = ({ readTime }) => {
  return (
    <div>
      {/* Total time spent section */}
      <div className="py-5 rounded-lg border-solid border-2 border-[#6047EC] bg-purple-100 mb-6">
        <h4 className="text-xl font-bold text-[#6047EC]">
          Spent time on read : {readTime} min
        </h4>
      </div>

      {/* Bookmark Section */}
      <div className="rounded-lg bg-gray-100 p-8">
        <h5 className="text-xl font-bold text-left mb-4">
          Bookmarked Blogs : 8
        </h5>

        {/* Bookmarks */}
        <div>
          <Bookmark></Bookmark>
          <Bookmark></Bookmark>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default BookmarksContainer;
