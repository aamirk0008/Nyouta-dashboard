import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);






  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {!isLogin ?  <Login setIsLogin={setIsLogin} /> :
    <div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><Outlet /></div>
        
      </div>
      
    </div>}
   </>
    
  )
}


export default App
