"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Overlay } from "@/components/Overlay";

const images = ["/parapija.jpg", "/hero2.jpg", "/hero3.jpg"];

export const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={img}
              alt={`Carousel Image ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === currentImageIndex}
            />
          </div>
        ))}
      </div>

      <Overlay />
      <div className="absolute right-4 bottom-4 z-50">
        <div className="flex gap2">
          {images .map((img,i)=>(
              <button 
                key={img} 
                onClick={()=>{handleImageChange(i)}}
                className={`w-12 h-2 rounded-full transition-all duration-300 shadow ${currentImageIndex === i ? "bg-primary": "bg-white hover:bg-gray-200"}`}
                ></button>
              ))}
        </div>
      </div>
    </>
  );
};
