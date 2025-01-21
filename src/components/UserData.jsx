import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function UserData() {
  const userid = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    user: { name: "", role: " ", gender: "", avatar: "" , address:[ {
      firstName: "",
      lastName: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      pincode: "",
      contactNo: "",
      email: "",
    }]},
  });
 
  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        const response = await fetch(
          `https://nyouta.onrender.com/api/v1/auth/getUser/${userid.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const user = await response.json();

        
        setData({
          user: { name: user.user.name, role:user.user.role, gender: user.user.gender, avatar: user.user.avatar , address:[ {
            firstName: "",
            lastName: "",
            streetName: "",
            apartment: "",
            city: "",
            state: "",
            pincode: "",
            contactNo: "",
            email: "",
          }]},
        });

      } catch (error) {
        setError(error.message);
        console.error("Error fetching users:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserdata(); // Call the function when the component mounts
  }, []);

  
  
  return (
    <div className="px-4 sm:px-8 py-4  h-[800px] sm:h-[890px] lg:h-[540px] overflow-y-scroll no-scrollbar">
      <div className="w-full flex flex-col lg:flex-row gap-6 rounded-lg mb-6">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="h-40 w-40 border-4 border-red-500 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data.user.avatar}
              alt="User Avatar"
            />
          </div>
          <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mt-6 text-center">
            {data.user.name}
          </h1>
          <p className="text-gray-500 text-sm lg:text-base mt-2">
            <span className="font-medium">Joined:</span>{" "}
            {new Date(data.user.createdAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <p className="text-lg font-semibold text-gray-600 mt-4">
            {data.user.role}
          </p>
        </div>

        {/* Personal Information */}
        <div className="bg-white p-6 flex-auto rounded-lg shadow-lg">
          <h1 className="font-semibold text-gray-800 text-xl mb-4">
            Personal Information
          </h1>
          <hr className="mb-4" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Information Items */}
            {[
              {
                label: "First Name",
                forCopy: data.user.address[0].firstName ,
                value: data.user.address[0].firstName || "---",
              },
              {
                label: "Last Name",
                forCopy: data.user.address[0].lastName,
                value: data.user.address[0].lastName || "---",
              },
              {
                label: "Gender",
                forCopy: data.user.gender,
                value: data.user.gender || "---",
              },
              {
                label: "Street Name",
                forCopy: data.user.address[0].streetName,
                value: data.user.address?.[0]?.streetName
                  ? `${data.user.address[0].streetName.slice(0, 20)}${
                      data.user.address[0].streetName.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
              {
                label: "Apartment",
                forCopy: data.user.address?.[0]?.apartment || "----",
                value: data.user.address?.[0]?.apartment
                  ? `${data.user.address[0].apartment.slice(0, 20)}${
                      data.user.address[0].apartment.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
              {
                label: "City",
                forCopy: data.user.address[0].city,
                value: data.user.address?.[0]?.city
                  ? `${data.user.address[0].city.slice(0, 20)}${
                      data.user.address[0].city.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
              {
                label: "State",
                forCopy: data.user.address[0].state,
                value: data.user.address[0].state || "---",
              },
              {
                label: "Pin Code",
                forCopy: data.user.address[0].pincode,
                value: data.user.address[0].pincode || "---",
              },
              {
                label: "Contact No",
                forCopy: data.user.address[0].contactNo,
                value: data.user.address[0].contactNo || "---",
              },
              {
                label: "Email",
                forCopy: data.user.address[0].email,
                value: data.user.address?.[0]?.email
                  ? `${data.user.address[0].email.slice(0, 20)}${
                      data.user.address[0].email.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-100 p-4 cursor-pointer rounded-lg hover:scale-105 hover:shadow-md hover:-translate-y-1 duration-200 transition shadow-sm"
              >
                <h1 className="font-semibold text-gray-700 mb-1">
                  {item.label}
                </h1>
                <p className="text-gray-900 flex justify-between">
                  {item.value}
                  <span className="">
                    <i
                      class="fa-regular fa-copy text-gray-500"
                      onClick={() => {
                        navigator.clipboard.writeText(item.forCopy);
                        toast.success(`${item.label} copied successfully`);
                      }}
                    ></i>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
