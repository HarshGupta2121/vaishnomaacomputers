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
      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center" href="#">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.511.895 3.013 1.341 4.541 1.341 5.287 0 9.589-4.301 9.591-9.591.002-5.288-4.3-9.589-9.591-9.589-5.287 0-9.589 4.301-9.591 9.59-.001 1.902.553 3.449 1.602 4.89l-.999 3.648 3.739-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
