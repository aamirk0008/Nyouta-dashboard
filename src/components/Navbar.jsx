import React from 'react'

export default function Navbar({setIsMobileMenuOpen}) {
  return (
    <div className="w-full h-[10%] py-2 px-8 bg-slate-200 flex justify-between ">
        <div className="flex items-center"><h1 className=' capitalize lg:text-2xl text-gray-500 font-semibold flex items-center '><span className='me-4 block lg:hidden'  ><i class="fa-solid fa-bars" onClick={()=>{setIsMobileMenuOpen(true)}}></i></span>WELCOME!</h1></div>
        <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-300 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text" className='bg-gray-300 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none' placeholder='search...' /></div>
        </div>
    </div>
  )
}
