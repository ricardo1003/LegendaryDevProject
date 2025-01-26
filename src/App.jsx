import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-[100vh] bg-cover text-white flex flex-col" style={{backgroundImage:"url(https://4kwallpapers.com/images/walls/thumbs_3t/2562.jpg)"}}>
      <div className="background bg-[hsl(282,73%,5%)] block absolute w-[100vw] h-[100vh] z-[1] opacity-95"/>
      <div className="background from-white/10 bg-gradient-to-t block absolute bottom-0 w-[100vw] h-[25vh] z-[1] opacity-95"/>
      <header className=" flex items-center fixed w-full backdrop:blur-2xl px-16 gap-2 h-22 border-white/50 border-b-1 bg-custom-purple-4 z-10">
        <picture>
          <img src="#" alt="logo" />
        </picture>
        <nav className="ml-auto">
          <ol className="flex gap-2 text-blue-200">
            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 2</a>
            </li>
            <li>
              <a href="#">link 3</a>
            </li>
            <li>
              <a href="#">link 4</a>
            </li>
            <li>
              <a href="#">link 5</a>
            </li>
            <li>
              <a href="#">link 6</a>
            </li>
          </ol>
        </nav>
        <button className="bg-[#8594e4] py-2 px-4 rounded-md">
          GET STARTED
        </button>
      </header>
      <main className="flex items-center justify-center h-[100vh] pt-22 gap-15 z-10">
        <section className="w-75 flex flex-col gap-4">
          <h1 className="text-6xl font-bold capitalize">Lorem ipsum dolor sit</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui corrupti ex debitis pariatur deserunt. </p>
          <div className="flex justify-between gap-4 px-4 text-[hsl(282,73%,5%)]">
            <button className="bg-blue-300 rounded-md px-4 py-2">create account</button>
            <button className="bg-blue-300 rounded-md px-4 py-2">learn more</button>
          </div>
        </section>
        <picture className="max-w-150"><img src="https://i.ytimg.com/vi/kkBgqTXLgTw/maxresdefault.jpg" alt="investiment" /></picture>
      </main>
    </div>
  );
}

export default App;
