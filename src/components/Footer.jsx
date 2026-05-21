import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Name / Logo section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-wider">MIDHUNA</h2>
          <p className="text-xs text-slate-400 mt-1">Portfolio &copy; {new Date().getFullYear()}</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a>
          <a href="#education" className="hover:text-blue-400 transition-colors duration-200">Education</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors duration-200">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
        </nav>

        {/* Bottom Rights / Sub-text */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          Designed & Built with ❤️ by Midhuna
        </div>

      </div>
    </footer>
  );
};

export default Footer;