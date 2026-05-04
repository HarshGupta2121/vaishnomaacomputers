import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultServices = [
    {
      id: 's1',
      title: 'CCTV Installation',
      description: 'State-of-the-art surveillance systems with 4K resolution, night vision, and remote mobile access for total visibility.',
      icon: 'videocam'
    },
    {
      id: 's2',
      title: 'Network Setup',
      description: 'High-speed structured cabling and enterprise-grade Wi-Fi deployments ensuring seamless connectivity across your facility.',
      icon: 'router'
    },
    {
      id: 's3',
      title: 'Maintenance & Repair',
      description: 'Proactive system health checks and rapid-response repair services to ensure your security infrastructure never fails.',
      icon: 'engineering'
    },
    {
      id: 's4',
      title: 'Security Consultation',
      description: 'Strategic risk assessment and customized security architecture design tailored to your specific operational needs.',
      icon: 'security'
    },
    {
      id: 's5',
      title: 'Computer Repair',
      description: 'Expert diagnostic and troubleshooting for hardware and software issues to get your systems running smoothly again.',
      icon: 'computer'
    }
  ];

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(defaultServices);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setServices(defaultServices);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-surface-container-low py-20 relative overflow-hidden">
        <div className="container-max mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-secondary-container font-label-caps text-label-caps tracking-widest mb-4 block uppercase">Expert Solutions</span>
              <h1 className="font-h1 text-h1 text-primary-container mb-6">Our Security & Networking Services</h1>
              <p className="font-body-lg text-on-surface-variant mb-8 max-w-xl">
                We provide industry-leading infrastructure and monitoring solutions designed to protect your assets and keep your business connected 24/7.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="material-symbols-outlined text-secondary-container">verified</span>
                  Certified Technicians
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="material-symbols-outlined text-secondary-container">support_agent</span>
                  24/7 Support
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white p-2 rounded-2xl shadow-2xl transform rotate-2">
                <img className="rounded-xl w-full h-[400px] object-cover" alt="Security Networking Services" src="/api/hero-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-padding bg-background">
        <div className="container-max mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-h2 text-h2 text-primary mb-4 border-b-4 border-secondary-container inline-block pb-2">Comprehensive Protection</h2>
          </div>
          
          {loading ? (
             <div className="text-center py-20">Loading services...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map(service => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col">
                  <div className="w-14 h-14 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-secondary-container text-3xl">{service.icon || 'settings'}</span>
                  </div>
                  <h3 className="font-h3 text-xl mb-4 text-primary">{service.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <button className="w-full bg-secondary-container text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                      Request Service
                    </button>
                  </Link>
                </div>
              ))}
              {services.length === 0 && <div className="col-span-full text-center text-on-surface-variant">No services found.</div>}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
