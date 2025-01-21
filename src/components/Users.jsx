import React, { useEffect, useState } from 'react'
import ErrorComponent from './ErrorComponent';
import { useNavigate } from 'react-router-dom';


  






const Users = () => {

  const[UserData, setUserData] = useState([{name:"", gender:"", role:"" , email:""}])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(UserData);
  const route = useNavigate()  

 useEffect(() => {
  const fetchUserdata = async () => {
    try {
      const response = await fetch('https://nyouta-vehl.onrender.com/api/v1/auth/getAllUsers', {
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
      setUserData(data.users); 
      setFilteredUsers(data.users)
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

//for by pass cors error
const fetchImage = async (url) => {
  try {
    const response = await fetch(url);

    // Check if the fetch request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Convert the response to a Blob (binary large object)
    const blob = await response.blob();

    // Create a local URL for the image Blob
    const imageUrl = URL.createObjectURL(blob);

    // Example: Setting the image as the src of an <img> element
   return imageUrl
    // Append the image to the body
  } catch (error) {
    console.error("Error fetching the image:", error);
  }
};
// console.log(fetchImage("https://lh3.googleusercontent.com/a/ACg8ocK3jXBkiV3_H6jDquXaj4z2O_1QkLK7wGMQHzXHv_pl4vegyR0=s96-c"))

const handleSearch = (e) => {
  const term = e.target.value.toLowerCase();
  setSearchTerm(term);
  const filtered = UserData.filter((user) =>
    user.name.toLowerCase().includes(term)
  );
  setFilteredUsers(filtered);
};


const UserDetailsHandler = (id) => {
route(`/users/${id}`)
}

if (loading) {
return (
  <div className="px-4 sm:px-8 py-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row justify-between items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All User List
          </h1>
          <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-200 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text"  className='bg-slate-200 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none font-avalonB' placeholder='search...' /></div>
        </div>
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
        <div className="flex sm:flex-row justify-between items-center  p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All User List
          </h1>
          <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-200 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text"  onChange={(e)=>{handleSearch(e)}} className='bg-slate-200 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none font-avalonB' placeholder='search...' /></div>
        </div>
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
              {filteredUsers.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50 cursor-pointer" 
                  onClick={()=>{UserDetailsHandler(item._id)}}
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