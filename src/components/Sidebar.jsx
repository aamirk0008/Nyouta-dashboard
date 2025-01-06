import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/nyouta-logo2.png";

const Sidebar = ( { isMobileMenuOpen, setIsMobileMenuOpen, setIsLogin  } ) => {
    const location = useLocation();

  const [isLogoutLoading, setIsLogoutLoading] = useState(false);
  const [Click, setClick] = useState(false);
  const [SideBar, setSideBar] = useState(false);


  const click = () => {
    if(click === false){
      setClick(true)
        
    }
    else{setClick(false)}

  }

  const sidebarHandler = () => {
    if(SideBar){
      console.log(true);
      setSideBar(false)
    }
    else{
      console.log(false);
      setSideBar(true)
      
    }
  }

  const handleLogout = () => {
    setIsLogoutLoading(true);
    // Simulate logout process
    setTimeout(() => {
      setIsLogoutLoading(false);
      setIsLogin(false)
      document.cookie = "token=; path=/; max-age=0";
      // Add actual logout logic here
    }, 1000);
  };

  return (
    <div className={`bg-amber-950 absolute z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-56" } lg:static lg:-translate-x-0 text-white group  space-y-6 py-7 px-2 h-full  lg:w-[5%]  hover:w-[20%] duration-300 transition-all ease-in`}>
      
      <div className="flex flex-col items-center  justify-start px-4">
        <div className='h-8 min-w-16'> <img className='h-full w-full' src={logo} alt="" /> </div>
        <span className="text-2xl  font-avalonN lg:hidden group-hover:block ">Nyouta</span>
        
       
      </div>
      <nav>
        <Link
          to="/"
          className={` py-2.5 px-4 rounded transition duration-200 flex items-center gap-2 ${location.pathname === '/' ? 'text-white ' : 'hover:text-white'}`}
          onClick={() => { setIsMobileMenuOpen(false); setClick(false)}}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill={` ${location.pathname === '/' ? '#FF6C2F ' : 'white'}`} d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6z" opacity=".5"></path><path fill={` ${location.pathname === '/' ? '#FF6C2F ' : 'white'}`} d="M2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></path><path fill={` ${location.pathname === '/' ? '#FF6C2F ' : 'white'}`} d="M2 18.5c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" opacity=".5"></path></svg> <span className='lg:hidden group-hover:block font-avalonB'>Dashboard</span> 
        </Link>
        <div
          className={` py-2.5 px-4 rounded transition duration-200 cursor-pointer flex items-center justify-between ${Click ? 'text-white ' : 'hover:text-white'}`}
          onClick={() => setClick(!Click)}
        >
          <div className=" flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.777 18.265v-7.97c0-.683 0-1.025-.132-1.326c-.131-.3-.378-.523-.871-.968l-.186-.167C3.532 6.882 3.004 6.405 3 5.716c-.004-.69.464-1.122 1.401-1.988q.214-.197.418-.362c.472-.378 1.138-.792 1.648-1.09a2.05 2.05 0 0 1 1.567-.205l.49.129c.389.102.727.353.949.703c.6.948 1.564 1.423 2.527 1.423V22c-1.467 0-2.724-.148-3.716-.33c-1.073-.198-1.61-.296-2.058-.858c-.45-.562-.45-1.224-.45-2.547" clip-rule="evenodd"></path><path fill="currentColor" d="M18.223 18.265v-7.97c0-.683 0-1.025.132-1.326c.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118c.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-.6.948-1.564 1.423-2.527 1.423V22c1.467 0 2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858c.448-.562.448-1.224.448-2.547" opacity=".5"></path></svg> <span className="lg:hidden group-hover:block font-avalonB">Products</span></div>
          <span className="ml-2 lg:hidden group-hover:block"><i className={`fa-solid fa-angle-down ${Click ? "rotate-180 " : "rotate-0"} duration-200 transition `}></i></span>
        </div>
        {/* Dropdown Menu */}
        {Click && (
          <div className=" mt-2 space-y-2 lg:hidden group-hover:block ">

            <Link
              to="/products/list"
              className={` py-2 px-4 rounded transition font-avalonB duration-200 flex gap-2  ${location.pathname === '/products/list' ? 'text-white ' : 'hover:text-white'}`}
              onClick={() => {setIsMobileMenuOpen(false)}}
            >
            <div className="h-full w-4"></div>  Product List
            </Link>
            <Link
              to="/products/add"
              className={` py-2 px-4 rounded transition duration-200 flex gap-2 ${location.pathname === '/products/add' ? 'text-white ' : 'hover:text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
             <div className="h-full w-4"></div> Add Product
            </Link>
          </div>
        )}
        <Link
          to="/users"
          className={` py-2.5 px-4 rounded transition font-avalonB duration-200 flex items-center gap-2  ${location.pathname === '/users' ? 'text-white ' : 'hover:text-white'}`}
          onClick={() =>{ setIsMobileMenuOpen(false); setClick(false)}}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="10" cy="6.75" r="4" fill="currentColor"></circle><ellipse cx="10" cy="17.75" fill="currentColor" opacity=".5" rx="7" ry="4"></ellipse><path fill="currentColor" fill-rule="evenodd" d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002l.004.002l.01.006l.113.076c.07.049.166.12.277.212c.222.185.512.462.802.838c.582.758 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.363.27l-.028.018l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.041-.027q.06-.042.177-.136c.152-.128.362-.326.573-.6c.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.573-.6a3 3 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001l.004.002l.008.004l.022.012a2 2 0 0 1 .233.153c.136.102.31.254.48.467c.349.436.664 1.099.664 2.031s-.316 1.595-.664 2.031a2.7 2.7 0 0 1-.654.586l-.06.034l-.02.012l-.01.004l-.003.002l-.002.001l-.33-.657l.329.658a.75.75 0 0 1-.685-1.335l.003-.001l.052-.036c.052-.04.13-.106.209-.205c.15-.189.335-.526.335-1.094s-.184-.905-.335-1.094a1.2 1.2 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1" clip-rule="evenodd"></path></svg> <span className='lg:hidden group-hover:block font-avalonB'>Users</span>
        </Link>
        <Link
          to="/orders"
          className={` py-2.5 px-4 rounded transition duration-200 flex items-center gap-2 ${location.pathname === '/Orders' ? 'text-white ' : 'hover:text-white'}`}
          onClick={() =>{ setIsMobileMenuOpen(false); setClick(false)}}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></path><path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></path></svg>  <span className='lg:hidden group-hover:block font-avalonB'>Orders</span>
        </Link>
      </nav>
      <div className="px-4 mt-auto lg:hidden group-hover:block">
        <button
          onClick={handleLogout}
          disabled={isLogoutLoading}
          className={`w-full px-4 py-2 text-center font-avalonB bg-red-600 hover:bg-red-700 rounded-md ${isLogoutLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLogoutLoading ? 'Logging out...' : 'Logout'}
        </button>
      </div>
    </div>
  )
}

export default Sidebar