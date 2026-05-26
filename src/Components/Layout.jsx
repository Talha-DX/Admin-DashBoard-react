import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    // Handle window resize
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true)
            } else {
                setIsSidebarOpen(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className='flex h-screen bg-gray-900 overflow-hidden'>
            {/* Sidebar */}
            <SideBar 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
            />

            {/* Main Section */}
            <div className='flex flex-col flex-1 overflow-hidden'>
                {/* Navbar */}
                <NavBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

                {/* Page Content */}
                <main className='flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-100'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout