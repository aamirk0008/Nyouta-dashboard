import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ErrorComponent from './ErrorComponent';





const ProductList = () => {

  const[ProductData,  setProductData ] = useState([{name:"", tags:"", category:"", price:""}])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductData);

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
        setFilteredProducts(data)
      } catch (error) {
        console.error('Error fetching users:', error.message);
        setError(error)
      }
      finally{
        setLoading(false)
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
  

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ProductData.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

 const handleEdit = (id) => {
  console.log(id);
  navigate(`/products/edit/${id}`)
  
 }

 if (loading) {
  return (
    <div className="bg-white lg:h-[500px] rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All Product List
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0 ">
            <button className="p-2 bg-[#E6612A] font-semibold border font-avalonB border-orange-600 hover:shadow-lg hover:-translate-y-0.5 duration-200 transition rounded-lg text-white text-sm" onClick={()=>{navigate("/products/add")}}>
              Add Product
            </button>
            <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-300 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text"  className='bg-gray-300 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none font-avalonB' placeholder='search...' /></div>
        </div>
            
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
              
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 animate-pulse">
                  <td scope="row" className="px-4 py-3 font-medium text-gray-900 truncate  p-1 "><div className="bg-slate-200 h-full w-full text-slate-200">a</div></td>
                  <td className="px-4 py-3  p-1"> <div className="bg-slate-200 h-full w-full text-slate-200">a </div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                  <td className="px-4 py-3 flex gap-2 p-1 "><div className="bg-slate-200 h-full w-full text-slate-200 ">a</div></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div> 
  )
  
 }

 if (error) {
  return (
    <div className="px-4 sm:px-8 py-4">
      <ErrorComponent></ErrorComponent>
    </div>
  )
 }

  return (
    <div className="px-4 sm:px-8 py-4">
       <div className="bg-white md:h-[800px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
        <div className="flex sm:flex-row items-center justify-between p-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center sm:text-left font-avalonN">
            All Product List
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0 ">
            <button className="p-2 bg-[#E6612A] font-semibold border font-avalonB border-orange-600 hover:shadow-lg hover:-translate-y-0.5 duration-200 transition rounded-lg text-white text-sm" onClick={()=>{navigate("/products/add")}}>
              Add Product
            </button>
            <div className="flex gap-6 items-center ">
            
            <div className='bg-gray-200 rounded-lg p-2 flex items-center'><span className='me-2 text-gray-500'><i class="fa-solid fa-magnifying-glass"></i></span><input type="text" onChange={(e)=>{handleSearch(e)}} className='bg-gray-200 text-gray-500 w-20 md:w-40 placeholder:text-gray-500 outline-none font-avalonB' placeholder='search...' /></div>
        </div>
            
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
              {filteredProducts.map((item, index) => (
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