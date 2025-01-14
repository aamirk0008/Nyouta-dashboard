import React from 'react'

export default function Navbar({setIsMobileMenuOpen}) {
  return (
    <div className="w-full h-[10%] py-2 px-8 bg-slate-200 flex justify-between ">
        <div className="flex items-center"><h1 className=' capitalize lg:text-2xl text-gray-500 font-avalonN flex items-center '><span className='me-4 block lg:hidden'  ><i className="fa-solid fa-bars" onClick={()=>{setIsMobileMenuOpen(true)}}></i></span>WELCOME!</h1></div>
        
    </div>
  )
}
