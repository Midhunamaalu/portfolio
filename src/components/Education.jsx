import React from "react";

function Education() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-sky-500/20 rounded-2xl shadow-2xl shadow-sky-500/10 p-8 md:p-12 space-y-6 hover:scale-[1.02] transition-transform duration-300">

        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 border-b border-sky-500 pb-3 w-fit">
          Education
        </h2>

        <div className="space-y-3 text-gray-300 text-sm md:text-lg leading-relaxed">

          <p className="font-semibold text-white">
            Diploma in Computer Engineering
          </p>

          <p className="text-gray-400">
            Government Women's Polytechnic College, Trivandrum
          </p>

        </div>

        {/* highlight badge */}
        <div className="inline-block bg-sky-500/10 border border-sky-500/30 text-sky-300 px-4 py-2 rounded-full text-sm">
          🎓 Currently Studying Diploma Program
        </div>

      </div>

    </section>
  );
}

export default Education;