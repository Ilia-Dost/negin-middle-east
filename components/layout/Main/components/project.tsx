"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    href: "",
    img: "/img/photo1783319611 (1).jpeg",
  },
  {
    href: "",
    img: "/img/photo1783319611.jpeg",
  },
  {
    href: "",
    img: "/img/photo1783319682.jpeg",
  },
];

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="block md:hidden relative mt-10">
        <Link href={items[currentIndex].href}>
          <div className="w-[350px] h-56 mx-auto overflow-hidden rounded-3xl shadow-md">
            <Image
              src={items[currentIndex].img}
              alt="Project"
              width={1000}
              height={1000}
              className="w-full h-56 object-cover"
            />
          </div>
        </Link>

        <button
          onClick={prevSlide}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-white/70 backdrop-blur-md
            text-slate-800 text-xl
            flex items-center justify-center
            hover:bg-white transition
          "
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-white/70 backdrop-blur-md
            text-slate-800 text-xl
            flex items-center justify-center
            hover:bg-white transition
          "
        >
          ▶
        </button>


        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? "bg-blue-600 w-7"
                    : "bg-slate-300 w-3 hover:bg-slate-400"
                }
              `}
            />
          ))}
        </div>
      </div>



      <div className="hidden md:block lg:hidden relative mt-5">
        <Link href={items[currentIndex].href}>
          <Image
            src={items[currentIndex].img}
            alt="Project"
            width={900}
            height={600}
            className="
              rounded-3xl 
              w-full 
              h-[350px] 
              object-cover
              shadow-md
            "
          />
        </Link>


        <button
          onClick={prevSlide}
          className="
            absolute left-5 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-white/70 backdrop-blur-md
            text-slate-800 text-2xl
            flex items-center justify-center
            hover:bg-white transition
          "
        >
          ◀
        </button>


        <button
          onClick={nextSlide}
          className="
            absolute right-5 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-white/70 backdrop-blur-md
            text-slate-800 text-2xl
            flex items-center justify-center
            hover:bg-white transition
          "
        >
          ▶
        </button>


        <div className="flex justify-center gap-3 mt-5">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 w-3 hover:bg-slate-400"
                }
              `}
            />
          ))}
        </div>
      </div>




      <div className="hidden lg:block relative mt-5">

        <Link href={items[currentIndex].href}>
          <Image
            src={items[currentIndex].img}
            alt="Project"
            width={1600}
            height={900}
            className="
              rounded-3xl
              w-full
              h-[700px]
              object-cover
              shadow-lg
            "
          />
        </Link>


        <button
          onClick={prevSlide}
          className="
            absolute left-5 top-1/2 -translate-y-1/2
            w-14 h-14 rounded-full
            border border-white/40
            bg-white/70 backdrop-blur-md
            text-slate-800 text-3xl
            flex items-center justify-center
            hover:bg-white transition
          "
        >
          ◀
        </button>


        <button
          onClick={nextSlide}
          className="
            absolute right-5 top-1/2 -translate-y-1/2
            w-14 h-14 rounded-full
            border border-white/40
            bg-white/70 backdrop-blur-md
            text-slate-800 text-3xl
            flex items-center justify-center
            hover:bg-white transition
          "
        >
          ▶
        </button>


        <div className="flex justify-center gap-3 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? "bg-blue-600 w-9"
                    : "bg-slate-300 w-3 hover:bg-slate-400"
                }
              `}
            />
          ))}
        </div>

      </div>
    </>
  );
}