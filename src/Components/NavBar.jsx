import React from 'react'
import {
    AlignJustify,
    Search,
    Moon,
    Bell,
    ChevronDown,
    ChevronUp,
} from 'lucide-react'

const NavBar = ({ onMenuClick }) => {
    const [open, setOpen] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)

    return (
        <>
            <header className='bg-gray-800 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-gray-700 sticky top-0 z-30'>
                
                {/* Left */}
                <div className='flex items-center gap-2 sm:gap-4'>
                    {/* Mobile menu button - visible only on mobile */}
                    <button 
                        onClick={onMenuClick}
                        className='p-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition lg:hidden'
                    >
                        <AlignJustify className='w-5 h-5' />
                    </button>

                    {/* Desktop search */}
                    <div className='relative hidden md:block'>
                        <input
                            type="text"
                            placeholder='Search...'
                            className='bg-gray-700 text-white pl-11 pr-4 py-2 rounded-lg outline-none border border-gray-600 focus:border-blue-500 w-64 lg:w-80'
                        />
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                    </div>

                    {/* Mobile search button */}
                    <button 
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className='p-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition md:hidden'
                    >
                        <Search className='w-5 h-5' />
                    </button>
                </div>

                {/* Right */}
                <div className='flex items-center gap-2 sm:gap-4 relative'>
                    <button className='p-2 border border-gray-600 rounded-full hover:bg-gray-700 transition'>
                        <Moon className='w-4 h-4 sm:w-5 sm:h-5' />
                    </button>

                    <button className='p-2 border border-gray-600 rounded-full hover:bg-gray-700 transition relative'>
                        <Bell className='w-4 h-4 sm:w-5 sm:h-5' />
                        <span className='absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full'></span>
                    </button>

                    {/* Profile */}
                    <div
                        onClick={() => setOpen(!open)}
                        className='flex items-center gap-2 bg-gray-700 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-600 transition'
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
                            <ChevronUp className='w-3 h-3 sm:w-4 sm:h-4' />
                        ) : (
                            <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4' />
                        )}
                    </div>

                    {/* Dropdown */}
                    {open && (
                        <div className='absolute top-12 sm:top-16 right-0 w-48 bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-600 z-50'>
                            <ul>
                                <li className='px-4 py-3 hover:bg-gray-600 cursor-pointer text-sm'>
                                    Profile
                                </li>
                                <li className='px-4 py-3 hover:bg-gray-600 cursor-pointer text-sm'>
                                    Settings
                                </li>
                                <li className='px-4 py-3 hover:bg-red-500 cursor-pointer text-sm'>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            {/* Mobile search drawer */}
            {isSearchOpen && (
                <div className='md:hidden fixed top-14 left-0 right-0 bg-gray-800 p-4 border-b border-gray-700 z-20 animate-slideDown'>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Search...'
                            autoFocus
                            className='bg-gray-700 text-white pl-11 pr-4 py-2 rounded-lg outline-none border border-gray-600 focus:border-blue-500 w-full'
                        />
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar