import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function UserData() {
  const userid = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    user: { name: "", role: " ", gender: "", avatar: "" },
  });
  const [personalData, setPersonalData] = useState([
    {
      firstName: "",
      lastName: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      pincode: "",
      contactNo: "",
      email: "",
    },
  ]);
  const [cartData, setCartData] = useState({
    cart: { products: [{ productId: { name: "" , image:[], price:''} }] },
  });
  console.log(userid.id);

  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/auth/getUser/${userid.id}`,
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
        console.log("Users:", user);
        setData(user);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching users:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserdata(); // Call the function when the component mounts
  }, []);

  useEffect(() => {
    const fetchUserAddressdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/address/get-addresses?userId=${userid.id}`,
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
        console.log("Users:", user);
        if (!user || user.length === 0) {
          setPersonalData([
            {
              firstName: "",
              lastName: "",
              streetName: "",
              apartment: "",
              city: "",
              state: "",
              pincode: "",
              contactNo: "",
              email: "",
            },
          ]); // Handle empty data gracefully
        } else {
          setPersonalData(user); // Normal case
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching users:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAddressdata(); // Call the function when the component mounts
  }, []);

  useEffect(() => {
    const fetchCartdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/cart/get-cart?userId=${userid.id}`,
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
        console.log("Users:", user);
        setCartData(user);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching users:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartdata(); // Call the function when the component mounts
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
                forCopy: personalData[0].firstName,
                value: personalData[0].firstName || "---",
              },
              {
                label: "Last Name",
                forCopy: personalData[0].lastName,
                value: personalData[0].lastName || "---",
              },
              {
                label: "Gender",
                forCopy: data.user.gender,
                value: data.user.gender || "---",
              },
              {
                label: "Street Name",
                forCopy: personalData[0].streetName,
                value: personalData?.[0]?.streetName
                  ? `${personalData[0].streetName.slice(0, 20)}${
                      personalData[0].streetName.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
              {
                label: "Apartment",
                forCopy: personalData?.[0]?.apartment || "----",
                value: personalData?.[0]?.apartment
                  ? `${personalData[0].apartment.slice(0, 20)}${
                      personalData[0].apartment.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
              {
                label: "City",
                forCopy: personalData[0].city,
                value: personalData?.[0]?.city
                  ? `${personalData[0].city.slice(0, 20)}${
                      personalData[0].city.length > 20 ? "..." : ""
                    }`
                  : "----"
              },
              {
                label: "State",
                forCopy: personalData[0].state,
                value: personalData[0].state || "---",
              },
              {
                label: "Pin Code",
                forCopy: personalData[0].pincode,
                value: personalData[0].pincode || "---",
              },
              {
                label: "Contact No",
                forCopy: personalData[0].contactNo,
                value: personalData[0].contactNo || "---",
              },
              {
                label: "Email",
                forCopy: personalData[0].email,
                value: personalData?.[0]?.email
                  ? `${personalData[0].email.slice(0, 20)}${
                      personalData[0].email.length > 20 ? "..." : ""
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

      {/* Cart Section */}
      <div className="w-full rounded-lg bg-white p-6 shadow-lg">
        <h1 className="font-semibold text-gray-800 text-xl mb-4">Cart</h1>
        <hr className="mb-4" />
          <div className="h-48 overflow-y-scroll flex flex-col w-full no-scrollbar gap-2">
          {cartData.cart && cartData.cart.products ? (
          cartData.cart.products.map((product, index) => (
            <div className="" key={index}>
              <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
      <img
        src={product.productId.image[0]}
        alt="Product image"
        className="w-16 h-16 object-cover rounded-md border"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-medium text-gray-800">{product.productId.name}</h3>
        <p className="text-gray-600 text-sm">${product.productId.price}</p>
      </div>
    </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 italic">
            Your cart is currently empty.
          </div>
        )}
          </div>
        
      </div>
      <ToastContainer />
    </div>
  );
}
