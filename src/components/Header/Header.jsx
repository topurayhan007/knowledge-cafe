import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between md:py-7 py-3 ">
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          Knowledge Cafe
        </h3>
        <img
          className="md:w-14 w-12 md:h-14 h-12 object-cover rounded-full"
          src="profile-pic.jpg"
          alt="Profile Image"
        />
      </nav>
      <hr className="border" />
    </div>
  );
};

export default Header;
