import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const data = {
  "Print Invitations": {
    "Wedding Invitations": [
      "Elegant Collection",
      "Vintage Collection",
      "Royal Invitations",
      "Make Own Design Slider Invitations",
      "Submit Design Idea Passport Theme Invitations",
      "Send Ideal Design Newspaper Invitations",
      "Aadhar Card Invitations",
      "ATM Theme Invitations",
    ],
    "Party Invitations": [
      "Birthday Party",
      "Kitty Party",
      "Retirement Party",
      "Halloween Party",
      "Lohri Party",
    ],
    "Pooja Invitations": ["Sawamani", "Griha Pravesh", "Shyam Jagran"],
    "Ceremony Invitations": [
      "Engagement Ceremony",
      "Wedding Anniversary",
      "Opening Ceremony",
      "Kua Poojan",
    ],
  },
  "E-Invitations": {
    "Wedding Invitations": [
      "Pre Invitations - Manuhar",
      "Make Own Design Save the Date",
      "Submit Design Idea Wedding Invitations",
      "Send Ideal Design Ceremony Invitations",
      "Wedding Timeline",
      "Royal Collection - NEW",
    ],
    "Party Invitations": [
      "Birthday Party",
      "Kitty Party",
      "Retirement Party",
      "Halloween Party",
      "Lohri Party",
    ],
    "Pooja Invitations": ["Sawamani", "Griha Pravesh", "Shyam Jagran"],
    "Ceremony Invitations": [
      "Engagement Ceremony",
      "Wedding Anniversary",
      "Wedding Events",
      "Opening Ceremony",
      "Kua Poojan",
    ],
  },
};

const AddProducts = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [categories, setCategories] = useState(Object.keys(data));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ProductData, setProductData] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [subSubcategories, setSubSubcategories] = useState([]);
  const [selectedSubSubcategories, setSelectedSubSubcategories] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const route = useNavigate()

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

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSubcategories(Object.keys(data[category]));
    setSelectedSubcategory("");
    setSubSubcategories([]);
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubcategory(subcategory);
    setSubSubcategories(data[selectedCategory][subcategory]);
  };

  const handleSubsubcategoryChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSubSubcategories(...selectedValues);
  };

  const handleAddImages = (files) => {
    if (files) {
      const previewLinks = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...previewLinks]);
    }
  }

  const handleRemoveNewImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleCreateProduct = async(e) => {
    e.preventDefault();
    const productData = {
      name : productName,
      id: ProductData.length + 1,
      sku:"LUXURY-015",//testing
      price,
      tags: selectedOptions.map((option) => option.value),
      category: selectedCategory,
      subCategory: selectedSubcategory,
      subSubCategory: selectedSubSubcategories ? selectedSubSubcategories  : "",
      image: images // for testing use "https://vestirio.com/cdn/shop/files/007.webp?v=1690795694&width=1800"
    };
    console.log("Product Data:", productData);

    try {
      const response = await fetch("http://localhost:5000/api/v1/products/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Product created successfully:", result);
        toast.success("Product Added")
      } else {
        console.error("Failed to create product. Status:", response.status);
        const errorData = await response.json();
        console.error("Error details:", errorData);
        toast.error("Something Wrong")
        
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Something Wrong")
    }
  };

  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Fashion", label: "Fashion" },
    { value: "Headphones", label: "Headphones" },
    { value: "Watches", label: "Watches" },
  ];

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="px-4 sm:px-8 py-1 sm:py-1">
      <div className="w-full bg-white max-h-[245px] sm:max-h-[220px] p-4 rounded-lg mb-4 overflow-y-scroll no-scrollbar ">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4">
            Edit Product Photo
          </h1>
          <hr />
        </div>
        <form
          onClick={triggerFileInput}
          className= "md:w-[400px] w-full text-xs md:text-sm  border-2 border-dashed border-gray-300 rounded-lg px-6 py-1 hover:border-[#FF6C2F] cursor-pointer duration-300 transition"
        >
          <div className="text-center flex items-center gap-4 ">
            <i className="fa-solid fa-cloud-arrow-up text-xl text-[#FF6C2F]"></i>
            <h3 className=" font-medium text-gray-700">
              Drop your images here, or{" "}
              <span className="text-[#FF6C2F] font-semibold">click to browse</span>
            </h3>
          
          </div>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            multiple
            onChange={(e) => handleAddImages(e.target.files)}
          />
        </form> 

        <div className="previous-images">
          <h3 className="font-semibold text-gray-500"> Images</h3>
          <div className="flex items-center  ">
          <div className="flex gap-4">
            {images.map((file, index) => (
              <div key={index} className="image-preview w-auto h-24 relative">
                <button
                  onClick={() => handleRemoveNewImage(index)}
                  className="cut-button absolute bg-red-500 cursor-pointer   h-4 w-4 right-0 translate-x-1 -translate-y-1 flex justify-center items-center rounded-full"
                >
                 <i class="fa-solid fa-xmark text-white text-sm"></i>
                </button>
                <img
                  src={file}
                  alt={`Uploaded ${index}`}
                  className="w-full h-full  border"
                />
                
                <p className="text-center text-sm mt-2">{file.name}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-60 md:h-[300px] bg-white p-4 rounded-lg overflow-y-scroll no-scrollbar">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4">
            Product Information
          </h1>
          <hr />
        </div>
        <form
          className="w-full flex flex-col gap-4 text-gray-500"
          onSubmit={handleCreateProduct}
        >
          <div className="flex gap-4 flex-wrap justify-between items-center w-full">
            <div className="flex flex-col flex-auto">
              <label htmlFor="productname">Product Name</label>
              <input
                id="productname"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="rounded-lg border border-gray-300 hover:border-gray-400 outline-none px-4 py-1.5"
                placeholder="Item Name"
              />
            </div>
            <div className="flex flex-col flex-auto">
              <label htmlFor="Price">Price</label>
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="rounded-lg border outline-none px-4 py-1.5 border-gray-300 hover:border-gray-400"
                placeholder="Item Price"
              />
            </div>
            <div className="flex flex-col flex-auto">
              <label htmlFor="tag-selector" className="form-label">
                Tag
              </label>
              <Select
                id="tag-selector"
                options={options}
                isMulti
                value={selectedOptions}
                onChange={setSelectedOptions}
                className="form-control"
                classNamePrefix="choices"
                placeholder="Select tags"
              />
            </div>
          </div>
          {/* Categories and subcategories */}
          <div className="flex gap-4 justify-between items-center flex-wrap">
            <div className="flex-auto flex flex-col">
              <label htmlFor="category" className="">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border rounded-lg p-2 outline-none border-gray-300 hover:border-gray-400"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-auto flex flex-col">
              <label htmlFor="subcategory" className="">
                Subcategory
              </label>
              <select
                id="subcategory"
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
                className="border rounded-lg p-2 outline-none border-gray-300 hover:border-gray-400"
                disabled={!subcategories.length}
              >
                <option value="">Select Subcategory</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subsubcategory" className="">
                Sub-Subcategory
              </label>
              <select
                id="subsubcategory"
                className="border rounded-lg p-2 outline-none border-gray-300 hover:border-gray-400"
                disabled={!subSubcategories.length}
                value={selectedSubSubcategories}
                onChange={handleSubsubcategoryChange}
              >
                <option value="">Select Sub-Subcategory</option>
                {subSubcategories.map((subSubcategory) => (
                  <option key={subSubcategory} value={subSubcategory}>
                    {subSubcategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="py-2 px-4 rounded-lg text-white bg-[#FF6C2F]"
            >
              Create Product
            </button>
            <button
              type="button"
              className="py-2 px-4 rounded-lg border border-gray-600 text-gray-600"
              onClick={()=>{route("/") }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddProducts;
