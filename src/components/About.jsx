import React from "react";

function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#090d1a] text-slate-100 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-3xl w-full bg-[#0b1224]/70 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 space-y-8 relative group transition-all duration-500 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5">
        
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent w-fit">
            About Me
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-5">
          <p className="text-slate-200 leading-relaxed text-base md:text-lg font-medium">
            Hello! My name is <span className="text-sky-400 font-semibold bg-sky-500/5 px-2 py-0.5 rounded border border-sky-500/10">Midhuna</span>. 
            I am currently studying Computer Engineering at Government Women's Polytechnic College, Thiruvananthapuram.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-sky-500/[0.03] to-indigo-500/[0.03] border border-sky-500/10 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 group-hover:border-sky-500/20 group-hover:from-sky-500/[0.06]">
          <span className="text-xl select-none bg-sky-500/10 p-2 rounded-lg text-sky-400">💡</span>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Core Focus</h4>
            <p className="text-sky-300/90 text-sm font-medium leading-relaxed">
              Focused on frontend development, UI design & modern web technologies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;