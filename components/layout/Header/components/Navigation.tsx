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
        className="flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 transition"
      >
        {show ? (
          <span className="text-3xl text-slate-700">×</span>
        ) : (
          <>
            <span className="w-7 h-1 bg-slate-700 rounded mb-1"></span>
            <span className="w-7 h-1 bg-slate-700 rounded mb-1"></span>
            <span className="w-7 h-1 bg-slate-700 rounded"></span>
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
            bg-white
            border
            border-slate-200
            shadow-xl
            p-5
          "
        >
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-slate-700 hover:text-blue-600 transition"
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
                className="flex justify-between items-center w-full text-slate-700 hover:text-blue-600 transition"
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
                            selectedSub === item.title ? null : item.title
                          )
                        }
                        className="flex justify-between items-center w-full text-slate-600 hover:text-blue-600 transition"
                      >
                        {item.title}

                        <span
                          className={`transition ${
                            selectedSub === item.title ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {selectedSub === item.title && (
                        <ul className="mr-5 mt-2 space-y-2 border-r border-slate-300 pr-3">
                          {item.projects.map((project) => (
                            <li key={project.title}>
                              <Link
                                href={project.href}
                                onClick={closeMenu}
                                className="block text-sm text-slate-500 hover:text-blue-600 transition"
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
                className="block text-slate-700 hover:text-blue-600 transition"
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