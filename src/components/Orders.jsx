import React, { useEffect, useState } from 'react'
import ErrorComponent from './ErrorComponent';


const Orders = () => {

  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await fetch("https://nyouta-vehl.onrender.com/api/v1/order/get-all-orders");

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch orders");
        }

        const ordersData = await response.json();
        setOrders(ordersData);
        setFilteredOrders(ordersData)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllOrders();
  }, []);


  const handleSearch = (e) => {

    
    
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orders.filter((order) =>
      order?.orderId?.toString().toLowerCase().includes(term)
    );

    console.log(filtered);
    
    setFilteredOrders(filtered);
  };

console.log(filteredOrders);

  if (loading) {
    return  (<div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row justify-between items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All Order List
          </h1>
          <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-200 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text" onChange={(e)=>{handleSearch(e)}} className='bg-slate-200 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none font-avalonB' placeholder='search...' /></div>
        </div>
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
              
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
                <tr
                 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"><div className="w-full h-full bg-slate-200 text-slate-200 ">a</div></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>);
  }

  if (error) {
    return <div className="px-4 sm:px-8 py-4">
      <ErrorComponent/>
    </div>;
  }

  
  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row justify-between items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All Order List
          </h1>
          <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-200 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text" onChange={(e)=>{handleSearch(e)}} className='bg-slate-200 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none font-avalonB' placeholder='search...' /></div>
        </div>
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
              {filteredOrders.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate">#{item.orderId}</td>
                  <td className="px-4 py-3">{new Date(item.createdAt).toLocaleDateString('en-in', {day: '2-digit', month:'short', year:'numeric' })}</td>
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

export default Orders