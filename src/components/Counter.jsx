import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value,setValue] = useState(1);
  useEffect(()=>{
    console.log('count changed to ',[count]);
  },[count]);
  function Increment() {
    setCount(count + Number(value));
  }

  function Decrement() {
    if(count >0){
     setCount(count - Number(value));
    }
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white">

      <div className="relative w-80 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center space-y-6">

        {/* glow blob */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

        {/* title */}
        <h1 className="text-xl font-bold tracking-widest text-slate-300">
         COUNTER
        </h1>

        {/* number */}
        <div className="text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          {count}
        </div>

        {/* buttons */}
        <div className="flex flex-col gap-3">

          <button
            onClick={Increment}
            className="py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            + Increase
          </button>

          <button
            onClick={Decrement}
            className="py-2 rounded-xl bg-purple-500/20 border border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            - Decrease
          </button>

          <button
            onClick={Reset}
            className="py-2 rounded-xl bg-slate-500/20 border border-slate-300 text-slate-200 hover:bg-white hover:text-black transition-all duration-300"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Counter;
