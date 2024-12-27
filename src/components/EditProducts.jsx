import React, {  useState } from 'react'
import Select from "react-select";

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


const EditProducts = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [categories, setCategories] = useState(Object.keys(data));
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [subSubcategories, setSubSubcategories] = useState([]);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
    const [imageValid, setImagesValid] = useState(true);
    

    
  
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
  
    const handleCreateProduct = (e) => {
      e.preventDefault();
      const productData = {
        productName,
        price,
        tags: selectedOptions.map((option) => option.value),
        category: selectedCategory,
        subcategory: selectedSubcategory,
        subSubcategory: subSubcategories.length ? subSubcategories[0] : "",
        images,
      };
      console.log("Product Data:", productData);
  
      // You can send `productData` to your backend here
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
    <div className="px-4 sm:px-8 py-4">
      <div className="w-full bg-white p-4 rounded-lg mb-4">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4">Edit Product Photo</h1>
          <hr />
        </div>
          <div className={`${imageValid ? " " : "hidden"} h-28 w-full flex justify-center `}>
            <div className="relative border  ">
            <div className="absolute bg-red-500 cursor-pointer top right-0  h-4 w-4 -translate-y-1 translate-x-1 flex justify-center items-center rounded-full" onClick={()=>{setImagesValid(false)}}><i class="fa-solid fa-xmark text-white text-sm"></i></div>
            <img className='h-full ' src="https://thehouseofrare.com/cdn/shop/files/SANTHEMAROON__SANTHEMAROON__0.jpg?v=1734354041" alt="Image" />
            </div>

          </div>
        <form
          onClick={triggerFileInput}
          className={`${imageValid ? "hidden" : "flex" } flex-col  items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#FF6C2F] cursor-pointer duration-300 transition`}
        >
          <div className="text-center ">
            <i className="fa-solid fa-cloud-arrow-up text-4xl text-[#FF6C2F]"></i>
            <h3 className="mt-4 text-lg font-medium text-gray-700">
              Drop your images here, or{" "}
              <span className="text-[#FF6C2F] font-semibold">click to browse</span>
            </h3>
            <p className="text-sm text-gray-500">
              1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are allowed.
            </p>
          </div>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
        </form>
      </div>
      <div className="w-full h-[450px] sm:h-60 bg-white p-4 rounded-lg overflow-y-scroll no-scrollbar">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4">Edit Product Information</h1>
          <hr />
        </div>
        <form className="w-full flex flex-col gap-4 text-gray-500" onSubmit={handleCreateProduct}>
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
            <button type="submit" className="py-2 px-4 rounded-lg text-white bg-[#FF6C2F]">
              Edit Product
            </button>
            <button type="button" className="py-2 px-4 rounded-lg border border-gray-600 text-gray-600">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProducts