import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', location: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <section className="bg-primary text-white py-16">
        <div className="container-max mx-auto px-6 text-center">
          <h1 className="font-h1 text-h1 mb-6">Connect With Our Technical Experts</h1>
          <p className="font-body-lg text-primary-fixed-dim max-w-3xl mx-auto">
            Whether you're securing a residence or architecting a multi-site enterprise network, our team provides the precision and reliability your infrastructure demands.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface-container-low min-h-screen relative -mt-8">
        <div className="container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-xl z-10">
            <h2 className="font-h2 text-3xl text-primary mb-8">Service Inquiry</h2>
            
            {status === 'success' && <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">Inquiry submitted successfully! We will contact you soon.</div>}
            {status === 'error' && <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">Failed to submit inquiry. Please try again.</div>}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">FULL NAME</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">PHONE NUMBER</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">LOCATION / ADDRESS</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
              </div>
              <div>
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2">REQUIREMENT DETAILS</label>
                <textarea required rows="5" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-bright resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button disabled={status === 'loading'} type="submit" className="bg-secondary-container text-white px-8 py-4 rounded-xl font-button shadow-lg hover:bg-secondary transition-colors w-full md:w-auto">
                {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8 z-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-h3 text-2xl text-primary mb-8">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">phone_in_talk</span>
                  </div>
                  <div>
                    <div className="text-label-caps font-label-caps text-on-surface-variant mb-1">PHONE</div>
                    <div className="font-h3 text-xl text-primary">+91 7021876114</div>
                    <div className="text-sm text-on-surface-variant mt-1">Mon - Sat, 9:00 AM - 8:00 PM</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">location_on</span>
                  </div>
                  <div>
                    <div className="text-label-caps font-label-caps text-on-surface-variant mb-1">OFFICE ADDRESS</div>
                    <div className="font-body-md text-primary">Room D2, Deep Pooja CHS, RSC 3<br/>Mhada, Near Power House, Ganesh Nagar<br/>Kandivali West, Mumbai, MH 400067</div>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-outline-variant" />
              
              <div className="bg-surface-container-low p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-primary mb-3 text-sm">Business Profile</h4>
                <ul className="text-xs text-on-surface-variant space-y-2">
                  <li><strong className="text-primary">Legal Name:</strong> Sunny Santosh Kumar Gupta</li>
                  <li><strong className="text-primary">Trade Name:</strong> VAISHNO MAA COMPUTERS</li>
                  <li><strong className="text-primary">GSTIN:</strong> 27ATCPG0520A1ZN</li>
                  <li><strong className="text-primary">Constitution:</strong> Proprietorship</li>
                  <li><strong className="text-primary">Nature of Business:</strong> Retail & Maintenance Services</li>
                </ul>
              </div>

              <hr className="my-8 border-outline-variant" />
              <a href="https://wa.me/917021876114" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-xl font-button hover:bg-[#128C7E] transition-colors flex justify-center items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">chat</span> Chat via WhatsApp
              </a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-64 relative">
               <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                 <span className="text-on-surface-variant">Map Integration Placeholder</span>
               </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
