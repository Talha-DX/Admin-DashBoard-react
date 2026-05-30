import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '', price: '', stock: '', category: '', description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product added successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Product</h1>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
              placeholder="Product name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Price ($)</label>
              <input type="number" className="w-full px-5 py-4 border border-gray-300 rounded-2xl" placeholder="99.99" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Stock Quantity</label>
              <input type="number" className="w-full px-5 py-4 border border-gray-300 rounded-2xl" placeholder="100" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl">
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Beauty</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea rows="5" className="w-full px-5 py-4 border border-gray-300 rounded-2xl" placeholder="Product description..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Product Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
              <p className="text-gray-500">Click to upload image</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 text-lg font-medium">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;