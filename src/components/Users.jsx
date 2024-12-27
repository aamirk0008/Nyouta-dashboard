import React from 'react'


const data = [
  {
    name: "John",
    created: "2023-01-15T10:30:00Z",
    birth: "1995-06-21",
    contact: "+1 555-1234"
  },
  {
    name: "Jane",
    created: "2023-05-10T14:45:00Z",
    birth: "1988-11-03",
    contact: "+1 555-5678"
  },
  {
    name: "Alice",
    created: "2023-08-20T09:00:00Z",
    birth: "2000-03-12",
    contact: "+1 555-9101"
  },
  {
    name: "Bob",
    created: "2023-10-05T18:15:00Z",
    birth: "1992-07-19",
    contact: "+1 555-1122"
  },
  {
    name: "Emily",
    created: "2023-12-01T16:20:00Z",
    birth: "1998-09-25",
    contact: "+1 555-3344"
  }
]



const Users = () => {
  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left">
            All User List
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
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Created
                </th>
                <th scope="col" className="px-4 py-3">
                  Birth
                </th>
                <th scope="col" className="px-4 py-3">
                  Contact
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 truncate"
                  >
                    {item.name}
                  </td>
                  <td className="px-4 py-3">{item.created}</td>
                  <td className="px-4 py-3">{item.birth}</td>
                  <td className="px-4 py-3">{item.contact}</td>
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

export default Users