import React, { useState } from "react";
import logo from "../assets/nyouta-logo2.png";
import { ToastContainer, toast } from 'react-toastify';

const AdminLogin = ({setIsLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    if(email === "admin@gmail.com" && password === "1234"){
    document.cookie = "token=static-admin-token; path=/; max-age=3600"; // Expires in 1 hour
    setIsLogin(true)
    }
    else{
      if(email !== "admin@gmail.com"){
        toast.error("Wrong Email")
      }
      else{
        toast.error("Wrong Password")
      }
    }
   
    
    

    const handleGoogleLogin = () =>{

    }

    const adminCredentials = { email, password };

    // try {
    //   const response = await fetch("http://localhost:5000/api/v1/admin/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(adminCredentials),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(errorData.message || "Login failed");
    //   }

    //   const data = await response.json();
    //   console.log("Login successful:", data);

    //   // Handle success (e.g., save token, redirect to dashboard)
    //   alert("Login successful!");
    //   window.location.href = "/admin/dashboard"; // Replace with your admin dashboard route
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-slate-200 to-white px-4">
  <div className="w-full lg:w-[60%] flex flex-col lg:flex-row gap-4 items-center justify-center mb-8 lg:mb-0">
    <div className="h-16 lg:h-24">
      <img className="h-full" src={logo} alt="" />
    </div>
    <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-avalonN text-center lg:text-left">
      Nyouta
    </h1>
    <div className="h-0.5 ms-24 hidden lg:block w-full lg:w-0.5 lg:h-[30rem] bg-[#B98230]"></div>
  </div>

  <div className="w-full lg:w-[40%] max-w-lg h-auto lg:h-[30rem] p-8 flex flex-col px-16 justify-center bg-gradient-to-tl from-slate-100 to-white shadow-2xl rounded-lg">
    <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 font-avalonN text-center mb-8">
      Admin Login
    </h1>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 font-avalonN"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border font-avalonN border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600 font-avalonN"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border font-avalonN border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      
      <button
        type="submit"
        className={`w-full py-2 px-4 bg-[#B98230] text-white font-avalonB font-semibold rounded-lg focus:outline-none focus:ring focus:ring-blue-300 hover:bg-[#F4EAD1] hover:text-gray-500 hover:shadow-lg duration-200 transition`}
      >
         Login
      </button>
    </form>

    {/* Google Login */}
    <div className="mt-6">
      <button
        className="flex items-center justify-center w-full py-2 px-4 font-avalonB bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
      >
        <i className="fa-brands fa-google w-5 h-5 mr-2"></i>
        Login with Google
      </button>
    </div>

    {/* Forgot Password */}
    <div className="mt-4 text-center">
      <a
        href="/forgot-password"
        className="text-sm text-blue-600 font-avalonB hover:underline"
      >
        Forgot Password?
      </a>
    </div>
  </div>
  <ToastContainer/>
</div>


  );
};

export default AdminLogin;
