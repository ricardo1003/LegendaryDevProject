import { useState } from "react";

export default function ControlPanel() {
  const [graphSelected, setGraphSelected] = useState([true, false, false]);

  return (
    <aside>
      <form
        className="absolute rounded-md bg-black text-white right-0"
      >
        <nav className="flex justify-between p-4 border-b-1">
          {graphSelected.map((element, i) => {
            return (
              <button
                className={`text-white ${graphSelected[i] ? "bg-[#641586]" : "bg-[#300a40]"} p-2 rounded-md`}
                onClick={(e) => {e.preventDefault()
                    let newArray = [false,false,false]
                    newArray[i]=true
                   setGraphSelected(newArray);
                }}
              >
                graph {i + 1}
              </button>
            );
          })}
        </nav>
        <label htmlFor="positionX">positionX</label>
        <input type="number" className="bg-white text-black" />
      </form>
    </aside>
  );
}
