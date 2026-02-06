
import React, { useState } from 'react';
import { Product } from '../types.ts';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Nourishing Silk Elixir', category: 'haircare', price: '$42.00', image: 'salon-images/image-24.jpg' },
  { id: '2', name: 'Ceramic Pro Styler', category: 'tools', price: '$185.00', image: 'salon-images/image-25.jpg' },
  { id: '3', name: 'Volumizing Root Lift', category: 'haircare', price: '$34.00', image: 'salon-images/image-26.jpg' },
  { id: '4', name: 'Ionic Mist Blowdryer', category: 'tools', price: '$220.00', image: 'salon-images/image-27.jpg' },
  { id: '5', name: 'Intensive Repair Mask', category: 'haircare', price: '$56.00', image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'Defining Curl Cream', category: 'haircare', price: '$38.00', image: 'salon-images/image-12.jpg' },
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'haircare' | 'tools'>('All');

  const filteredProducts = PRODUCTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="products" className="py-24 bg-[#F5EFEB]/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl text-[#1A1A1A] serif mb-6 tracking-tight">Our Products</h2>
            <p className="text-[#4A4A4A] text-lg opacity-70">
              Premium professional formulas for salon-quality results at home.
            </p>
          </div>

          <div className="flex gap-4">
            {(['All', 'haircare', 'tools'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-[#1A1A1A] text-white' : 'bg-white text-gray-400 hover:text-[#1A1A1A] border border-gray-100'
                  }`}
              >
                {cat === 'haircare' ? 'Haircare' : cat === 'tools' ? 'Tools' : 'All'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-[40px] bg-white mb-6 overflow-hidden flex items-center justify-center p-12 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = `https://picsum.photos/500/500?random=${product.id + 10}` }}
                />
              </div>
              <div className="text-center px-4">
                <p className="text-[#A31D1D] text-[10px] uppercase font-black tracking-widest mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 leading-tight">{product.name}</h3>
                <span className="text-gray-500 font-medium">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

