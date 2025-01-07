import React from 'react'
import { useParams } from 'react-router-dom'


export default function UserData() {
  const data = useParams()
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
  


   useEffect(() => {
    const fetchUserdata = async () => {
      try {
        const response = await fetch(`https://nyouta.onrender.com/api/v1/auth/getUser/${data.id}`, {
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


  return (
    <div className="px-4 sm:px-8 py-1 sm:py-1">
        <div className="w-full flex  gap-4 rounded-lg mb-4 ">
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg ">
                <div className="h-40 w-40  border-2 border-red-500 bg-gray-600 rounded-full overflow-hidden">
                  
                </div>
                <h1 className='text-2xl font-bold text-gray-800 mt-6 font-avalonN'>Roshan Tambe</h1>
                <p className='text-gray-500 text-xl  font-semibold font-avalonN '>User</p>
            </div>
            <div className="bg-white p-4 flex-auto rounded-lg shadow-lg">
              <div>
              <h1 className='font-semibold text-gray-800 mb-2'>Parsonal Information</h1>
              <hr  />
              </div>
              <div className="flex gap-4 p-2 ">
              <div className="flex-auto">
                <h1 className='font-semibold text-gray-700 px-2'>First Name</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Roshan</p>
              </div>
              <div className=" flex-auto">
                <h1 className='font-semibold text-gray-700 px-2'>Last Name</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Tambe</p>
              </div>
              <div className="flex-auto ">
                <h1 className='font-semibold text-gray-700 px-2'>Gender</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Male</p>
              </div>
              <div className="flex-auto ">
                <h1 className='font-semibold text-gray-700 px-2'>Street Name</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Chawki Road</p>
              </div>
             
              </div>
              <div className="flex gap-4 p-2 ">
              <div className="flex-auto">
                <h1 className='font-semibold text-gray-700 px-2'>Appartment</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Shobha Appartment</p>
              </div>
              <div className=" flex-auto">
                <h1 className='font-semibold text-gray-700 px-2'>City</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Mumbai</p>
              </div>
              <div className="flex-auto ">
                <h1 className='font-semibold text-gray-700 px-2'>State</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>Maharashtra</p>
              </div>
              <div className="flex-auto ">
                <h1 className='font-semibold text-gray-700 px-2'>Pin Code</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>361873</p>
              </div>
              
              </div>
              <div className="flex gap-4 p-2 ">
              <div className="flex-auto">
                <h1 className='font-semibold text-gray-700 px-2'>Contact No</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>+91 3465662548</p>
              </div>
              <div className=" flex-auto">
                <h1 className='font-semibold text-gray-700 px-2'>Email</h1>
                <p className='bg-slate-100 p-2 rounded-lg'>roshan@gmail.com</p>
              </div>
              
              </div>

            </div>
        </div>
        <div className="w-full flex  gap-4 rounded-lg mb-4 bg-white p-4 shadow-lg ">
        <h1 className='font-semibold text-gray-800 mb-2'>Cart</h1>
        <hr />
        <div className="">

        </div>

        </div>
    </div>
  )
}
