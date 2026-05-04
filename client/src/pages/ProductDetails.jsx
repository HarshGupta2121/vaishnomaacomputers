import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Layout><div className="text-center py-20">Loading...</div></Layout>;
  if (!product) return <Layout><div className="text-center py-20">Product not found</div></Layout>;

  let features = [];
  try {
    features = JSON.parse(product.features || '[]');
  } catch(e) {
    if (typeof product.features === 'string') {
        features = product.features.split(',').map(f => f.trim());
    }
  }

  return (
    <Layout>
      <section className="py-12 bg-surface-container-lowest">
        <div className="container-max mx-auto px-6">
          <div className="text-sm text-on-surface-variant mb-8 flex items-center gap-2">
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="capitalize">{product.category}</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-semibold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-surface-container rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-8xl text-slate-300">image</span>
                )}
              </div>
            </div>

            <div>
              <span className="text-secondary-container font-label-caps text-label-caps tracking-widest uppercase mb-2 block">{product.category}</span>
              <h1 className="font-h1 text-4xl mb-4 text-primary">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1 text-secondary-container">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>{i < Math.floor(product.rating || 5) ? 'star' : 'star_outline'}</span>
                    ))}
                </div>
                <span className="text-on-surface-variant text-sm">(Customer Reviews)</span>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">₹{product.price?.toFixed(2) || 'N/A'}</span>
              </div>

              <div className="border-t border-b border-outline-variant py-8 mb-8">
                <h3 className="font-h3 text-2xl mb-6 text-primary">Technical Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">check_circle</span>
                      <span className="text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                  {features.length === 0 && <li className="text-on-surface-variant">No features listed.</li>}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-h3 text-2xl mb-4 text-primary">Product Description</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <button className="w-full bg-secondary-container text-white py-4 rounded-xl font-button hover:bg-secondary transition-colors flex justify-center items-center gap-2 shadow-lg">
                    Get Quote <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-button hover:bg-surface-container-low transition-colors flex justify-center items-center gap-2">
                    Contact Now <span className="material-symbols-outlined">support_agent</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
