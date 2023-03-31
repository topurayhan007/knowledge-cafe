import React from "react";

const Bookmark = ({ title }) => {
  return (
    <div>
      <div className="bg-white rounded-lg text-left lg:p-5 p-3 font-semibold mb-4">
        <h4 className="lg:text-lg">{title}</h4>
      </div>
    </div>
  );
};

export default Bookmark;
