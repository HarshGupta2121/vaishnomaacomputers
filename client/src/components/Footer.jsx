import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 w-full border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-bold text-[#0A2540] dark:text-white mb-4">Vaishno Maa Computers</div>
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">Leading provider of high-security surveillance and networking solutions for modern enterprises and homes.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#0A2540] dark:text-white cursor-pointer hover:text-[#FF7A00]">social_leaderboard</span>
            <span className="material-symbols-outlined text-[#0A2540] dark:text-white cursor-pointer hover:text-[#FF7A00]">photo_camera</span>
            <span className="material-symbols-outlined text-[#0A2540] dark:text-white cursor-pointer hover:text-[#FF7A00]">alternate_email</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#0A2540] dark:text-white mb-4 uppercase text-xs tracking-widest">Our Services</h4>
          <ul className="space-y-2 font-['Inter'] text-sm">
            <li><Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">CCTV Installation</Link></li>
            <li><Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">Network Setup</Link></li>
            <li><Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">Maintenance</Link></li>
            <li><Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">Repair Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#0A2540] dark:text-white mb-4 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-2 font-['Inter'] text-sm">
            <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">About Us</Link></li>
            <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">Privacy Policy</Link></li>
            <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">Terms of Service</Link></li>
            <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-[#0A2540] dark:hover:text-white underline transition-all">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#0A2540] dark:text-white mb-4 uppercase text-xs tracking-widest">Contact Info</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-slate-500 dark:text-slate-400">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#FF7A00] text-sm mt-1">location_on</span>
              <span>Room D2, Deep Pooja CHS, RSC 3, Mhada, Ganesh Nagar, Kandivali West, Mumbai, MH 400067</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#FF7A00] text-sm">phone</span>
              <span>+91 7021876114</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#FF7A00] text-sm">mail</span>
              <span>vmaacomputers@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-[#FF7A00] text-sm">receipt_long</span>
              <span><strong>GSTIN:</strong> 27ATCPG0520A1ZN</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400">© 2024 Vaishno Maa Computers. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
