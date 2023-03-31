import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const BookmarksContainer = ({ readTime, bookmarks }) => {
  return (
    <div>
      {/* Total time spent section */}
      <div className="py-5 rounded-lg border-solid border-2 border-[#6047EC] bg-purple-100 mb-6">
        <h4 className="lg:text-xl font-bold text-[#6047EC]">
          Spent time on read : {readTime} min
        </h4>
      </div>

      {/* Bookmark Section */}
      <div className="rounded-lg bg-gray-100 lg:p-8 p-5">
        <h5 className="lg:text-xl font-bold text-left mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h5>

        {/* Bookmarks */}
        <div>
          {bookmarks.map((bookmark, index) => (
            <Bookmark key={index} title={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarksContainer;
