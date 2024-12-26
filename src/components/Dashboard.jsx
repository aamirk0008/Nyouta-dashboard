import React, { useEffect, useState } from 'react'

const Dashboard = ({setIsMobileMenuOpen}) => {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalSold: 0,
        inventory: []
      });
    
      useEffect(() => {
        // Simulate API call
        setTimeout(() => {
          setStats({
            totalProducts: 150,
            totalSold: 1234,
            inventory: [
              { id: 1, name: 'Product A', stock: 50 },
              { id: 2, name: 'Product B', stock: 30 },
              { id: 3, name: 'Product C', stock: 20 },
              { id: 4, name: 'Product D', stock: 40 },
              { id: 5, name: 'Product E', stock: 10 },
            ]
          });
        }, 1000);
      }, []);
  return (
    <div className=" h-[90%] w-full bg-slate-200 " onClick={()=>{setIsMobileMenuOpen(false)}}>
    
    <div className='w-full h-full   py-2 px-8' > 
      <div className="flex w-full flex-wrap gap-4 ">
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></path><path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></path></svg></div>     
            <div className=""><h1 className="text-lg text-gray-500">Total Orders</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >150</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm'>View More</h2></div>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></path><path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></path></svg></div>     
            <div className=""><h1 className=" text-lg text-gray-500">Total Products</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >150</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm' >View More</h2></div>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></path><path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></path></svg></div>     
            <div className=""><h1 className="text-lg text-gray-500">Deals</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >150</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm' >View More</h2></div>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></path><path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></path></svg></div>     
            <div className=""><h1 className="text-lg text-gray-500">Booked Revenue</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >150</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm'>View More</h2></div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard