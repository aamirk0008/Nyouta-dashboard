import React, { useEffect, useState } from 'react'


// const data = [
//   {
//     name: "John",
//     created: "2023-01-15T10:30:00Z",
//     birth: "1995-06-21",
//     contact: "+1 555-1234"
//   },
//   {
//     name: "Jane",
//     created: "2023-05-10T14:45:00Z",
//     birth: "1988-11-03",
//     contact: "+1 555-5678"
//   },
//   {
//     name: "Alice",
//     created: "2023-08-20T09:00:00Z",
//     birth: "2000-03-12",
//     contact: "+1 555-9101"
//   },
//   {
//     name: "Bob",
//     created: "2023-10-05T18:15:00Z",
//     birth: "1992-07-19",
//     contact: "+1 555-1122"
//   },
//   {
//     name: "Emily",
//     created: "2023-12-01T16:20:00Z",
//     birth: "1998-09-25",
//     contact: "+1 555-3344"
//   }
// ]



const Users = () => {

 const[UserData, setUserData] = useState([{name:"", gender:"", role:"" , email:""}])

 useEffect(() => {
  const fetchUserdata = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/getAllUsers', {
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
      console.error('Error fetching users:', error.message);
    }
  };

  fetchUserdata(); // Call the function when the component mounts
}, []); 

console.log(UserData);



  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left">
            All User List
          </h1>
          
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[650px] lg:max-h-[400px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100  border-b">
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