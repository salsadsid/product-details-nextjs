"use client";
import ReviewCard from "@/components/reviewCard/ReviewCard";

import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import InnerImageZoom from "react-inner-image-zoom";

const Product = ({params}) => {
    const [allProduct, setAllProduct] = useState([]);
    const fetchProducts = async () => {
      const response = await fetch(`/api/product/women/${params.product}`);
      const data = await response.json();
      console.log(data)
      setAllProduct(data);
    };
  
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(allProduct);
    const {name,description,images,price,reviews,sizes,colors}=allProduct
    console.log(name)
    const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
    console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 mt-4">
    <div className="lg:flex-row flex flex-col items-center justify-center w-full gap-5 lg:px-12 px-2">
      <div className="lg:w-1/2 w-full">
        <div className="relative">
          <AiOutlineLeft
            onClick={handlePrevSlide}
            className="absolute z-10   left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 "
          />
          <div className="w-full h-[60vh] flex overflow-hidden relative m-auto">
            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="relative m-auto"
            >
              {images?.map((image, index) => {
                if (index === currentSlide) {
                  return (
                    <InnerImageZoom
                      key={image}
                      src={image}
                      zoomSrc={image}
                      image={image}
                      layout="fill"
                      objectFit="contain"
                      className="animate-fadeIn"
                      alt={image}
                    />
                  );
                }
              })}
            </Swipe>
          </div>
          <AiOutlineRight
            onClick={handleNextSlide}
            className="absolute z-auto right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400"
          />

          <div className="relative flex justify-center p-2">
            {images?.map((_, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full px-4 lg:px-0">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
          {name}
        </h1>
        <div className="mt-5 flex items-center">
          <div className="flex items-center">
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              ></path>
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              ></path>
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              ></path>
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              ></path>
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              ></path>
            </svg>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">{reviews?.length} Reviews</p>
        </div>
        <p className="lg:text-md font-normal text-gray-900 mt-5">
         {description}
        </p>
        <div className="flex rounded-full items-center my-4 select-none text-gray-900">
          <div className="title py-3 my-auto mr-4  text-gray-900 text-xl font-semibold ">
            Color:
          </div>
          <label className="flex items-center radio p-2 cursor-pointer">
            <input
              className="h-6 w-6 checked:bg-red-500 text-red-500 p-2 my-4"
              type="radio"
              name="sfg"
            />
            <div className="title px-2">Red</div>
          </label>

          <label className="flex items-center p-2 cursor-pointer">
            <input
              className="h-6 w-6 checked:bg-green-500 text-green-500 p-2 my-4"
              type="radio"
              name="sfg"
            />
            <div className="title px-2">Green</div>
          </label>

          <label className="flex items-center p-2 cursor-pointer">
            <input
              className="h-6 w-6 checked:bg-blue-500 text-blue-500 p-2 my-4"
              type="radio"
              name="sfg"
            />
            <div className="title px-2">Blue</div>
          </label>
          <div className="">
          
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Size</option>
            {
                sizes?.map(m=><option value={m} key={m}>{m}</option>
                )
            }
          </select>
        </div>
        </div>
       
        <div className="my-6 flex justify-start gap-10 items-center">
          <p className="lg:text-3xl text-xl flex items-center gap-3 font-semibold">
            <ImPriceTags />
            {price} ৳
          </p>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    <div className="my-12 w-full  lg:px-12 px-2">
      <h1 className="mb-4 lg:px-1 px-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Reviews</span></h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
      {
        reviews?.map((review,i)=><ReviewCard review={review} key={i}/>)
      }
      </div>
      
    </div>
  </main>
  )
}

export default Product