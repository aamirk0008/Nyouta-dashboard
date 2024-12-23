import React, { useEffect, useState } from 'react'

const Dashboard = () => {
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
    <div className="space-y-6 w-full">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Items Sold</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalSold}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Inventory Items</h3>
        <div className="overflow-x-auto -mx-4 sm:-mx-6">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stats.inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.stock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard