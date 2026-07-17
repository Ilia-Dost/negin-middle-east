"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "محصولات",
    href: "/Allproduct",
    submenu: [
      {
        title: "تجاری",
        href: "/products/commercial",
        projects: [
          { title: "نیکا مال", href: "/product/2" },
          { title: "تهران مال", href: "/product/3" },
          { title: "پالادیوم", href: "/product/4" },
          { title: "سام سنتر", href: "/product/5" },
        ],
      },
      {
        title: "مسکونی",
        href: "/products/residential",
        projects: [
          { title: "مروارید سفید", href: "/product/1" },
          { title: "اکباتان", href: "/product/6" },
          { title: "چناران پارک رزیدنس", href: "/product/7" },
        ],
      },
    ],
  },
  {
    title: "درباره ما",
    href: "/about",
  },
];

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex flex-wrap bg-gray-700 w-[80%] h-10 mt-8 mr-28 rounded-3xl relative p-2 z-50 overflow-visible">

      <ul className="flex items-center">
        {links.map((item, index) => (
          <li
            key={index}
            className="relative list-none mr-10"
            onMouseEnter={() => setHoveredItem(item.title)}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoveredSubItem(null);
            }}
          >
            <Link
              href={item.href}
              className="block text-white hover:text-emerald-700 transition-colors select-none whitespace-nowrap"
            >
              {item.title}
            </Link>

            {item.submenu && hoveredItem === item.title && (
              <div
                className="absolute top-full right-0 pt-2 z-50 transition-all duration-200"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setHoveredSubItem(null);
                }}
              >
                <div className="bg-gray-800 rounded-lg shadow-xl min-w-[200px] overflow-visible">

                  {item.submenu.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative"
                      onMouseEnter={() => setHoveredSubItem(sub.title)}
                      onMouseLeave={() => setHoveredSubItem(null)}
                    >
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-emerald-700 transition-colors whitespace-nowrap"
                      >
                        {sub.title}
                      </Link>

                      {sub.projects &&
                        hoveredSubItem === sub.title && (
                          <div
                            className="absolute right-full top-0 pr-2 z-50 transition-all duration-200"
                            onMouseEnter={() =>
                              setHoveredSubItem(sub.title)
                            }
                            onMouseLeave={() =>
                              setHoveredSubItem(null)
                            }
                          >
                            <div className="bg-gray-800 rounded-lg shadow-xl min-w-[180px]">

                              {sub.projects.map((project, projIndex) => (
                                <Link
                                  key={projIndex}
                                  href={project.href}
                                  className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-emerald-700 transition-colors whitespace-nowrap"
                                >
                                  {project.title}
                                </Link>
                              ))}

                            </div>
                          </div>
                        )}
                    </div>
                  ))}

                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

    </nav>
  );
}