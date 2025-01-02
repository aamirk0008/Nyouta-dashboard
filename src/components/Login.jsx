import React, { useState } from "react";
import logo from "../assets/nyouta-logo2.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-slate-200 to-white px-4">
  <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4 items-center justify-center mb-8 md:mb-0">
    <div className="h-16 md:h-24">
      <img className="h-full" src={logo} alt="" />
    </div>
    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-primaryFont text-center md:text-left">
      Nyouta
    </h1>
    <div className="h-0.5 ms-24 hidden md:block w-full md:w-0.5 md:h-[30rem] bg-[#B98230]"></div>
  </div>

  <div className="w-full md:w-[40%] max-w-md h-auto md:h-[30rem] p-8 flex flex-col px-16 justify-center bg-gradient-to-tl from-slate-100 to-white shadow-2xl rounded-lg">
    <h1 className="text-2xl md:text-4xl font-bold text-gray-700 text-center mb-8">
      Admin Login
    </h1>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
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
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
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
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 bg-[#B98230] text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-blue-300 hover:bg-[#F4EAD1] hover:text-gray-500 hover:shadow-lg duration-200 transition ${
          loading && "opacity-70 cursor-not-allowed"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>

    {/* Google Login */}
    <div className="mt-6">
      <button
        className="flex items-center justify-center w-full py-2 px-4 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
      >
        <i className="fa-brands fa-google w-5 h-5 mr-2"></i>
        Login with Google
      </button>
    </div>

    {/* Forgot Password */}
    <div className="mt-4 text-center">
      <a
        href="/forgot-password"
        className="text-sm text-blue-600 hover:underline"
      >
        Forgot Password?
      </a>
    </div>
  </div>
</div>


  );
};

export default AdminLogin;