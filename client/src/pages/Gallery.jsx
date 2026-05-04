import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultImages = [
    { id: 'g1', imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80' },
    { id: 'g2', imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80' },
    { id: 'g3', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' }
  ];

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setImages(data);
        } else {
          setImages(defaultImages);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setImages(defaultImages);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section className="bg-surface-container-low py-16">
        <div className="container-max mx-auto px-6 text-center">
          <h1 className="font-h1 text-h1 text-primary-container mb-6">Installation Showcase</h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-6">
            Browse our recent enterprise and residential installations. We take pride in clean cable management, precise camera positioning, and professional network architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-secondary">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">✔ Clean Cabling</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">✔ Optimal Angles</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">✔ Secure Networking</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background min-h-screen">
        <div className="container-max mx-auto px-6">
          {loading ? (
             <div className="text-center py-20">Loading gallery...</div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map(img => (
                <div key={img.id} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm cursor-pointer" onClick={() => setSelectedImage(img.imageUrl)}>
                  <img src={img.imageUrl} alt="Gallery item" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-12" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-secondary-container transition-colors" onClick={() => setSelectedImage(null)}>
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <img src={selectedImage} alt="Expanded view" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
