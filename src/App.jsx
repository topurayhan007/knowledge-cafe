import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import BlogsContainer from "./components/BlogsContainer/BlogsContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showToastMessage = () => {
    toast.warning("You have already bookmarked this blog!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="App md:px-0 px-2">
      <Header></Header>
      <BlogsContainer showToastMessage={showToastMessage}></BlogsContainer>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
