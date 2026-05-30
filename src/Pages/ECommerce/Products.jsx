import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: "Wireless Headphones Pro", price: 89.99, stock: 234, category: "Electronics", status: "Active" },
    { id: 2, name: "Premium Cotton T-Shirt", price: 29.99, stock: 456, category: "Fashion", status: "Active" },
    { id: 3, name: "Smart Watch Ultra", price: 249.99, stock: 67, category: "Electronics", status: "Low Stock" },
    { id: 4, name: "Stainless Steel Bottle", price: 19.99, stock: 0, category: "Home", status: "Out of Stock" },
  ];

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-600">Manage your product catalog</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700">
          <Plus size={20} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-5 text-left">Product</th>
              <th className="px-6 py-5 text-left">Category</th>
              <th className="px-6 py-5 text-left">Price</th>
              <th className="px-6 py-5 text-left">Stock</th>
              <th className="px-6 py-5 text-left">Status</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-5 font-medium">{product.name}</td>
                <td className="px-6 py-5 text-gray-600">{product.category}</td>
                <td className="px-6 py-5 font-semibold">${product.price}</td>
                <td className="px-6 py-5">
                  <span className={product.stock === 0 ? "text-red-600" : ""}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                    product.status === 'Active' ? 'bg-green-100 text-green-700' :
                    product.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-700"><Edit size={18} /></button>
                    <button className="text-red-600 hover:text-red-700"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;