import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Data states
  const [inquiries, setInquiries] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);
  
  // Form states
  const [showProductForm, setShowProductForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, activeTab]);

  const fetchData = async () => {
    try {
      const headers = { 'Authorization': `Bearer ${token}` };
      const [inqRes, prodRes, servRes, galRes] = await Promise.all([
        fetch('/api/inquiries', { headers }),
        fetch('/api/products'),
        fetch('/api/services'),
        fetch('/api/gallery')
      ]);
      if (inqRes.ok) setInquiries(await inqRes.json());
      if (prodRes.ok) setProducts(await prodRes.json());
      if (servRes.ok) setServices(await servRes.json());
      if (galRes.ok) setGallery(await galRes.json());
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  // -------------------------
  // INQUIRIES
  // -------------------------
  const updateInquiryStatus = async (id, status) => {
    try {
      await fetch(`/api/inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ status })
      });
      fetchData();
    } catch (e) {}
  };

  // -------------------------
  // PRODUCTS
  // -------------------------
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      if (res.ok) {
        setShowProductForm(false);
        fetchData();
      } else {
        alert('Failed to add product');
      }
    } catch (err) {
      alert('Error adding product');
    }
  };

  const deleteProduct = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await fetch(`/api/products/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
      fetchData();
    } catch (e) {}
  };

  // -------------------------
  // SERVICES
  // -------------------------
  const handleAddService = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      icon: e.target.icon.value
    };
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setShowServiceForm(false);
        fetchData();
      }
    } catch (err) {
      alert('Error adding service');
    }
  };

  const deleteService = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      await fetch(`/api/services/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
      fetchData();
    } catch (e) {}
  };

  // -------------------------
  // GALLERY
  // -------------------------
  const handleAddGallery = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      if (res.ok) {
        setShowGalleryForm(false);
        fetchData();
      }
    } catch (err) {
      alert('Error adding image');
    }
  };

  const deleteGallery = async (id) => {
    if (!confirm('Delete this image?')) return;
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
      fetchData();
    } catch (e) {}
  };


  if (!token) {
    return (
      <div className="min-h-screen bg-surface-container flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-primary mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input required type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary outline-none" />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:opacity-90">Login</button>
          </form>
          
          <div className="mt-6 border-t pt-4 text-center">
            <p className="text-sm text-slate-500 mb-2">First time setup?</p>
            <button 
              onClick={async () => {
                try {
                  const res = await fetch('/api/auth/setup', { method: 'POST' });
                  const data = await res.json();
                  alert(data.message || 'Admin created successfully! You can now login with: admin@vaishnomaa.com / admin123');
                } catch (e) {
                  alert('Setup failed or admin already exists.');
                }
              }}
              className="text-sm text-secondary-container font-semibold hover:underline"
            >
              Initialize Default Admin Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-surface-container-low text-on-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold">Vaishno Maa Computers Admin</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'dashboard' ? 'bg-primary-container border-l-4 border-secondary-container text-white' : 'text-slate-400 hover:bg-primary-container'}`}>
            <span className="material-symbols-outlined">dashboard</span> Dashboard
          </button>
          <button onClick={() => setActiveTab('inquiries')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'inquiries' ? 'bg-primary-container border-l-4 border-secondary-container text-white' : 'text-slate-400 hover:bg-primary-container'}`}>
            <span className="material-symbols-outlined">inbox</span> Inquiries
          </button>
          <button onClick={() => setActiveTab('products')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'products' ? 'bg-primary-container border-l-4 border-secondary-container text-white' : 'text-slate-400 hover:bg-primary-container'}`}>
            <span className="material-symbols-outlined">inventory_2</span> Products
          </button>
          <button onClick={() => setActiveTab('services')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'services' ? 'bg-primary-container border-l-4 border-secondary-container text-white' : 'text-slate-400 hover:bg-primary-container'}`}>
            <span className="material-symbols-outlined">design_services</span> Services
          </button>
          <button onClick={() => setActiveTab('gallery')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'gallery' ? 'bg-primary-container border-l-4 border-secondary-container text-white' : 'text-slate-400 hover:bg-primary-container'}`}>
            <span className="material-symbols-outlined">collections</span> Gallery
          </button>
        </nav>
        <div className="p-4 border-t border-primary-container">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-slate-400 hover:text-white hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined">logout</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white px-8 py-4 border-b border-slate-200 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold text-primary capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/')} className="text-sm font-semibold text-secondary-container hover:underline">View Site</button>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8 relative">
          
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary-container">mark_email_unread</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{inquiries.filter(i => i.status === 'PENDING').length}</div>
                    <div className="text-sm text-on-surface-variant font-semibold">New Inquiries</div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container">inventory_2</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{products.length}</div>
                    <div className="text-sm text-on-surface-variant font-semibold">Total Products</div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-700">design_services</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{services.length}</div>
                    <div className="text-sm text-on-surface-variant font-semibold">Active Services</div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-700">collections</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{gallery.length}</div>
                    <div className="text-sm text-on-surface-variant font-semibold">Gallery Images</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-primary">Recent Inquiries</h3>
                  <button onClick={() => setActiveTab('inquiries')} className="text-sm text-secondary font-semibold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-on-surface-variant">
                      <tr>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Client</th>
                        <th className="px-6 py-3">Location</th>
                        <th className="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {inquiries.slice(0, 5).map(inq => (
                        <tr key={inq.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4">{new Date(inq.createdAt).toLocaleDateString()}</td>
                          <td className="px-6 py-4 font-semibold text-primary">{inq.name}</td>
                          <td className="px-6 py-4 text-on-surface-variant">{inq.location}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${inq.status === 'PENDING' ? 'bg-secondary-fixed text-secondary-container' : 'bg-green-100 text-green-800'}`}>
                              {inq.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {inquiries.length === 0 && <tr><td colSpan="4" className="px-6 py-4 text-center">No inquiries found.</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* INQUIRIES TAB */}
          {activeTab === 'inquiries' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-xs uppercase font-bold text-on-surface-variant">
                    <tr>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Client</th>
                      <th className="px-6 py-3">Contact</th>
                      <th className="px-6 py-3">Message</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {inquiries.map(inq => (
                      <tr key={inq.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-on-surface-variant">{new Date(inq.createdAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-primary">{inq.name}</div>
                          <div className="text-xs text-on-surface-variant">{inq.location}</div>
                        </td>
                        <td className="px-6 py-4 text-on-surface-variant">{inq.phone}</td>
                        <td className="px-6 py-4 text-on-surface-variant max-w-xs truncate">{inq.message}</td>
                        <td className="px-6 py-4">
                          <select 
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                            className={`border rounded px-2 py-1 text-xs font-bold outline-none ${inq.status === 'PENDING' ? 'bg-secondary-fixed text-secondary-container' : 'bg-green-100 text-green-800'}`}
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="CONTACTED">CONTACTED</option>
                            <option value="RESOLVED">RESOLVED</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                    {inquiries.length === 0 && <tr><td colSpan="5" className="px-6 py-4 text-center">No inquiries found.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === 'products' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-primary">Manage Products</h3>
                  <button onClick={() => setShowProductForm(true)} className="bg-primary text-white px-4 py-2 rounded font-semibold text-sm hover:opacity-90 transition-opacity">Add Product</button>
                </div>
                
                {showProductForm && (
                  <div className="p-6 bg-slate-50 border-b border-slate-100">
                    <form onSubmit={handleAddProduct} className="space-y-4 max-w-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold mb-1">Name</label>
                          <input name="name" required className="w-full border rounded p-2 text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1">Category</label>
                          <input name="category" required className="w-full border rounded p-2 text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1">Price</label>
                          <input name="price" type="number" step="0.01" className="w-full border rounded p-2 text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1">Image</label>
                          <input name="image" type="file" accept="image/*" className="w-full border rounded p-1 text-sm bg-white" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1">Description</label>
                        <textarea name="description" required rows="3" className="w-full border rounded p-2 text-sm"></textarea>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setShowProductForm(false)} className="px-4 py-2 border rounded text-sm font-semibold">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-secondary-container text-white rounded text-sm font-semibold hover:opacity-90">Save Product</button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-on-surface-variant">
                      <tr>
                        <th className="px-6 py-3 w-16">Image</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {products.map(p => (
                        <tr key={p.id}>
                          <td className="px-6 py-4">
                            {p.imageUrl ? <img src={p.imageUrl} alt={p.name} className="w-10 h-10 object-cover rounded" /> : <div className="w-10 h-10 bg-slate-200 rounded"></div>}
                          </td>
                          <td className="px-6 py-4 font-semibold text-primary">{p.name}</td>
                          <td className="px-6 py-4 text-on-surface-variant">{p.category}</td>
                          <td className="px-6 py-4 text-on-surface-variant">{p.price ? `₹${p.price.toFixed(2)}` : 'N/A'}</td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => deleteProduct(p.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {products.length === 0 && <tr><td colSpan="5" className="px-6 py-4 text-center">No products found.</td></tr>}
                    </tbody>
                  </table>
                </div>
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-primary">Manage Services</h3>
                  <button onClick={() => setShowServiceForm(true)} className="bg-primary text-white px-4 py-2 rounded font-semibold text-sm hover:opacity-90 transition-opacity">Add Service</button>
                </div>
                
                {showServiceForm && (
                  <div className="p-6 bg-slate-50 border-b border-slate-100">
                    <form onSubmit={handleAddService} className="space-y-4 max-w-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold mb-1">Service Title</label>
                          <input name="title" required className="w-full border rounded p-2 text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1">Material Icon Name <a href="https://fonts.google.com/icons" target="_blank" rel="noreferrer" className="text-secondary font-normal underline">(Find here)</a></label>
                          <input name="icon" required placeholder="e.g. videocam, router" className="w-full border rounded p-2 text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1">Description</label>
                        <textarea name="description" required rows="3" className="w-full border rounded p-2 text-sm"></textarea>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setShowServiceForm(false)} className="px-4 py-2 border rounded text-sm font-semibold">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-secondary-container text-white rounded text-sm font-semibold hover:opacity-90">Save Service</button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-on-surface-variant">
                      <tr>
                        <th className="px-6 py-3 w-16">Icon</th>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {services.map(s => (
                        <tr key={s.id}>
                          <td className="px-6 py-4">
                            <span className="material-symbols-outlined text-secondary-container">{s.icon}</span>
                          </td>
                          <td className="px-6 py-4 font-semibold text-primary whitespace-nowrap">{s.title}</td>
                          <td className="px-6 py-4 text-on-surface-variant truncate max-w-xs">{s.description}</td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => deleteService(s.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {services.length === 0 && <tr><td colSpan="4" className="px-6 py-4 text-center">No active services. The website will fall back to defaults.</td></tr>}
                    </tbody>
                  </table>
                </div>
            </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === 'gallery' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-primary">Manage Gallery</h3>
                  <button onClick={() => setShowGalleryForm(true)} className="bg-primary text-white px-4 py-2 rounded font-semibold text-sm hover:opacity-90 transition-opacity">Upload Image</button>
                </div>
                
                {showGalleryForm && (
                  <div className="p-6 bg-slate-50 border-b border-slate-100">
                    <form onSubmit={handleAddGallery} className="flex gap-4 items-end max-w-xl">
                      <div className="flex-1">
                        <label className="block text-xs font-bold mb-1">Select Image</label>
                        <input name="image" required type="file" accept="image/*" className="w-full border rounded p-1 text-sm bg-white" />
                      </div>
                      <button type="submit" className="px-4 py-2 bg-secondary-container text-white rounded text-sm font-semibold hover:opacity-90 whitespace-nowrap">Upload</button>
                      <button type="button" onClick={() => setShowGalleryForm(false)} className="px-4 py-2 border rounded text-sm font-semibold whitespace-nowrap">Cancel</button>
                    </form>
                  </div>
                )}

                <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {gallery.map(img => (
                    <div key={img.id} className="relative group aspect-square rounded-lg overflow-hidden border border-slate-200">
                      <img src={img.imageUrl} alt="Gallery" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button onClick={() => deleteGallery(img.id)} className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                  {gallery.length === 0 && <div className="col-span-full text-center py-10 text-on-surface-variant">No images uploaded. The website will show placeholders.</div>}
                </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Admin;
