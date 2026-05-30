import React from 'react';

const FormLayouts = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Form Layouts</h1>
        <p className="text-gray-600">Various form layout patterns for your application</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Single Column Layout */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">Single Column Layout</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition">Submit</button>
          </form>
        </div>

        {/* Two Column Layout */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">Two Column Layout</h2>
          <form className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="col-span-2 bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition mt-4">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLayouts;