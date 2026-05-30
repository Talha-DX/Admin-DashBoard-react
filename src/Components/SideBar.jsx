import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Home,
  Users,
  Settings,
  BarChart3,
  LoaderPinwheel,
  ChevronDown,
  ChevronUp,
  X,
  BotMessageSquare,
  ShoppingCart,
  Calendar,
  StickyNote,
  NotebookText,
  FormIcon,
  Layers,
  MessageCircle,
  Ticket,
  MailIcon,
  ChartBarIcon,
  Map,
  SwatchBook,
} from 'lucide-react'

const SideBar = ({ isOpen, onClose }) => {
  const [openSide, setOpenSide] = useState(false)
  const [openAssisrant, setOpenAssisrant] = useState(false)
  const [Ecommerce, setEcommerce] = useState(false)
  const [Task, setTask] = useState(false)
  const [Form, setForm] = useState(false)
  const [Tables, setTables] = useState(false)
  const [Pages, setPages] = useState(false)
  const [Layouts, setLayouts] = useState(false)
  const [Tickets, setTickets] = useState(false)
  const [Mail, setMail] = useState(false)
  const [chart, setChart] = useState(false)
  const [Maps, setMaps] = useState(false)
  const [Auth, setAuth] = useState(false)

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300'
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative
        w-64 bg-gray-800 text-white h-full 
        p-5 flex flex-col shrink-0
        transition-transform duration-300 ease-in-out
        z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className='lg:hidden absolute right-4 top-4 p-2 hover:bg-gray-700 rounded-lg transition'
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <NavLink to="/" className='flex items-center gap-3 text-2xl font-bold mb-10'>
          <LoaderPinwheel className='animate-spin' />
          <span className='hidden sm:inline'>SaaS Admin</span>
          <span className='sm:hidden'>SA</span>
        </NavLink>

        <nav className="space-y-2 flex-1 overflow-y-auto scrollbar-hide">
          {/* Dashboard */}
          <div>
            <span className='text-stone-300'>Menu</span>
            <div>
              <div
                onClick={() => setOpenSide(!openSide)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <Home size={20} />
                  <span>Dashboard</span>
                </div>
                {openSide ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${openSide ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Ecommerce</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/analytics" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Analytics</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/marketing" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Marketing</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/stocks" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Stocks</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/saas" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>SaaS</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/logistics" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Logistics</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/ai/sales" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Sales</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/ai/finance" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Finance</NavLink>
                </li>
              </ul>
            </div>

            {/* AI Assistant */}
            <div>
              <div
                onClick={() => setEcommerce(!Ecommerce)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <BotMessageSquare size={20} />
                  <span>AI Assistant</span>
                </div>
                {Ecommerce ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Ecommerce ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/text-generator" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Text Generator</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/image-generator" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Image Generator</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/code-generator" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Code Generator</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/video-generator" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Video Generator</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/settings" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>AI Settings</NavLink>
                </li>
              </ul>
            </div>

            {/* E-Commerce */}
            <div>
              <div
                onClick={() => setOpenAssisrant(!openAssisrant)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <ShoppingCart size={20} />
                  <span>E-Commerce</span>
                </div>
                {openAssisrant ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${openAssisrant ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/products" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Products</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/productsadd" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Add Product</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/billing" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Billing</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/invoices" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Invoices</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/single-invoice" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Single Invoice</NavLink>
                </li>
              </ul>
            </div>

            {/* Calendar */}
            <NavLink to="/calendar" onClick={onClose} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition ${isActive ? 'bg-gray-700 text-blue-400' : ''}`}>
              <Calendar size={20} />
              <span>Calendar</span>
            </NavLink>

            {/* Tasks */}
            <div>
              <div
                onClick={() => setTask(!Task)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <StickyNote size={20} />
                  <span>Tasks</span>
                </div>
                {Task ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Task ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/list" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>List</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/kanban" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Kanban</NavLink>
                </li>
              </ul>
            </div>

            {/* Forms */}
            <div>
              <div
                onClick={() => setForm(!Form)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <NotebookText size={20} />
                  <span>Forms</span>
                </div>
                {Form ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Form ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/layout" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Form Layout</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/elements" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Form Element</NavLink>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <div
                onClick={() => setPages(!Pages)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <FormIcon size={20} />
                  <span>Pages</span>
                </div>
                {Pages ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Pages ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/404" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Error 404</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/500" onClick={onClose}  className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Error 500</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/503" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Error 503</NavLink>
                </li>
              </ul>
            </div>

            {/* Layouts */}
            <div>
              <div
                onClick={() => setLayouts(!Layouts)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <Layers size={20} />
                  <span>Layouts</span>
                </div>
                {Layouts ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Layouts ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/layoutsone" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Layout One</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/layoutstwo" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Layout Two</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/layoutstwo" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Layout Three</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/layoutstwo" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Layout Four</NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Supports */}
          <div>
            <span className='text-stone-300'>Supports</span>
            
            <NavLink to="/chat" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition ${isActive ? 'bg-gray-700 text-blue-400' : ''}`}>
              <MessageCircle size={20} />
              <span>Chat</span>
            </NavLink>
            
            <div>
              <div
                onClick={() => setTickets(!Tickets)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <Ticket size={20} />
                  <span>Ticket Support</span>
                </div>
                {Tickets ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Tickets ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/support-tickets" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Ticket List</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/support-replay" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Tickets Replay</NavLink>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div>
              <div
                onClick={() => setMail(!Mail)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <MailIcon size={20} />
                  <span>E-Mail</span>
                </div>
                {Mail ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Mail ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/inbox" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Inbox</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/details" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Details</NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Others */}
          <div>
            <span className='text-stone-300'>Others</span>
            
            {/* Charts */}
            <div>
              <div
                onClick={() => setChart(!chart)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <ChartBarIcon size={20} />
                  <span>Charts</span>
                </div>
                {chart ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${chart ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/charts-line" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Line Chart</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/charts-pie" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Pie Chart</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/charts-bar" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Bar Chart</NavLink>
                </li>
              </ul>
            </div>

            {/* Maps */}
            <div>
              <div
                onClick={() => setMaps(!Maps)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <Map size={20} />
                  <span>Maps</span>
                </div>
                {Maps ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Maps ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/maps" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Maps</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/maps-vector" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Vectors Map</NavLink>
                </li>
              </ul>
            </div>

            {/* Authentication */}
            <div>
              <div
                onClick={() => setAuth(!Auth)}
                className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition'
              >
                <div className='flex items-center gap-3'>
                  <SwatchBook size={20} />
                  <span>Authentication</span>
                </div>
                {Auth ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ml-8 space-y-1 ${Auth ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
              >
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/signin" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Sign In</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/signup" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Sign Up</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/2fa" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Two-Factor Authentication</NavLink>
                </li>
                <li className='px-3 py-2 rounded-lg hover:bg-gray-700'>
                  <NavLink to="/reset-password" onClick={onClose} className={({ isActive }) => `block ${isActive ? 'text-blue-400' : ''}`}>Reset Password</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default SideBar