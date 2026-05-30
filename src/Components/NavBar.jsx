import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBackgroundColor } from  '../Features/background'; 
import { Link } from 'react-router-dom';
import {
    AlignJustify,
    Search,
    Moon,
    Bell,
    ChevronDown,
    ChevronUp,
    Sun
} from 'lucide-react';

const NavBar = ({ onMenuClick }) => {
    const [open, setOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    const backgroundColor = useSelector((state) => state.background.backgroundColor);
    const textColor = useSelector((state) => state.background.color);
    
    const dispatch = useDispatch();

    const isDark = backgroundColor === 'black';

    // Toggle Theme
    const toggleTheme = () => {
        dispatch(setBackgroundColor());
    };

    return (
        <>
            <header 
                className={`px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b sticky top-0 z-30 transition-all duration-300 ${
                    isDark 
                        ? 'bg-gray-900 text-white border-gray-700' 
                        : 'bg-white text-gray-900 border-gray-200 shadow-sm'
                }`}
            >
                {/* Left Section */}
                <div className='flex items-center gap-2 sm:gap-4'>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className={`p-2 border rounded-lg hover:bg-opacity-80 transition lg:hidden ${
                            isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        <AlignJustify className='w-5 h-5' />
                    </button>

                    {/* Desktop Search */}
                    <div className='relative hidden md:block'>
                        <input
                            type="text"
                            placeholder='Search...'
                            className={`pl-11 pr-4 py-2 rounded-lg outline-none border focus:border-blue-500 w-64 lg:w-80 transition-colors ${
                                isDark 
                                    ? 'bg-gray-800 text-white border-gray-600' 
                                    : 'bg-gray-100 text-gray-900 border-gray-300'
                            }`}
                        />
                        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                    </div>

                    {/* Mobile Search Button */}
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className={`p-2 border rounded-lg hover:bg-opacity-80 transition md:hidden ${
                            isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        <Search className='w-5 h-5' />
                    </button>
                </div>

                {/* Right Section */}
                <div className='flex items-center gap-2 sm:gap-4 relative'>
                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className={`p-2 border rounded-full hover:bg-opacity-80 transition ${
                            isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        {isDark ? (
                            <Sun className='w-5 h-5 cursor-pointer' />
                        ) : (
                            <Moon className='w-5 h-5 cursor-pointer' />
                        )}
                    </button>

                    {/* Notification */}
                    <button className={`p-2 border rounded-full hover:bg-opacity-80 transition relative ${
                        isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                    }`}>
                        <Bell className='w-5 h-5 cursor-pointer' />
                        <span className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'></span>
                    </button>

                    {/* Profile */}
                    <div
                        onClick={() => setOpen(!open)}
                        className={`flex items-center gap-2 px-2 py-1 rounded-full cursor-pointer transition ${
                            isDark 
                                ? 'bg-gray-800 hover:bg-gray-700' 
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="profile"
                            className='w-8 h-8 sm:w-10 sm:h-10 rounded-full'
                        />
                        <span className='hidden md:block text-sm sm:text-base'>
                            M.Talha
                        </span>
                        {open ? (
                            <ChevronUp className='w-4 h-4' />
                        ) : (
                            <ChevronDown className='w-4 h-4' />
                        )}
                    </div>

                    {/* Dropdown */}
                    {open && (
                        <div className={`absolute top-12 sm:top-16 right-0 w-48 rounded-xl shadow-lg overflow-hidden border z-50 ${
                            isDark 
                                ? 'bg-gray-800 border-gray-600' 
                                : 'bg-white border-gray-200'
                        }`}>
                            <ul>
                                <Link to="/"><li className={`px-4 py-3 hover:bg-opacity-80 cursor-pointer text-sm ${
                                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                }`}>Profile</li></Link>
                                <Link to="/settings"><li className={`px-4 py-3 hover:bg-opacity-80 cursor-pointer text-sm ${
                                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                }`}>Settings</li></Link>
                                <Link to="/Signup"><li className={`px-4 py-3 hover:bg-red-500 cursor-pointer text-sm ${
                                    isDark ? 'hover:bg-red-600' : 'hover:bg-red-100 text-red-600'
                                }`}>Logout</li></Link>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            {/* Mobile Search Drawer */}
            {isSearchOpen && (
                <div className={`md:hidden fixed top-14 left-0 right-0 p-4 border-b z-20 transition-colors ${
                    isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Search...'
                            autoFocus
                            className={`pl-11 pr-4 py-2 rounded-lg outline-none border focus:border-blue-500 w-full ${
                                isDark 
                                    ? 'bg-gray-800 text-white border-gray-600' 
                                    : 'bg-gray-100 text-gray-900 border-gray-300'
                            }`}
                        />
                        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;