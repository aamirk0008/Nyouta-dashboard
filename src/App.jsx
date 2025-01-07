import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import UserData from './components/UserData';
import Orders from './components/Orders';
import AddProducts from './components/AddProducts';
import EditProducts from './components/EditProducts';
import ProductList from './components/ProductLists';




function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token === "static-admin-token") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []); 

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    <Routes>
    <>
   { !isLogin ? <Route path="/" element= { <Login setIsLogin={setIsLogin} />}  /> :

<>
   <Route path="/dashboard" element={ <div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><Dashboard/></div>
        
      </div>
      
    </div> }/>
    <Route path="/users" element={<div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><Users/></div>
        
      </div>
      
    </div>} />
    <Route path="/users/:id" element={<div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><UserData/></div>
        
      </div>
      
    </div>} />
    <Route path="/orders" element={<div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><Orders/></div>
        
      </div>
      
    </div>} />
    <Route path="/products/add" element={<div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><AddProducts/></div>
        
      </div>
      
    </div>} />
    <Route path="/products/edit/:id" element={<div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><EditProducts/></div>
        
      </div>
      
    </div>} />
    <Route path="/products/list" element={<div className='flex w-[100vw] h-[100vh] bg-slate-200 '>
      
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsLogin={setIsLogin}/>
      <div className="h-full w-full lg:w-[95%] ">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-black  opacity-40 absolute h-full w-full z-40`} onClick={()=>{setIsMobileMenuOpen(false)}}></div>
        <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <div className=""><ProductList/></div>
        
      </div>
      
    </div>} /> </>}
    
   </>
   </Routes>
   </BrowserRouter>
  )
}


export default App
