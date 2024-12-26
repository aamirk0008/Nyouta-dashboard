import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';


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
    <div className='flex w-[100vw] h-[100vh] bg-slate-200 overflow-hidden'>
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="h-full w-full lg:w-[95%] ">
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><Outlet /></div>
        
      </div>
      
    </div>
   </>
    
  )
}


export default App
