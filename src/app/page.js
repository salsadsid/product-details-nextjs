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
       
        </div>
        <div className="lg:w-1/2 w-full h-12 bg-slate-500"></div>
      </div>
    </main>
  );
}
