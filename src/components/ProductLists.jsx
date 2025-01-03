import React, { useEffect } from 'react'
import { useState } from 'react';
import { redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



// const data = [
//   {
//     id: 1,
//     productName: "Black T-shirt",
//     size: ["S", "M", "L", "XL"],
//     price: "$80.00",
//     stock: "486 Item Left",
//     sold: "155 Sold",
//     category: "Fashion",
//     rating: 4.5,
//     reviews: 55,
//   },
//   {
//     id: 2,
//     productName: "Olive Green Leather Bag",
//     size: ["S", "M"],
//     price: "$136.00",
//     stock: "784 Item Left",
//     sold: "674 Sold",
//     category: "Hand Bag",
//     rating: 4.1,
//     reviews: 143,
//   },
//   {
//     id: 3,
//     productName: "Women Golden Dress",
//     size: ["S", "M"],
//     price: "$219.00",
//     stock: "769 Item Left",
//     sold: "180 Sold",
//     category: "Fashion",
//     rating: 4.4,
//     reviews: 174,
//   },
//   {
//     id: 4,
//     productName: "Gray Cap For Men",
//     size: ["S", "M", "L"],
//     price: "$76.00",
//     stock: "571 Item Left",
//     sold: "87 Sold",
//     category: "Cap",
//     rating: 4.2,
//     reviews: 23,
//   },
//   {
//     id: 5,
//     productName: "Dark Green Cargo Pent",
//     size: ["S", "M", "L", "XL"],
//     price: "$110.00",
//     stock: "241 Item Left",
//     sold: "342 Sold",
//     category: "Fashion",
//     rating: 4.4,
//     reviews: 109,
//   },
//   {
//     id: 6,
//     productName: "Orange Multi Color Headphone",
//     size: ["S", "M"],
//     price: "$231.00",
//     stock: "821 Item Left",
//     sold: "231 Sold",
//     category: "Electronics",
//     rating: 4.2,
//     reviews: 200,
//   },
//   {
//     id: 7,
//     productName: "Kid's Yellow Shoes",
//     size: ["18", "19", "20", "21"],
//     price: "$89.00",
//     stock: "321 Item Left",
//     sold: "681 Sold",
//     category: "Shoes",
//     rating: 4.5,
//     reviews: 321,
//   },
//   {
//     id: 8,
//     productName: "Men Dark Brown Wallet",
//     size: ["S", "M"],
//     price: "$132.00",
//     stock: "190 Item Left",
//     sold: "212 Sold",
//     category: "Wallet",
//     rating: 4.1,
//     reviews: 190,
//   },
//   {
//     id: 9,
//     productName: "Sky Blue Sunglass",
//     size: ["S", "M"],
//     price: "$77.00",
//     stock: "784 Item Left",
//     sold: "443 Sold",
//     category: "Sunglass",
//     rating: 3.5,
//     reviews: 298,
//   },
// ];


const ProductList = () => {

  const[ProductData,  setProductData ] = useState([{name:"", tags:"", category:"", price:""}])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductdata = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/products/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };
  
    fetchProductdata(); 
  }, []); 
  


     const removeProduct = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/products/products/${id}`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          toast.error("Failed to delete product")
          throw new Error("Failed to delete product");
          
        }
        toast.success("Product Deleted")
        setTimeout(() => {
          window.location.reload()
        }, 1000);
  
      } catch (err) {
        setError(err.message);
      }
    };
  

 const handleEdit = (id) => {
  console.log(id);
  navigate(`/products/edit/${id}`)
  
 }

  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="bg-white sm:h-[500px] rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All Product List
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0 ">
            <button className="p-2 bg-[#E6612A] font-semibold border font-avalonB border-orange-600 hover:shadow-lg hover:-translate-y-0.5 duration-200 transition rounded-lg text-white text-sm" onClick={()=>{navigate("/products/add")}}>
              Add Product
            </button>
            
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[650px] lg:max-h-[400px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100 uppercase font-avalonN border-b">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Stock
                </th>
                <th scope="col" className="px-4 py-3">
                  Category
                </th>
                <th scope="col" className="px-4 py-3">
                 Sub Category
                </th>
                <th scope="col" className="px-4 py-3">
                 Sub SubCategory
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {ProductData.map((item, index) => (
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
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">{item.tags}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.subCategory}</td>
                  <td className="px-4 py-3">{item.subSubCategory}</td>
                  <td className="px-4 py-3 flex gap-2 ">
                    <button className="p-1 px-2 flex justify-center items-center group  font-semibold border border-[#E6612A] hover:shadow-lg hover:-translate-y-0.5 duration-200 transition rounded-lg  text-white text-sm" onClick={()=>{handleEdit(item._id)}}>
                    <i class="fa-solid fa-pencil text-sm group-hover:-rotate-45 text-[#E6612A] transition duration-300 "></i>
                    </button>
                    <button className="p-1 px-2 flex justify-center items-center group  font-semibold border border-gray-500 hover:shadow-lg hover:-translate-y-0.5 duration-200 transition rounded-lg  text-white text-sm" onClick={()=>{removeProduct(item._id)}}>
                    <i class="fa-solid fa-trash-can text-sm text-gray-500 group-hover:rotate-45 transition duration-300  "></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default ProductList