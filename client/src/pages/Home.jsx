import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-container text-white min-h-[870px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40" alt="Security control room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUok1_gUYgUACkVuEAaQ78ZHzFnRrx8s5k9cBxHMAftv-RLqs3AJno3y0fZHRB5A76xSYVF3VyfdiuNKmLs-BIUDUAoETrWw8ByYCSi7KH8Wv6TXs4Muru4vYVc6vlFhycBUBDzqERhE_L_RIFqxdtNihB9x9CGAusJNxQ30wHM3uzAUQVMpjU30MvvCSLriPBHjOJK_QvyuVOevhNNtq4PDIN18Rxc2yVF8zkhhWG6CYUWncQvKaTceFNUmOpS4zxcC8fGJj9mp1"/>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
        </div>
        <div className="container-max mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary-container text-white px-4 py-1.5 rounded-full font-label-caps text-label-caps mb-6">AUTHORIZED SECURITY PARTNER</span>
            <h1 className="font-h1 text-h1 mb-6 leading-tight">Professional CCTV & Network Installation Services</h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-lg">
              Secure your home, school, and office with reliable surveillance solutions. We provide end-to-end network infrastructure and high-definition monitoring systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="bg-secondary-container text-white px-8 py-4 rounded-lg font-button text-button shadow-xl hover:scale-105 transition-transform">Get Quote</button>
              </Link>
              <Link to="/products">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-button text-button hover:bg-white/10 transition-colors">View Products</button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl">
              <img className="rounded-xl w-full h-[400px] object-cover" alt="Security Camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3QlPcCNHAb1zKeqBROzERyXhuYFzCailk_9lmy1-Jd65F7FBoyufJxFrXlbtMm8jIER3J3ta19dpcUN9WN6kbWQawMJYx73mYRbHRaaT17CPY_Wfcw2Wuy8jF6VTXEEA4XUI48NPuVPtPzSybxTLNueIXZcO5FEAdLwaWJH4weTg0ltCOt55j-oO-fIm1lAWfJFyySANTYE6sKinBRRSYPgC_8AfAcDAmZFUz6IoUlLhJO0pRoh5LqLqZ6VLVsYUAQhouuKf1ZGVo"/>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface-container-lowest border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[#FF7A00] font-h2 text-h2 mb-1">2000+</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-[#FF7A00] font-h2 text-h2 mb-1">500+</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-[#FF7A00] font-h2 text-h2 mb-1">10+</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[#FF7A00] font-h2 text-h2 mb-1">24/7</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-section-padding bg-background">
        <div className="container-max mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-h2 text-h2 text-primary mb-4">Comprehensive Technical Solutions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">From enterprise networking to residential surveillance, we provide precision-engineered security infrastructure designed to protect your assets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(10,37,64,0.08)] hover:translate-y-[-4px] transition-all duration-300 border-t-4 border-secondary-container">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">videocam</span>
              <h3 className="font-h3 text-h3 mb-4">CCTV Installation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Advanced IP and analog camera systems with remote mobile monitoring and motion detection alerts.</p>
              <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(10,37,64,0.08)] hover:translate-y-[-4px] transition-all duration-300 border-t-4 border-secondary-container">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">router</span>
              <h3 className="font-h3 text-h3 mb-4">Router Setup</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">High-speed network configuration, Wi-Fi 6 mesh deployment, and secure firewall optimization for business use.</p>
              <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(10,37,64,0.08)] hover:translate-y-[-4px] transition-all duration-300 border-t-4 border-secondary-container">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">engineering</span>
              <h3 className="font-h3 text-h3 mb-4">Maintenance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Proactive health checks for your entire security network to ensure 100% uptime and clear video evidence.</p>
              <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(10,37,64,0.08)] hover:translate-y-[-4px] transition-all duration-300 border-t-4 border-secondary-container">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">build</span>
              <h3 className="font-h3 text-h3 mb-4">Repair</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Expert diagnostic and troubleshooting for failed hardware, cabling issues, and software glitches.</p>
              <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="container-max mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-label-caps text-label-caps tracking-widest mb-2 block uppercase">Premium Hardware</span>
              <h2 className="font-h2 text-h2 text-primary">Featured Security Products</h2>
            </div>
            <Link to="/products" className="text-primary-container font-semibold border-b-2 border-primary-container pb-1 hover:text-secondary-container hover:border-secondary-container transition-all">Browse All Products</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Smart AI Dome 4K" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxx2Yf4wtQr0D4dKyQ8cG7WEe05c-P_PVpxOS8TkH0MROEe8iXXKRtvnBlhtCbQJwgRwZArjMXjP7IqNeO3sLbPjZndedZH03S4Z3du2fPaYntlnHAriCLo319slCAICsBWrODheSdDuE6RH_Xq94c749jv6uSU-CGl5p4Wqg77pFgSVEsffiVPJ_QY6DXFYgi_QXiK0dQegWzcniWfbw01PwgV4aflEySyYyjZZFZJvHKQYZou4ivQObCLHDO0D4HtupC8Skb8_ak"/>
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white">
                <h4 className="font-h3 text-h3 mb-2">Smart AI Dome 4K</h4>
                <p className="font-body-md opacity-90 mb-4 max-w-md">Next-generation motion tracking with facial recognition and thermal imaging capabilities.</p>
                <span className="bg-[#FF7A00] px-4 py-2 rounded-lg font-button text-sm uppercase">Hot Item</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="16-Channel NVR" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlg73LlColhK8M-m3JA0VbsGFjCZvds5Sgs9V5fUa0LZIoNFo7h__Dr7LSq7RTW-UXNe5v51BDWV7S6qoOTKlDv7CVlnCFmPj2HgELI0M2QdswR8jI3i4pi8fFFIkeO14TRWDDuDT5GJIpAz1AwI8wOT7OVe7lofZ7NIVVNAVTLRWwhnXFEaZ_7LOEJ3hOX8sOf0GVbZyWPkvrOD3gNOsuV0fzM6IFmWhmkyHFHthqUZxqVHm_KLboHYSRVhyGcRdMOn_fHarrJu6U"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-center p-4">
                <h4 className="font-h3 text-h3 mb-2">16-Channel NVR</h4>
                <p className="font-body-md">Seamless recording & storage</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Biometric Entry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgXTv1QmFOVok22ruVJMyDY7Ze1pcQ3vLs7VgVJo53KDiz1Cdl-iMP7UZt8ZfpdIhW2AlpvJWF0e-KqCo-Fl3TKGfHpt44nltzK0LqYSYKf2HKWDOLK26ij5mq6qx1rKTFVWDLQHXkq0ojEpYyb6BKQQlR05KgjjjUagW6Pu4_H9dlLkVswY0G-j4NQOhqsSb_XAGppGeCvRDVhfLyiH227Im0dtBeYqM8HhcbBU4fdV1CIKkrzKuwtjonzr_TIOTcIckPw4EJcheu"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-center p-4">
                <h4 className="font-h3 text-h3 mb-2">Biometric Entry</h4>
                <p className="font-body-md">Advanced access control</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
