import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ErrorComponent from './ErrorComponent';


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
      "Wedding Notepad(liner)",
      "Wedding Notepad(photo)",
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

const EditProducts = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [categories, setCategories] = useState(Object.keys(data));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [subSubcategories, setSubSubcategories] = useState([]);
  const [selectedSubSubcategories, setSelectedSubSubcategories] = useState("");
  const [remainingImages, setRemainingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    tag: "",
    price: "",
    image: "",
    category: "",
    subCategory: "",
    subSubCategory: "",
  });
  const [productName, setProductName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const route = useNavigate()
  const productId = useParams();
  const [type, setType] = useState(""); 


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


  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Fashion", label: "Fashion" },
    { value: "Headphones", label: "Headphones" },
    { value: "Watches", label: "Watches" },
    { value: "ceremony", label: "ceremony" },
    { value: "modern", label: "modern" },
    { value: "invitation", label: "invitation" },
  ];

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        if (!productId || !productId.id) {
          throw new Error("Product ID is undefined");
        }

        const response = await fetch(
          `https://nyouta.onrender.com/api/v1/products/products/${productId.id}`,
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

        const productData = await response.json();

        if (!productData) {
          throw new Error("API returned null or undefined data");
        }
        console.log("Selected Product Data :", productData);
        const tagsArray = []
        for (let index = 0; index < productData.tags.length; index++) {
            tagsArray.push({value:productData.tags[index], label:productData.tags[index] })
          
        }

        setProduct(productData); // Update with the product data
        setProductName(productData.name)
        setPrice(productData.price)
        setSelectedOptions(tagsArray)
        setSelectedCategory(productData.category)
        setSelectedSubcategory(productData.subCategory)
        setSelectedSubSubcategories(productData.subSubCategory)
        setRemainingImages(productData.image || []);
        setType(productData.type)
      } catch (error) {
        console.error("Error fetching product:", error.message);
        setError(error.message); // Display error to the user
        
      }
      finally{
        setLoading(false);
      }
    };

    fetchProductById();
  }, [productId]);

  const handleRemoveImage = (index) => {
    const updatedImages = [...remainingImages];
    updatedImages.splice(index, 1); // Remove the image
    setRemainingImages(updatedImages);
  };

 const handleAddNewImages = (files) => {
  if (files) {
    const previewLinks = Array.from(files).map((file) => URL.createObjectURL(file));
    setNewImages((prevImages) => [...prevImages, ...previewLinks]);
  }
};


  const handleRemoveNewImage = (index) => {
    setNewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
  
    // Combine old and new images
    const combinedImages = [...newImages, ...remainingImages];
    setImages(combinedImages);
  
    // Helper function to upload a single image to Cloudinary
    const uploadToCloudinary = async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "NYOUTA_WEBSITE"); // Replace with your Cloudinary preset
      formData.append("cloud_name", "dybuuoqdo"); // Replace with your Cloudinary cloud name
  
      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dybuuoqdo/image/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        return data.secure_url; // Cloudinary returns the secure URL of the uploaded image
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error.message);
        throw new Error("Image upload failed");
      }
    };
  
    // Process images: Upload local images and include existing URLs as-is
    const processedImages = await Promise.all(
      combinedImages.map(async (image) => {
        if (typeof image === "string" && image.startsWith("http")) {
          // If the image is already a URL, include it as-is
          return image;
        } else {
          // If the image is a local file, upload it to Cloudinary
          const uploadedUrl = await uploadToCloudinary(image);
          return uploadedUrl;
        }
      })
    );
  
    // Create product data object
    const productData = {
      name: productName,
      price,
      id: product.length + 1,
      sku: product.sku,
      tags: selectedOptions.map((option) => option.value),
      category: selectedCategory,
      subCategory: selectedSubcategory,
      subSubCategory: selectedSubSubcategories || "",
      images: processedImages,
      type:type
    };
  
    
  
    // Make the PUT request to update the product
    try {
      const response = await fetch(`https://nyouta.onrender.com/api/v1/products/products/${productId.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        toast.error("Failed to update product");
        throw new Error(errorData.message || "Failed to update product");
      }
  
      const updatedProduct = await response.json();
      toast.success("Product Updated");
      setTimeout(() => {
        route("/products/list");
      }, 1000);
  
    } catch (error) {
      console.error("Error updating product:", error.message);
      toast.error("Error in Updating");
    }
  };
  

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

   // Remove product function
   const removeProduct = async (id) => {
    try {
      const response = await fetch(`https://nyouta.onrender.com/api/v1/products/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        toast.error("Failed to delete product")
        throw new Error("Failed to delete product");
        
      }
      toast.success("Product Deleted")
      setTimeout(() => {
        route("/products/list")
      }, 1000);

    } catch (err) {
      setError(err.message);
    }
  };




  if (loading) {
    return ( <div className="px-4 sm:px-8 py-1 sm:py-4  ">
      <div className="w-full bg-white p-4 rounded-lg mb-4 max-h-[250px] overflow-y-scroll no-scrollbar ">
        <div className="mb-4">
          <div className="flex justify-between items-center  ">
          <h1 className="font-semibold text-gray-600 font-avalonN ">
            Edit Product Photo
          </h1>
          <div className="py-1 px-4 bg-red-500  text-white font-avalonB hover:bg-red-400 hover:shadow-lg flex items-center group gap-2  rounded-xl cursor-pointer border duration-300 transition font-semibold border-red-700  " onClick={()=>{removeProduct(productId.id)}}>
            Remove <span className=""><i class="fa-solid fa-trash-can text-sm text-white group-hover:rotate-45 transition duration-300  "></i></span>
          </div>
          </div>
          <hr className="mt-2" />
        </div>
        <form
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
          />
        </form> 

        <div className="previous-images">
          <h3 className="font-semibold text-gray-500 font-avalonN"> Images</h3>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex gap-4 animate-pulse">           
              <div
                className="image-container w-20 h-24  rounded-lg  relative "
              >
                
                <div
                  className="w-full h-full bg-slate-200 rounded-lg text-slate-200  "
                >a</div>
              </div> 
              <div
                className="image-container w-20 h-24  rounded-lg  relative "
              >
                
                <div
                  className="w-full h-full bg-slate-200 rounded-lg text-slate-200  "
                >a</div>
              </div> 
               
          </div>

          
          </div>
        </div>
      </div>
      <div className="w-full h-[520px] sm:h-60 bg-white p-4 rounded-lg overflow-y-scroll no-scrollbar">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4 font-avalonN">Product Information</h1>
          <hr />
        </div>
        <form className="w-full flex flex-col gap-4 text-gray-500" >
          <div className="flex gap-4 flex-wrap justify-between items-center w-full">
            <div className="flex flex-col h-10 flex-auto font-avalonN">
              <div className="w-full h-full bg-gray-200 text-gray-200 rounded-lg">a</div>
            </div>
            <div className="flex flex-col h-10 flex-auto font-avalonN">
            <div className="w-full h-full bg-gray-200 text-gray-200 rounded-lg">a</div>
            </div>
            <div className="flex flex-col h-10 flex-auto font-avalonN">
            <div className="w-full h-full bg-gray-200 text-gray-200 rounded-lg">a</div>
            </div>
          </div>
          {/* Categories and subcategories */}
          <div className="flex gap-4 justify-between items-center flex-wrap animate-pulse">
            <div className="flex-auto flex h-10 flex-col font-avalonN">
            <div className="w-full h-full bg-gray-200 text-gray-200 rounded-lg">a</div>
            </div>
            <div className="flex-auto flex h-10 flex-col font-avalonN">
            <div className="w-full h-full bg-gray-200 text-gray-200 rounded-lg">a</div>
            </div>
            <div className="flex flex-col h-10 flex-auto font-avalonN">
            <div className="w-full h-full bg-gray-200 text-gray-200 rounded-lg">a</div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button type="submit" className="py-2 px-4 rounded-lg text-white font-avalonB bg-[#FF6C2F]">
              Edit Product
            </button>
            <button type="button" className="py-2 px-4 rounded-lg border border-gray-600 font-avalonB text-gray-600" onClick={()=>{route("/products/list")}}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      
    </div> );
  }

  if (error) {
    return (
      <div className="px-4 sm:px-8 py-1 sm:py-4  ">
        <ErrorComponent></ErrorComponent>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 py-1 sm:py-4  ">
      <div className="w-full bg-white p-4 rounded-lg mb-4 max-h-[250px] overflow-y-scroll no-scrollbar ">
        <div className="mb-4">
          <div className="flex justify-between items-center  ">
          <h1 className="font-semibold text-gray-600 font-avalonN ">
            Edit Product Photo
          </h1>
          <div className="py-1 px-4 bg-red-500  text-white font-avalonB hover:bg-red-400 hover:shadow-lg flex items-center group gap-2  rounded-xl cursor-pointer border duration-300 transition font-semibold border-red-700  " onClick={()=>{removeProduct(productId.id)}}>
            Remove <span className=""><i class="fa-solid fa-trash-can text-sm text-white group-hover:rotate-45 transition duration-300  "></i></span>
          </div>
          </div>
          <hr className="mt-2" />
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
            onChange={(e) => handleAddNewImages(e.target.files)}
          />
        </form> 

        <div className="previous-images">
          <h3 className="font-semibold text-gray-500 font-avalonN"> Images</h3>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex gap-4">
            {remainingImages.map((img, index) => (
              <div
                key={index}
                className="image-container w-auto h-24  rounded-lg  relative border"
              >
                <div
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="cut-button absolute bg-red-500 cursor-pointer   h-4 w-4 right-0 translate-x-1 -translate-y-1 flex justify-center items-center rounded-full"
                >
                  <i class="fa-solid fa-xmark text-white text-sm"></i>
                </div>
                <img
                  src={img}
                  alt={`previous-${index}`}
                  className="w-full h-full  border"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {newImages.map((file, index) => (
              <div key={index} className="image-preview w-auto h-24 relative">
                <button
                  onClick={() => handleRemoveNewImage(index)}
                  className="cut-button absolute bg-red-500 cursor-pointer font-avalonB  h-4 w-4 right-0 translate-x-1 -translate-y-1 flex justify-center items-center rounded-full"
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
      <div className="w-full h-[520px] sm:h-60 bg-white p-4 rounded-lg overflow-y-scroll no-scrollbar">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4 font-avalonN">Product Information</h1>
          <hr />
        </div>
        <form className="w-full flex flex-col gap-4 text-gray-500" onSubmit={handleCreateProduct}>
          <div className="flex gap-4 flex-wrap justify-between items-center w-full">
            <div className="flex flex-col flex-auto font-avalonN">
              <label htmlFor="productname">Product Name</label>
              <input
                id="productname"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="rounded-lg border font-avalonN border-gray-300 hover:border-gray-400 outline-none px-4 py-1.5"
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
                className="rounded-lg border font-avalonN outline-none px-4 py-1.5 border-gray-300 hover:border-gray-400"
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
                className="border rounded-lg font-avalonN p-2 outline-none border-gray-300 hover:border-gray-400"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-auto flex flex-col font-avalonN">
              <label htmlFor="subcategory" className="">
                Subcategory
              </label>
              <select
                id="subcategory"
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
                className="border rounded-lg p-2 outline-none font-avalonN border-gray-300 hover:border-gray-400"
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
                className="border rounded-lg p-2 outline-none font-avalonN border-gray-300 hover:border-gray-400"
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
            <div className="flex flex-col flex-auto font-avalonN">
              <label htmlFor="Type" className="">
                Type
              </label>
              <select
                id="Type"
                className="border rounded-lg p-2 outline-none border-gray-300 hover:border-gray-400"
                value={type}
                onChange={handleTypeChange}
              >
                <option value="">Select Type</option>
                  <option >Royal</option>
                  <option >Popular</option>
              </select>
            </div>

          </div>
          <div className="flex justify-end gap-4">
            <button type="submit" className="py-2 px-4 rounded-lg text-white font-avalonB bg-[#FF6C2F]">
              Edit Product
            </button>
            <button type="button" className="py-2 px-4 rounded-lg border border-gray-600 font-avalonB text-gray-600" onClick={()=>{route("/products/list")}}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default EditProducts;
