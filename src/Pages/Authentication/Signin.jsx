import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoaderPinwheel, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem('isAuthenticated', 'true')
      window.location.href = '/dashboard'
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Similar styling as SignUp but for login */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <LoaderPinwheel className="w-10 h-10 text-white animate-spin" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to your admin account</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700 animate-slideUp">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-700/50 text-white pl-11 pr-4 py-3 rounded-lg outline-none border border-gray-600 focus:border-blue-500 transition-all"
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-gray-700/50 text-white pl-11 pr-11 py-3 rounded-lg outline-none border border-gray-600 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500"
                />
                <label htmlFor="remember" className="text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold
                hover:from-blue-500 hover:to-purple-500 transform hover:scale-[1.02] transition-all duration-200
                disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <LoaderPinwheel className="w-5 h-5 animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="text-center pt-4">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin