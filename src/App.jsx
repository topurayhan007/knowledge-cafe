import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import BlogsContainer from "./components/BlogsContainer/BlogsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App md:px-0 px-2">
      <Header></Header>
      <BlogsContainer></BlogsContainer>
    </div>
  );
}

export default App;
