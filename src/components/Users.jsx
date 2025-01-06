import React, { useEffect, useState } from 'react'
import ErrorComponent from './ErrorComponent';

  






const Users = () => {

  const[UserData, setUserData] = useState([{name:"", gender:"", role:"" , email:""}])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 useEffect(() => {
  const fetchUserdata = async () => {
    try {
      const response = await fetch('https://nyouta.onrender.com/api/v1/auth/getAllUsers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Users:', data);
      setUserData(data.users); // Assuming the API response has a `users` field
    } catch (error) {
      setError(error.message)
      console.error('Error fetching users:', error.message);
    }
    finally{
      setLoading(false)
    }
  };

  fetchUserdata(); // Call the function when the component mounts
}, []); 


if (loading) {
return (
  <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All User List
          </h1>
          
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[650px] lg:max-h-[400px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100  border-b font-avalonN">
              <tr>
              <th scope="col" className="px-4 py-3">
                  Profile
                </th>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Gender
                </th>
                <th scope="col" className="px-4 py-3">
                Contact
                </th>
                <th scope="col" className="px-4 py-3">
                  Verified
                </th>
                <th scope="col" className="px-4 py-3">
                Website Created
                </th>
              </tr>
            </thead>
            <tbody>
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td
                    className="px-4 py-3 "
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 text-slate-200">a</div>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 truncate p-1 "
                  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 " ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                </tr>
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td
                    className="px-4 py-3 "
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 text-slate-200">a</div>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 truncate p-1 "
                  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 " ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                </tr>
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td
                    className="px-4 py-3 "
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 text-slate-200">a</div>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 truncate p-1 "
                  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 " ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                </tr>
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td
                    className="px-4 py-3 "
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 text-slate-200">a</div>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 truncate p-1 "
                  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 " ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1"  ><div className="h-full w-full text-slate-200 bg-slate-200 ">a</div></td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
)  
}


if (error) {
  return (
  <div className="px-4 sm:px-8 py-4">
    <ErrorComponent/>
  </div>
  );
}




  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All User List
          </h1>
          
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[650px] lg:max-h-[400px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100  border-b font-avalonN">
              <tr>
              <th scope="col" className="px-4 py-3">
                  Profile
                </th>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Gender
                </th>
                <th scope="col" className="px-4 py-3">
                Contact
                </th>
                <th scope="col" className="px-4 py-3">
                  Verified
                </th>
                <th scope="col" className="px-4 py-3">
                Website Created
                </th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td
                    className="px-4 py-3 "
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden"><img className='h-full w-full' src={item.avatar} alt="Profile" /></div>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 truncate"
                  >
                    {item.name}
                  </td>
                  <td className="px-4 py-3 " >{item.gender}</td>
                  <td className="px-4 py-3" >{item.email}</td>
                  <td className="px-4 py-3"  >{item.isVerified ? "true" : "false" }</td>
                  <td className="px-4 py-3"  >{item.isWebsiteCreated ? "true" : "false" }</td>
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