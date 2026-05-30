import React, { useState } from 'react'
import { 
  LoaderPinwheel, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SignUp = ({ onSignUp }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsLoading(true)
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        // Store user data (in real app, send to backend)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('user', JSON.stringify({
          name: formData.fullName,
          email: formData.email
        }))
        
        // Call parent callback if provided
        if (onSignUp) {
          onSignUp(formData)
        }
        
        // Redirect to dashboard
        window.location.href = '/dashboard'
      }, 1500)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-md">
        
        {/* Logo and Header */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <LoaderPinwheel className="w-10 h-10 text-white animate-spin" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Get started with your admin dashboard</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700 animate-slideUp">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-gray-700/50 text-white pl-11 pr-4 py-3 rounded-lg outline-none border transition-all duration-200
                    ${errors.fullName 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-600 focus:border-blue-500'
                    }`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500 animate-slideDown">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-700/50 text-white pl-11 pr-4 py-3 rounded-lg outline-none border transition-all duration-200
                    ${errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-600 focus:border-blue-500'
                    }`}
                  placeholder="admin@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 animate-slideDown">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-gray-700/50 text-white pl-11 pr-11 py-3 rounded-lg outline-none border transition-all duration-200
                    ${errors.password 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-600 focus:border-blue-500'
                    }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500 animate-slideDown">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full bg-gray-700/50 text-white pl-11 pr-11 py-3 rounded-lg outline-none border transition-all duration-200
                    ${errors.confirmPassword 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-600 focus:border-blue-500'
                    }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500 animate-slideDown">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold
                hover:from-blue-500 hover:to-purple-500 transform hover:scale-[1.02] transition-all duration-200
                disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <LoaderPinwheel className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Sign Up
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/Signin" className="text-blue-400 hover:text-blue-300 font-semibold transition">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-gray-400 text-sm">
            <div className="text-blue-400 font-semibold">Secure</div>
            <div className="text-xs">Encrypted data</div>
          </div>
          <div className="text-gray-400 text-sm">
            <div className="text-blue-400 font-semibold">Fast</div>
            <div className="text-xs">Performance</div>
          </div>
          <div className="text-gray-400 text-sm">
            <div className="text-blue-400 font-semibold">24/7</div>
            <div className="text-xs">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp