import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className=" flex items-center backdrop:blur-2xl px-16 gap-2 h-15 border-black/50 border-b-1">
        <picture>
          <img src="#" alt="logo" />
        </picture>
        <nav className="ml-auto">
          <ol className="flex gap-2 text-blue-700">
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
            <li><a href="#">link 4</a></li>
            <li><a href="#">link 5</a></li>
            <li><a href="#">link 6</a></li>
          </ol>
        </nav>
        <button className="bg-[#8594e4] py-2 px-4 rounded-md">GET STARTED</button>
      </header>
    </>
  );
}

export default App;
