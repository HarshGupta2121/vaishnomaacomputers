import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from backend
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products', err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section className="bg-primary-container text-white py-20">
        <div className="container-max mx-auto px-6 text-center">
          <h1 className="font-h1 text-h1 mb-4">Enterprise-Grade Hardware</h1>
          <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto">
            Discover our curated selection of high-performance security cameras, networking routers, and enterprise infrastructure components.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface-container-low min-h-screen">
        <div className="container-max mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input type="text" placeholder="Search products..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-6 py-2 rounded-full bg-primary text-white font-semibold text-sm">All Products</button>
              <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface hover:border-primary transition-all font-semibold text-sm">Camera</button>
              <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface hover:border-primary transition-all font-semibold text-sm">Router</button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.length > 0 ? products.map(product => (
                <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative rounded-xl overflow-hidden mb-6 h-48 bg-slate-100 flex items-center justify-center">
                    {product.imageUrl ? (
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <span className="material-symbols-outlined text-6xl text-slate-300">image</span>
                    )}
                  </div>
                  <div className="flex gap-1 text-secondary-container text-sm mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>{i < Math.floor(product.rating || 5) ? 'star' : 'star_outline'}</span>
                    ))}
                  </div>
                  <h3 className="font-h3 text-xl mb-2 text-primary">{product.name}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="font-bold text-lg text-primary">₹{product.price?.toFixed(2) || 'N/A'}</div>
                    <Link to={`/products/${product.id}`} className="text-secondary font-semibold flex items-center gap-1 text-sm hover:gap-2 transition-all">
                      View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-20 text-on-surface-variant">No products found.</div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
