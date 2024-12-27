import React from "react";

const AddProducts = () => {
  const handleFileSelect = (event) => {
    const [Image, setImage] = useState(null);

    const files = event.target.files;
    setImage(files);
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <div className="px-4 sm:px-8 py-4">
      <div className="w-full bg-white p-4 rounded-lg">
        <div className=" mb-4">
          <h1 className="font-semibold text-gray-600 mb-4">
            Add Product Photo
          </h1>
          <hr />
        </div>

        <form
          onClick={triggerFileInput}
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#FF6C2F] cursor-pointer duration-300 transition"
        >
          <div className="text-center">
            <i className="fa-solid fa-cloud-arrow-up text-4xl text-[#FF6C2F]"></i>
            <h3 className="mt-4 text-lg font-medium text-gray-700">
              Drop your images here, or{" "}
              <span className="text-[#FF6C2F] font-semibold">
                click to browse
              </span>
            </h3>
            <p className="text-sm text-gray-500">
              1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
              allowed.
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
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="mb-4">
          <h1 className="font-semibold text-gray-600 mb-4">
            Product Information
          </h1>
          <hr />
        </div>
        <form className="w-full flex flex-col gap-4 text-gray-500">
          <div className="flex gap-4 w-full ">
            <div className="flex flex-col flex-auto">
              <label htmlFor="productname">Product Name</label>
              <input
                id="productname"
                type="text"
                className="rounded-lg border outline-none px-4 py-1"
                placeholder="Iteam Name"
              />
            </div>
            <div className="flex flex-col flex-auto">
              <label htmlFor="Products">Product Categories</label>
              <select
                id="Products"
                class=" border  text-gray-500  rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-1 outline-none    "
              >
                <option selected>Choose a categories</option>
                <option value="Appliances">Appliances</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Footwear">Footwear</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="flex-auto flex flex-col">
              <label htmlFor="Brand">Brand</label>
              <input type="text" id="Brand" className="rounded-lg border outline-none px-4 py-1" placeholder="Brand Name" />
            </div>
            <div className="flex-auto flex flex-col">
            <label htmlFor="Weight">Weight</label>
            <input type="text" id="Weight" className="rounded-lg border outline-none px-4 py-1" placeholder="In gm & kg" />
            </div>
            <div className="flex-auto flex flex-col">
            <label htmlFor="Gender"> Gender</label>
              <select
                id="Gender"
                class=" border  text-gray-500  rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-1 outline-none    "
              >
                <option selected>Select Gender</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
