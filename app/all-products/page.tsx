"use client";
import { useState , useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@//data/projects";

export default function Allproducts() {
  return (


    <div className="w-full h-auto bg-gray-600 flex flex-col gap-8 p-4 md:p-6 lg:p-8">
      {projects.map((item, index) => (
        <div key={item.id}>

          <Link
            href={`/product/${item.id}`}
            className="block lg:hidden"
          >
            <div className="w-[300px] h-44 md:w-[500px] md:h-[300px] mx-auto overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={item.cover}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <div
            className={`hidden lg:flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
          >
            <div className="group flex items-center">

              {index % 2 !== 0 && (
                <div className="w-[350px] h-[500px] bg-black text-white rounded-3xl p-8 flex flex-col justify-end opacity-0 -translate-x-16 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">

                  <h2 className="text-5xl font-bold mb-4">
                    {item.title}
                  </h2>

                  <p className="mb-2">📍 {item.location}</p>

                  <p className="mb-2">🏢 {item.floors}</p>

                  <p className="mb-8">📐 {item.area}</p>

                  <button className="bg-white text-black py-3 rounded-xl font-bold hover:bg-amber-400 transition">
                    <Link href={`/product/${item.id}`}>
                      مشاهده پروژه

                    </Link>
                  </button>

                </div>
              )}

              <Link href={`/product/${item.id}`}>
                <div className="relative w-[800px] h-[500px] overflow-hidden rounded-3xl mx-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">

                  <Image
                    src={item.cover}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition duration-700"
                  />

                </div>
              </Link>

              {index % 2 === 0 && (
                <div className="w-[350px] h-[500px] bg-black text-white rounded-3xl p-8 flex flex-col justify-end opacity-0 translate-x-16 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">

                  <h2 className="text-5xl font-bold mb-4">
                    {item.title}
                  </h2>

                  <p className="mb-2">📍 {item.location}</p>

                  <p className="mb-2">🏢 {item.floors}</p>

                  <p className="mb-8">📐 {item.area}</p>

                  <button className="bg-white text-black py-3 rounded-xl font-bold hover:bg-amber-400 transition">
                    <Link href={`/product/${item.id}`}>
                      مشاهده پروژه

                    </Link>
                  </button>

                </div>
              )}

            </div>
          </div>

        </div>
      ))}
    </div>
  );
}