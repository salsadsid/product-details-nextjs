"use client";
import Link from "next/link";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { BsCartCheck } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [state, setState] = useState(false);
  const path = usePathname();
  // console.log(router);
  return (
    <header className="text-base lg:text-sm z-50 sticky top-0">
      <div className="fixed w-full mx-auto">
        <div className="bg-white items-center justify-center gap-x-14 w-[1280px] mx-auto lg:flex lg:px-8 h-8">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div
        className={`bg-white pt-8 items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-[90vh] mt-8 fixed inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <Link href="/" className="font-6xl font-extrabold">
            salX
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0 z-20">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                />
              </div>
            </form>
            <li>
              <Link
                href="/"
                className="lg:block lg:text-lg flex gap-2 justify-center items-center text-gray-700 hover:text-gray-900"
              >
                <GrFavorite />{" "}
                <span className="lg:hidden inline-block ">Add to Wishlist</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="lg:block lg:text-lg flex gap-2 justify-center items-center  text-gray-700 hover:text-gray-900"
              >
                <BsCartCheck />
                <span className="lg:hidden inline-block ">Add to Cart</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/"
                className="lg:block flex justify-center items-center  text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="border-b bg-white">
        <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
          <li
            className={`py-1 ${
              path.includes("category/men") ? "border-b-2 border-indigo-600" : ""
            } `}
          >
            <Link
              href="/category/men"
              className="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
            >
              Men
            </Link>
          </li>
          <li
            className={`py-1 ${
              path.includes("women") ? "border-b-2 border-indigo-600" : ""
            }  `}
          >
            <Link
              href="/category/women"
              className="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
            >
              Women
            </Link>
          </li>
          <li
            className={`py-1 ${
              path.includes("baby") ? "border-b-2 border-indigo-600" : ""
            }  `}
          >
            <Link
              href="/category/baby"
              className="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
            >
              Baby
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
