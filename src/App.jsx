import { useEffect, useState } from 'react'
import { Outlet, BrowserRouter as Route, Router, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Users from './components/Users';
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className='flex gap-8'>
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
      <div className='ml-72'>
          <Outlet/>

      </div>
    </div>
   </>
    
  )
}


export default App
