import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import { v2 as cloudinary } from 'cloudinary';

const data = {
  "Print Invitations": {
    "Wedding Invitations": [
      "Elegant Collection",
      "Vintage Collection",
      "Royal Invitations",
      "Slider Invitations",
      "Passport Theme Invitations",
      "Newspaper Invitations",
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
      "Save the Date",
      " Wedding Invitations",
      " Ceremony Invitations",
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
    "Short Invitations": ["FREE Wedding Invitations", "Party Invitations"],
    "Matrimonial Biodata": ["Marriage Biodata"],
  },
  "Itinerary": {
    "Wedding Itinerary": [
      "Room Itinerary",
      "Check-in Itinerary",
      "Room Key Enevelop",
      "Thank You Cards",
      "Wedding Menu",
      "Table Itinerary",
      "Dining Table Mats",
    ],
    "Stickers": [
      "Guest Name Stickers",
      "Gift Box Sticker",
      "Vehicle Stickers",
      "Designer Stickers",
      "Vintage Stickers",
    ],
    "Tags / Badges": [
      "Luggage Tag",
      "Door Handle Tag",
      "Gift Tag",
      "Parking Tags",
      "Wedding Badges",
    ],
    "Welcome Signages": [
      "Wedding Ceremony",
      "Haldi Ceremony",
      "Mehandi Ceremony",
      "Sangeet Ceremony",
      "Direction Signage",
      "Engagement Ceremony",
      "Anniversary Ceremony",
      "Lohri Party",
      "Halloween Party",
      "Birthday Party",
      "Celeration Party",
    ],
    "Accessories": [
      "Party Dangler",
      "Coasters",
      "Paper Napkins",
      "Event Banner",
      "Face Mask",
      "Funny Poster",
    ],
    "Games": ["Playing Cards", "Puzzle Games", "Fun Games"],
  },
  "Photo Books": {
    "Soft Cover Photobook": [
      "Wedding Photobook",
      "Engagement Photobook",
      "Anniversary Photobook",
      "Birthday Photobook",
    ],
    "Hard Cover Photobook": [
      "Wedding Photobook",
      "Engagement Photobook",
      "Anniversary Photobook",
      "Birthday Photobook",
    ],
    "Spiral Photobook": [
      "Wedding Photobook",
      "Engagement Photobook",
      "Anniversary Photobook",
      "Birthday Photobook",
    ],
    "Photo Folder": [
      "Wedding Photobook",
      "Engagement Photobook",
      "Anniversary Photobook",
      "Birthday Photobook",
    ],
    "Digital Photobook": [
      "Wedding Photobook",
      "Engagement Photobook",
      "Anniversary Photobook",
      "Birthday Photobook",
    ],
  },
  "Calendars 2025": {
    "Mini Desktop Calendar": ["Wedding Calendar", "Birthday Calendar", "Family & Kids"],
    "Wall Calendar - Portrait": [
      "Wedding Calendar",
      "Birthday Calendar",
      "Family & Kids",
    ],
    "Wall Calendar - Landscape": [
      "Wedding Calendar",
      "Birthday Calendar",
      "Family & Kids",
    ],
    "Desktop Calendar": [
      "Wedding Calendar",
      "Birthday Calendar",
      "Family & Kids",
    ],
    "Table Tent Calendar": [
      "Wedding Calendar",
      "Birthday Calendar",
      "Family & Kids",
    ],
    "Poster Calendar": [
      "Wedding Calendar",
      "Birthday Calendar",
      "Family & Kids",
    ],
  },
  "Planner Books": {
    "Planner Books": [
      "Wedding Management",
      "Guest Management",
      "Wedding Notepad",
      "Guest List Booklet - Best Seller",
    ],
    "Free Printable": [
      "Wedding Guest List-PDF",
      "Wedding Guest List - XLS",
      "Wedding Notepad - PDF",
    ],
  },
  "Guest Surprising !!!": {
    "Newspapers": [
      "Wedding Newspaper",
      "Engagement Newspaper",
      "Birthday Newspaper",
      "Special Event",
      "E-Paper",
    ],
    "Magazine": [
      "Wedding Magazine",
      "Engagement Magazine",
      "Birthday Magazine",
      "Special Event",
      "E-Magazine",
    ],
  },
  "Free Greetings": {
    "Wishes Greeting": [
      "Wishes to New Wed",
      "Engagement Wishes",
      "Anniversary Wishes",
      "Birthday Wishes",
      "Retirement Wishes",
      "General Wishes",
    ],
    "Thanks Greeting": [
      "Thanks to Invitor",
      "Thanks to Guests",
      "Thanks for Wishes",
      "General Greetings",
    ],
    "Feeling Greetings": [
      "Love Cards",
      "Sorry Cards",
      "Congrats Cards",
      "Miss you Card",
      "Good Luck Cards",
    ],
    "Funny Greetings": [
      "For Wedding",
      "For Anniversary",
      "For Party",
      "General Greetings",
    ],
  },
  "E-Shop": {
    "Shagun Envelop": ["For Wedding Guests", "For New Wed"],
    "Photo Magnet": [
      "Mini Photo Magnet",
      "Wedding",
      "Family",
      "Birthday",
      "Quotes",
      "Travel",
      "Faces",
      "Funny",
      "Religious",
      "Feeling",
      "Rangoli",
    ],
    "Gifts": ["Wedding Gift", "Party Gift", "Packaging"],
    "Essentials": ["Wedding Shopping", "Party Shopping"],
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
  const [normalImages, setNormalImages] = useState();


  const route = useNavigate()



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
    setNormalImages(files)
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

  console.log(normalImages);
  
  const imagedata = new FormData();
  imagedata.append("file" , normalImages[0]);
  imagedata.append("upload_preset", "my_new_account" );
  imagedata.append("cloud_name", "dpesh4axn")

  const  imageRes = await fetch("https://api.cloudinary.com/v1_1/dpesh4axn/image/upload",{
    method:"POST",
    body:imagedata
  }
  )
  
  const uploadImageUrl = await imageRes.json()
  
  
    
    const productData = {
      name : productName,
      id: ProductData.length + 1,
      sku:"LUXURY-015",//testing
      price,
      tags: selectedOptions.map((option) => option.value),
      category: selectedCategory,
      subCategory: selectedSubcategory,
      subSubCategory: selectedSubSubcategories ? selectedSubSubcategories  : "",
      image: uploadImageUrl.secure_url // for testing use "https://vestirio.com/cdn/shop/files/007.webp?v=1690795694&width=1800"
    };
    console.log("Product Data:", productData);



    try {
      const response = await fetch("https://nyouta.onrender.com/api/v1/products/products", {
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
        setProductName("");
        setPrice("");
        setSelectedOptions("");
        setSelectedCategory("");
        setSelectedSubcategory("");
        setSelectedSubSubcategories("");
        setImages([])

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
          <h1 className="font-semibold text-gray-600 mb-4 font-avalonN">
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
            <h3 className=" font-medium text-gray-700 font-avalonB">
              Drop your images here, or{" "}
              <span className="text-[#FF6C2F] font-semibold font-avalonB">click to browse</span>
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
          <h3 className="font-semibold text-gray-500 font-avalonN"> Images</h3>
          <div className="flex items-center  ">
          <div className="flex gap-4">
            {images.map((file, index) => (
              <div key={index} className="image-preview w-auto h-24 relative">
                <button
                  onClick={() => handleRemoveNewImage(index)}
                  className="cut-button absolute bg-red-500 cursor-pointer   h-4 w-4 right-0 translate-x-1 -translate-y-1 flex justify-center items-center rounded-full"
                >
                 <i className="fa-solid fa-xmark text-white text-sm"></i>
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
          <h1 className="font-semibold text-gray-600 mb-4 font-avalonN">
            Product Information
          </h1>
          <hr />
        </div>
        <form
          className="w-full flex flex-col gap-4 text-gray-500"
          onSubmit={handleCreateProduct}
        >
          <div className="flex gap-4 flex-wrap justify-between items-center w-full">
            <div className="flex flex-col flex-auto font-avalonN">
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
            <div className="flex flex-col flex-auto font-avalonN">
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
            <div className="flex flex-col flex-auto font-avalonN">
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
            <div className="flex-auto flex flex-col font-avalonN">
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
            <div className="flex-auto flex flex-col font-avalonN" >
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
            <div className="flex flex-col font-avalonN">
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
          <div className="flex justify-end gap-4 font-avalonB">
            <button
              type="submit"
              className="py-2 px-4 rounded-lg text-white bg-[#FF6C2F]"
            >
              Create Product
            </button>
            <button
              type="button"
              className="py-2 px-4 rounded-lg border font-avalonB border-gray-600 text-gray-600"
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
