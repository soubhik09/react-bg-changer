import { useState } from "react";

function App() {
  const [bg, setBg] = useState("white");

  return (
    <>
      <div
        className={`w-full h-screen flex justify-center items-center gap-3 bg-${bg}-300 duration-200`}
      >
        <button
          className={`cursor-pointer p-2 rounded ${
            bg === "red" ? "bg-white shadow-lg" : "bg-red-300"
          }`}
          onClick={() => setBg("red")}
        >
          Red
        </button>
        <button
          className={`cursor-pointer p-2 rounded ${
            bg === "green" ? "bg-white shadow-lg" : "bg-green-300"
          }`}
          onClick={() => setBg("green")}
        >
          Green
        </button>
        <button
          className={`cursor-pointer p-2 rounded ${
            bg === "blue" ? "bg-white shadow-lg" : "bg-blue-300"
          }`}
          onClick={() => setBg("blue")}
        >
          Blue
        </button>
      </div>
    </>
  );
}

export default App;
