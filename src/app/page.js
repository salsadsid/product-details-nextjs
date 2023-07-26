"use client";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import InnerImageZoom from "react-inner-image-zoom";
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: "/pexels-photo-169647.jpg",
      id: 1,
    },
    {
      src: "/pexels-photo-313782.jpg",
      id: 2,
    },
    {
      src: "/tshirt-red.jpg",
      id: 2,
    },
    {
      src: "/tshirt-green.jpg",
      id: 2,
    },
    {
      src: "/tshirt-blue.jpg",
      id: 2,
    },
  ];
  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
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
                {images.map((image, index) => {
                  if (index === currentSlide) {
                    return (
                      <InnerImageZoom
                        key={image.id}
                        src={image.src}
                        zoomSrc={image.src}
                        image={image}
                        layout="fill"
                        objectFit="contain"
                        className="animate-fadeIn"
                        alt={image.id}
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
              {images.map((_, index) => {
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
          <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
            Afro-Brazillian Coffee
          </h1>
          <div class="mt-5 flex items-center">
            <div class="flex items-center">
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
              <svg
                class="block h-4 w-4 align-middle text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  class=""
                ></path>
              </svg>
            </div>
            <p class="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
          </div>
          <p class="lg:text-md font-normal text-gray-900 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit
            dicta culpa quas inventore beatae repellendus molestias aliquid non,
            sapiente modi, libero ex voluptatem sit ad explicabo! Amet vero
            optio veritatis id a nam excepturi aspernatur, iusto aliquid, eius
            molestias!
          </p>
          <div class="flex rounded-full items-center my-4 select-none text-gray-900">
            <div class="title py-3 my-auto mr-4  text-gray-900 text-xl font-semibold ">
              Color:
            </div>
            <label class="flex items-center radio p-2 cursor-pointer">
              <input
                class="h-6 w-6 checked:bg-red-500 text-red-500 p-2 my-4"
                type="radio"
                name="sfg"
              />
              <div class="title px-2">Red</div>
            </label>

            <label class="flex items-center p-2 cursor-pointer">
              <input
                class="h-6 w-6 checked:bg-green-500 text-green-500 p-2 my-4"
                type="radio"
                name="sfg"
              />
              <div class="title px-2">Green</div>
            </label>

            <label class="flex items-center p-2 cursor-pointer">
              <input
                class="h-6 w-6 checked:bg-blue-500 text-blue-500 p-2 my-4"
                type="radio"
                name="sfg"
              />
              <div class="title px-2">Blue</div>
            </label>
            <div className="">
            
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option >Choose a Size</option>
              <option value="S" selected>S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          </div>
         
          <div className="my-6 flex justify-start gap-10 items-center">
            <p className="lg:text-3xl text-xl flex items-center gap-3 font-semibold">
              <ImPriceTags />
              549 ৳
            </p>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add to Cart
            </button>
            <button
              type="button"
              class="text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center w-full gap-5 lg:px-12 px-2">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Reviews</span></h1>
        <article className="px-4 lg:px-0 border-b pb-4">
          <div class="flex items-center mb-4 space-x-4">
            <Image width={40} height={40} class="w-10 h-10 rounded-full" src={images[0].src} alt="" />
            <div class="space-y-1 font-medium dark:text-white">
              <p>
                Jese Leos
              </p>
            </div>
          </div>
          <div class="flex items-center mb-1">
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 class=" ml-2 text-sm font-semibold text-gray-900 dark:text-white">
              4 / 5
            </h3>
          </div>
          
          <p class="mt-5 mb-2 text-gray-500 dark:text-gray-400">
            This is my third Invicta Pro Diver. They are just fantastic value
            for money. This one arrived yesterday and the first thing I did was
            set the time, popped on an identical strap from another Invicta and
            went in the shower with it to test the waterproofing.... No
            problems.
          </p>
         
          <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              19 people found this helpful
            </p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a
                href="#"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Helpful
              </a>
              <a
                href="#"
                class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Report abuse
              </a>
            </div>
          </aside>
        </article>
        <article className="px-4 lg:px-0 border-b pb-4">
          <div class="flex items-center mb-4 space-x-4">
            <Image width={40} height={40} class="w-10 h-10 rounded-full" src={images[0].src} alt="" />
            <div class="space-y-1 font-medium dark:text-white">
              <p>
                Jese Leos
              </p>
            </div>
          </div>
          <div class="flex items-center mb-1">
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 class=" ml-2 text-sm font-semibold text-gray-900 dark:text-white">
              4 / 5
            </h3>
          </div>
          
          <p class="mt-5 mb-2 text-gray-500 dark:text-gray-400">
            This is my third Invicta Pro Diver. They are just fantastic value
            for money. This one arrived yesterday and the first thing I did was
            set the time, popped on an identical strap from another Invicta and
            went in the shower with it to test the waterproofing.... No
            problems.
          </p>
         
          <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              19 people found this helpful
            </p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a
                href="#"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Helpful
              </a>
              <a
                href="#"
                class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Report abuse
              </a>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}
