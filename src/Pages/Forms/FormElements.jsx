import React, { useState } from 'react';

const FormElements = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    subscribe: false,
    skills: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Form Elements</h1>
        <p className="text-gray-600">Complete collection of form components</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <form className="space-y-8">
          {/* Text Inputs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Text Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
              </div>
            </div>
          </div>

          {/* Password & Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          {/* Select & Textarea */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500">
                <option value="">Select Country</option>
                <option value="pk">Pakistan</option>
                <option value="in">India</option>
                <option value="ae">UAE</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Department</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500">
                <option>Marketing</option>
                <option>Sales</option>
                <option>Development</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500" placeholder="Write something..."></textarea>
          </div>

          {/* Checkboxes & Radios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-3">Skills</label>
              <div className="space-y-3">
                {['React', 'Tailwind', 'Node.js', 'UI/UX'].map(skill => (
                  <label key={skill} className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                    <span>{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Gender</label>
              <div className="space-y-3">
                {['Male', 'Female', 'Other'].map(g => (
                  <label key={g} className="flex items-center gap-3">
                    <input type="radio" name="gender" className="w-5 h-5 accent-blue-600" />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Document</label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition">
              <input type="file" className="hidden" id="file" />
              <label htmlFor="file" className="cursor-pointer">
                <div className="text-4xl mb-3">📎</div>
                <p className="font-medium">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            <button type="button" className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-xl hover:bg-gray-300 transition">Cancel</button>
            <button type="submit" className="flex-1 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormElements;