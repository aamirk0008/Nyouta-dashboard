import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import UserData from "./components/UserData";
import Orders from "./components/Orders";
import AddProducts from "./components/AddProducts";
import EditProducts from "./components/EditProducts";
import ProductList from "./components/ProductLists";
import Middleware from "./middleware/middleware"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={ <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <Dashboard />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
          <Route
            path="/users"
            element={
              <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <Users />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
          <Route
            path="/users/:id"
            element={
              <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <UserData />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
          <Route
            path="/orders"
            element={
              <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <Orders />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
          <Route
            path="/products/add"
            element={
              <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <AddProducts />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
          <Route
            path="/products/edit/:id"
            element={
              <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <EditProducts />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
          <Route
            path="/products/list"
            element={
              <Middleware>
              <div className="flex w-[100vw] h-[100vh] bg-slate-200 ">
                <Sidebar
                  isMobileMenuOpen={isMobileMenuOpen}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <div className="h-full w-full lg:w-[95%] ">
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } bg-black  opacity-40 absolute h-full w-full z-40`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  ></div>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <div className="">
                    <ProductList />
                  </div>
                </div>
              </div>
              </Middleware>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
