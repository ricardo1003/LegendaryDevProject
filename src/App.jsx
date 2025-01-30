import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ControlPanel from './components/ControlPanel'
import "./App.css";

function App() {
  const [graphValues, setGraphValues] = useState([
    {
      posX: 0,
      posY: 0,
    },
    {
      posX: 0,
      posY: 0,
    },
    {
      posX: 0,
      posY: 0,
    },
  ]);

  for (let i = 0; i < graphValues.length; i++) {
    let newGraphValues = [
      {
        posX: `${(100 / (graphValues.length-1)) * i}%`,
        posY: 0,
      },
    ];
    console.log(newGraphValues);
  }

  return (
    <div
      className="min-h-[100vh] bg-cover text-white flex flex-col font-Montserrat"
      style={{
        backgroundImage:
          "url(https://4kwallpapers.com/images/walls/thumbs_3t/2562.jpg)",
      }}
    >
      <div className="background bg-[hsl(282,73%,5%)] block absolute w-[100vw] h-[100vh] z-[1] opacity-95" />
      <div className="background from-[hsla(282,73%,70%,0.2)] bg-gradient-to-t block absolute bottom-0 w-[100vw] h-[25vh] z-[1] opacity-95" />
      <header className=" flex items-center fixed w-full backdrop:blur-2xl px-16 gap-2 h-22 border-white/50 border-b-1 bg-custom-purple-4 z-10">
        <picture>
          <img src="#" alt="logo" />
        </picture>
        <nav className="ml-auto">
          <ol className="flex gap-5 text-blue-200 font-bold">
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
        <button className="from-[hsl(282,73%,40%)] to-[#420e58] bg-gradient-to-br py-2 px-4 rounded-md ml-7 font-medium">
          GET STARTED
        </button>
      </header>
      <main className="flex items-center justify-center h-[100vh] pt-22 gap-15 z-10">
        <section className="w-75 flex flex-col gap-4">
          <h1 className="text-6xl font-bold capitalize">Nigga Traders</h1>
          <p className="text-white/75">
            The best investing website for the best of the unemployed nigerians.
            Are you ready to NiggaTrade?{" "}
          </p>
          <div className="flex justify-between gap-3 px-1 text-[hsl(282,73%,99%)]">
            <button className="from-[#2af5ff] to-[#3066be] bg-gradient-to-br rounded-md px-4 py-2 font-medium">
              create account
            </button>
            <button className="from-[#f5feff] to-[#a1bce8] bg-gradient-to-br rounded-md px-4 py-2 font-medium bg-[hsl(148,98%,20%)] text-[#3066be]">
              learn more
            </button>
          </div>
        </section>
        <section className="max-w-150 flex">
          <div className="flex flex-col justify-end">
            <p className="text-white/50 flex flex-col">
              <b className="text-[hsl(356,92%,53%)] text-2xl drop-shadow-[0_0px_3px_hsla(356,92%,53%,1)] ">
                +136%
              </b>{" "}
              niggers investing
            </p>
            <picture
              style={{
                backgroundColor: "#d80e0e",
              }}
            >
              <img
                src="https://i.ytimg.com/vi/kkBgqTXLgTw/maxresdefault.jpg"
                alt="investiment"
              />
            </picture>
          </div>
          <div className="flex flex-col">
            <p className="text-white/50 flex flex-col">
              <b className="text-[hsl(148,98%,40%)] text-2xl drop-shadow-[0_0px_3px_hsla(148,98%,40%,1)]">
                +43%
              </b>{" "}
              gains worldwide
            </p>
            <picture>
              <img
                src="https://i.ytimg.com/vi/kkBgqTXLgTw/maxresdefault.jpg"
                alt="investiment"
              />
            </picture>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-white/50 flex flex-col">
              <b className="text-[hsl(227,76%,55%)] text-2xl drop-shadow-[0_0px_3px_hsla(227,76%,55%,1)]">
                +69%
              </b>{" "}
              woah thats a big number
            </p>
            <picture>
              <img
                src="https://i.ytimg.com/vi/kkBgqTXLgTw/maxresdefault.jpg"
                alt="investiment"
              />
            </picture>
          </div>
        </section>
        <ControlPanel></ControlPanel>
      </main>
    </div>
  );
}

export default App;
