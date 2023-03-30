import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-7">
        <h3 className="text-4xl font-bold">Knowledge Cafe</h3>
        <img
          className="w-14 h-14 object-cover rounded-full"
          src="profile-pic.jpg"
          alt="Profile Image"
        />
      </nav>
      <hr className="border" />
    </div>
  );
};

export default Header;
