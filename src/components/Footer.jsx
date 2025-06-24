import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-center md:text-left">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        {/* Footer Info */}
        <div className="text-sm text-center md:text-right flex items-center gap-2">
          <span>© {currentYear} PassOP. Made with</span>
          <img src="icons/heart.png" alt="heart" className="w-5 h-5" />
          <span>by Umer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
