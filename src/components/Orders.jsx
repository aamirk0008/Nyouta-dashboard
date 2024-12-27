import React from 'react'

const data = [
  {
    orderId: "ORD001",
    createdAt: "2023-12-01T10:30:00Z",
    customer: "John",
    priority: "High",
    total: "$250.00",
    paymentStatus: "Paid",
    items: [
      { productId: "P001", quantity: 2 },
      { productId: "P004", quantity: 1 }
    ],
    orderStatus: "Shipped"
  },
  {
    orderId: "ORD002",
    createdAt: "2023-12-02T14:15:00Z",
    customer: "Jane",
    priority: "Medium",
    total: "$450.00",
    paymentStatus: "Pending",
    items: [
      { productId: "P002", quantity: 1 },
      { productId: "P003", quantity: 1 },
      { productId: "P008", quantity: 1 }
    ],
    orderStatus: "Processing"
  },
  {
    orderId: "ORD003",
    createdAt: "2023-12-03T11:00:00Z",
    customer: "Alice",
    priority: "Low",
    total: "$77.00",
    paymentStatus: "Paid",
    items: [
      { productId: "P009", quantity: 1 }
    ],
    orderStatus: "Delivered"
  },
  {
    orderId: "ORD004",
    createdAt: "2023-12-04T08:30:00Z",
    customer: "Bob",
    priority: "High",
    total: "$532.00",
    paymentStatus: "Paid",
    items: [
      { productId: "P006", quantity: 2 },
      { productId: "P007", quantity: 1 }
    ],
    orderStatus: "Shipped"
  },
  {
    orderId: "ORD005",
    createdAt: "2023-12-05T15:45:00Z",
    customer: "Emily",
    priority: "Medium",
    total: "$198.00",
    paymentStatus: "Pending",
    items: [
      { productId: "P003", quantity: 1 }
    ],
    orderStatus: "Processing"
  }
]


const Orders = () => {
  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left">
            All Order List
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0">
            
            <select
              name="data"
              id="data"
              className="outline-none rounded-lg border px-2 py-1 text-sm"
            >
              <option value="this-month">This Month</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[650px] lg:max-h-[400px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100 uppercase border-b">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-4 py-3">
                  Created at
                </th>
                <th scope="col" className="px-4 py-3">
                  customer
                </th>
                <th scope="col" className="px-4 py-3">
                  Priority
                </th>
                <th scope="col" className="px-4 py-3">
                  total
                </th>
                <th scope="col" className="px-4 py-3">
                  payment status
                </th>
                <th scope="col" className="px-4 py-3">
                  items
                </th>
                <th scope="col" className="px-4 py-3">
                  order status
                </th>
                <th scope="col" className="px-4 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate">#{item.orderId}</td>
                  <td className="px-4 py-3">{item.createdAt}</td>
                  <td className="px-4 py-3">{item.customer}</td>
                  <td className="px-4 py-3">{item.priority}</td>
                  <td className="px-4 py-3">{item.total}</td>
                  <td className="px-4 py-3">{item.paymentStatus}</td>
                  <td className="px-4 py-3">{item.items.length}</td>
                  <td className="px-4 py-3">{item.orderStatus}</td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-blue-500 hover:underline text-sm" onClick={()=>{handleEdit(item.id)}}>
                      Edit
                    </button>
                  </td>
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