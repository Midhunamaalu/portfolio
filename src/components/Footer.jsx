import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Logo/Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wider">
              MIDHUNA<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">Crafting beautiful digital experiences.</p>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-indigo-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors duration-300">Education</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
          </div>

        </div>

        {/* Horizontal Line */}
        <hr className="border-slate-800 my-6" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Midhuna. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">&hearts;</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;