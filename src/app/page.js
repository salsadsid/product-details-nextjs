"use client";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
        <div className="lg:w-1/2 w-full h-12 bg-slate-300">
        <div className="relative">
              <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute z-10   left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 "
              />
              <div className="w-full h-[60vh] flex overflow-hidden relative m-auto">
                <Swipe
                  onSwipeLeft={handleNextSlide}
                  onSwipeRight={handlePrevSlide}
                  className="relative  w-full h-full"
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
        <div className="lg:w-1/2 w-full h-12 bg-slate-500"></div>
      </div>
    </main>
  );
}
