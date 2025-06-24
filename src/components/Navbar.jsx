import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight flex items-center gap-1">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        {/* Future Nav Links (optional) */}
        {/* 
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a className="hover:text-green-400" href="/">Home</a></li>
          <li><a className="hover:text-green-400" href="#">About</a></li>
          <li><a className="hover:text-green-400" href="#">Contact</a></li>
        </ul> 
        */}

        {/* GitHub Button */}
        <a
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200"
        >
          <img
            src="/icons/github.svg"
            alt="GitHub"
            className="w-5 h-5 invert"
          />
          <span className="text-sm font-semibold">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
