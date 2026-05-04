import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (currentPath) => {
    const isActive = path === currentPath || (currentPath !== '/' && path.startsWith(currentPath));
    if (isActive) {
      return "font-['Inter'] font-semibold text-sm uppercase tracking-wider text-[#FF7A00] border-b-2 border-[#FF7A00] pb-1 hover:text-[#FF7A00] transition-colors duration-200";
    }
    return "font-['Inter'] font-semibold text-sm uppercase tracking-wider text-[#0A2540] dark:text-slate-300 hover:text-[#FF7A00] transition-colors duration-200 border-b-2 border-transparent pb-1";
  };

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link to="/" className="text-xl font-black text-[#0A2540] dark:text-white">Vaishno Maa Computers</Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/products" className={getLinkClass('/products')}>Products</Link>
          <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          <Link to="/gallery" className={getLinkClass('/gallery')}>Gallery</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block text-[#0A2540] font-semibold text-sm px-4 py-2 hover:opacity-80 transition-all">Call Now</button>
          <Link to="/contact" className="hidden md:block">
            <button className="bg-[#FF7A00] text-white px-6 py-3 rounded-lg font-button text-button shadow-lg hover:opacity-90 active:scale-95 transition-all">Get a Quote</button>
          </Link>
          <button className="md:hidden text-[#0A2540] dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-b border-slate-100 dark:border-slate-800 flex flex-col p-6 gap-6">
          <Link to="/" className={getLinkClass('/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className={getLinkClass('/products')} onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/services" className={getLinkClass('/services')} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/gallery" className={getLinkClass('/gallery')} onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" className={getLinkClass('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#FF7A00] text-white px-6 py-3 rounded-lg font-button text-button shadow-lg hover:opacity-90 active:scale-95 transition-all">Get a Quote</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
