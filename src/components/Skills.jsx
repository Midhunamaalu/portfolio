import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1224] text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1224]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
          <div 
            className="text-xl font-bold tracking-wider bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            MN<span className="text-sky-400">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Education", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0b1224] border-b border-slate-800 px-6 py-4 space-y-4">
            {["Home", "About", "Education", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-base font-medium text-slate-400 hover:text-sky-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 1. HOME SECTION */}
      <section 
        id="home" 
        className="min-h-screen flex items-center px-6 md:px-20 max-w-7xl mx-auto pt-16"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Midhuna M Nair
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-slate-300 inline-block border-r-2 border-sky-400 pr-2 animate-pulse">
              Aspiring Software Engineer & Frontend Developer
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
              Passionate Computer Engineering student focused on frontend development, 
              creative UI design, and modern web technologies.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => scrollToSection("about")}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-90 transition-all font-semibold text-sm shadow-lg shadow-sky-500/25"
              >
                About Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://www.michaelpage.co.in/sites/michaelpage.co.in/files/2022-05/Software%20Developer.jpg"
                alt="developer"
                className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section 
        id="about" 
        className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#090d1a] border-t border-slate-900/50 relative overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="max-w-3xl w-full bg-[#0b1224]/70 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 space-y-8 relative group transition-all duration-500 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent w-fit">
              About Me
            </h2>
            <div className="h-1 w-12 bg-sky-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
          </div>
          <div className="space-y-5">
            <p className="text-slate-200 leading-relaxed text-base md:text-lg font-medium">
              Hello! My name is <span className="text-sky-400 font-semibold bg-sky-500/5 px-2 py-0.5 rounded border border-sky-500/10">Midhuna</span>. 
              I am currently studying Computer Engineering at Government Women's Polytechnic College, Thiruvananthapuram.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              I am passionate about technology, programming, and frontend development. 
              I enjoy building creative and user-friendly websites while improving my technical 
              skills through projects and teamwork.
            </p>
          </div>
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

      {/* 3. EDUCATION SECTION */}
      <section 
        id="education" 
        className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#0b1224] border-t border-slate-900/50 relative overflow-hidden"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="max-w-3xl w-full bg-[#0b1224]/70 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 space-y-8 relative group transition-all duration-500 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent w-fit">
              Education
            </h2>
            <div className="h-1 w-12 bg-sky-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
          </div>
          <div className="relative border-l border-slate-800 ml-3 space-y-6">
            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-[#0b1224]"></div>
              <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">Diploma in Computer Engineering</span>
              <h3 className="text-lg font-bold text-slate-200 mt-1">Government Women's Polytechnic College</h3>
              <p className="text-sm text-slate-400 mt-1">Thiruvananthapuram</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section 
        id="skills" 
        className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#090d1a] border-t border-slate-900/50 relative overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="max-w-3xl w-full bg-[#0b1224]/70 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 space-y-8 relative group transition-all duration-500 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent w-fit">
              Skills
            </h2>
            <div className="h-1 w-12 bg-sky-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Python", "C Programming", "HTML", "CSS", "React JS"].map((skill) => (
              <span 
                key={skill}
                className="px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 hover:bg-sky-500/[0.02] transition-all duration-300 cursor-pointer text-sm font-medium shadow-sm hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="min-h-screen bg-[#0b1224] border-t border-slate-900/50 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-400">Contact Section</h2>
      </section>

    </div>
  );
}

export default App;