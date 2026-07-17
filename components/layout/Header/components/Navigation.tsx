"use client";

import Link from "next/link";
import { useState } from "react";

const submenuData = [
  {
    title: "مسکونی",
    projects: [
      { title: "مروارید سفید", href: "/product/1" },
      { title: "اکباتان", href: "/product/6" },
      { title: "چناران پارک رزیدنس", href: "/product/7" },
    ],
  },
  {
    title: "تجاری",
    projects: [
      { title: "نیکا مال", href: "/product/2" },
      { title: "تهران مال", href: "/product/3" },
      { title: "پالادیوم", href: "/product/4" },
      { title: "سام سنتر", href: "/product/5" },
    ],
  },
];

export default function Navigation() {
  const [show, setShow] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const closeMenu = () => {
    setShow(false);
    setShowSubmenu(false);
    setSelectedSub(null);
  };

  return (
    <div className="relative z-50">

      <button
        onClick={() => setShow(!show)}
        className="flex flex-col items-center justify-center w-10 h-10 rounded-md bg-gray-600 hover:bg-gray-500 transition"
      >
        {show ? (
          <span className="text-3xl text-white">×</span>
        ) : (
          <>
            <span className="w-7 h-1 bg-white rounded mb-1"></span>
            <span className="w-7 h-1 bg-white rounded mb-1"></span>
            <span className="w-7 h-1 bg-white rounded"></span>
          </>
        )}
      </button>

      {show && (
        <div
          className="
            absolute
            top-14
            right-0
            w-60
            rounded-2xl
            bg-gray-700
            shadow-2xl
            p-5
            animate-in
            fade-in
            slide-in-from-top-2
            duration-200
          "
        >
          <ul className="space-y-4">

            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-white hover:text-emerald-400 transition"
              >
                صفحه اصلی
              </Link>
            </li>

            <li>

              <button
                onClick={() => {
                  setShowSubmenu(!showSubmenu);
                  setSelectedSub(null);
                }}
                className="flex justify-between items-center w-full text-white hover:text-emerald-400 transition"
              >
                محصولات

                <span
                  className={`transition ${
                    showSubmenu ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {showSubmenu && (
                <ul className="mr-4 mt-3 space-y-2">

                  {submenuData.map((item) => (
                    <li key={item.title}>

                      <button
                        onClick={() =>
                          setSelectedSub(
                            selectedSub === item.title
                              ? null
                              : item.title
                          )
                        }
                        className="flex justify-between items-center w-full text-gray-200 hover:text-emerald-400 transition"
                      >
                        {item.title}

                        <span
                          className={`transition ${
                            selectedSub === item.title
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {selectedSub === item.title && (
                        <ul className="mr-5 mt-2 space-y-2 border-r border-gray-500 pr-3">

                          {item.projects.map((project) => (
                            <li key={project.title}>
                              <Link
                                href={project.href}
                                onClick={closeMenu}
                                className="block text-sm text-gray-400 hover:text-emerald-400 transition"
                              >
                                {project.title}
                              </Link>
                            </li>
                          ))}

                        </ul>
                      )}

                    </li>
                  ))}

                </ul>
              )}
            </li>

            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block text-white hover:text-emerald-400 transition"
              >
                درباره ما
              </Link>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}