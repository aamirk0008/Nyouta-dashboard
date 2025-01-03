import React, { useEffect, useState } from 'react'

const Dashboard = ({setIsMobileMenuOpen}) => {


  const [ProductData, setProductData] = useState([])
  const [Orders, setOrders] = useState([])

    useEffect(() => {
       const fetchProductdata = async () => {
         try {
           const response = await fetch('http://localhost:5000/api/v1/products/products', {
             method: 'GET',
             headers: {
               'Content-Type': 'application/json',
             },
           });
     
           if (!response.ok) {
             throw new Error(`Error: ${response.status} - ${response.statusText}`);
           }
     
           const data = await response.json();
           setProductData(data);
         } catch (error) {
           console.error('Error fetching users:', error.message);
         }
       };
     
       fetchProductdata(); 
     }, []); 

     useEffect(() => {
         const fetchAllOrders = async () => {
           try {
             const response = await fetch("http://localhost:5000/api/v1/order/get-all-orders");
     
             if (!response.ok) {
               const errorData = await response.json();
               throw new Error(errorData.message || "Failed to fetch orders");
             }
     
             const ordersData = await response.json();
             setOrders(ordersData);
           } catch (err) {
             console.log(err);
             
           } 
         };
     
         fetchAllOrders();
       }, []);
    
     
  return (
    <div className=" h-[540px] w-full bg-slate-200 overflow-y-scroll no-scrollbar    " onClick={()=>{setIsMobileMenuOpen(false)}}>
    
    <div className='w-full  py-2 px-8' > 
      <div className="flex w-full flex-wrap gap-4 ">
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></path><path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></path></svg></div>     
            <div className=""><h1 className="text-lg text-gray-500 font-avalonN">Total Orders</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >{Orders.length}</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm'>View More</h2></div>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><i class="fa-brands fa-product-hunt text-4xl text-gray-800 "></i></div>     
            <div className=""><h1 className=" text-lg text-gray-500 font-avalonN">Total Products</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >{ProductData.length}</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm' >View More</h2></div>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><i class="fa-solid fa-globe text-4xl text-gray-800"></i></div>     
            <div className=""><h1 className="text-lg text-gray-500 font-avalonN">Websites</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >0</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm' >View More</h2></div>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white shadow-md w-full md:w-[45%] flex-auto flex flex-col">
        <div className="h-[70%] flex justify-between py-4 px-4">
            <div className="bg-[#FFDACB] rounded-lg p-2 h-full w-20 flex justify-center items-center"><i class="fa-solid fa-money-check-dollar text-4xl text-gray-800"></i></div>     
            <div className=""><h1 className="text-lg text-gray-500 font-avalonN">Booked Revenue</h1>
            <p className='text-2xl font-bold  text-end text-gray-600' >150</p></div>     
        </div>
        <div className="h-[30%] flex justify-between items-center bg-[#F6F8FB] py-2 px-4 ">
          <div><h2 className='text-sm'><span className='text-green-500'><i class="fa-solid fa-angle-up"></i> 2.3% </span>last week</h2></div>
          <div><h2 className='text-sm'>View More</h2></div>
        </div>
      </div>
      </div>
    </div>
    <div className="bg-white rounded-lg mx-8 mt-4 h-[400px] shadow-md">
        <div className="flex sm:flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            Recent Orders 
          </h1>
          
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[650px] lg:max-h-[400px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100 uppercase border-b font-avalonN">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-4 py-3">
                  Created at
                </th>
                <th scope="col" className="px-4 py-3">
                payment status
                </th>
                <th scope="col" className="px-4 py-3">
                Payment Id
                </th>
                <th scope="col" className="px-4 py-3">
                  total
                </th>
                <th scope="col" className="px-4 py-3">
                items
                </th>
              </tr>
            </thead>
            <tbody>
              {Orders.slice(0,10).map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate">#{item.orderId}</td>
                  <td className="px-4 py-3">{item.createdAt}</td>
                  <td className="px-4 py-3">{item.paymentStatus}</td>
                  <td className="px-4 py-3">{item.paymentId}</td>
                  <td className="px-4 py-3">{item.totalPrice}</td>
                  <td className="px-4 py-3">{item.products.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  )
}

export default Dashboard