import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ( { isMobileMenuOpen, setIsMobileMenuOpen } ) => {
    const location = useLocation();

  const [isLogoutLoading, setIsLogoutLoading] = useState(false);


  const handleLogout = () => {
    setIsLogoutLoading(true);
    // Simulate logout process
    setTimeout(() => {
      setIsLogoutLoading(false);
      // Add actual logout logic here
    }, 1000);
  };

  return (
    <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}  md:translate-x-0 transition duration-200 ease-in-out z-30`}>
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="absolute top-1 right-1 text-white"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="flex items-center space-x-2 px-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
        <span className="text-2xl font-extrabold">Admin</span>
      </div>
      <nav>
        <Link
          to="/"
          className={`block py-2.5 px-4 rounded transition duration-200 ${location.pathname === '/' ? 'bg-blue-500 hover:bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Dashboard
        </Link>
        <Link
          to="/products"
          className={`block py-2.5 px-4 rounded transition duration-200 ${location.pathname === '/products' ? 'bg-blue-500 hover:bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/users"
          className={`block py-2.5 px-4 rounded transition duration-200 ${location.pathname === '/users' ? 'bg-blue-500 hover:bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Users
        </Link>
      </nav>
      <div className="px-4 mt-auto">
        <button
          onClick={handleLogout}
          disabled={isLogoutLoading}
          className={`w-full px-4 py-2 text-center bg-red-600 hover:bg-red-700 rounded-md ${isLogoutLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLogoutLoading ? 'Logging out...' : 'Logout'}
        </button>
      </div>
    </div>
  )
}

export default Sidebar