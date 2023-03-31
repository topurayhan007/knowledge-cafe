import React from "react";

const Bookmark = ({ title }) => {
  return (
    <div>
      <div className="bg-white rounded-lg text-left p-5 font-semibold mb-4">
        <h4 className="text-lg">{title}</h4>
      </div>
    </div>
  );
};

export default Bookmark;
