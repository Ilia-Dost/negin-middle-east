"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-white mb-5">
              نگین خاورمیانه
            </h3>

            <p className="text-gray-400 leading-8">
              شرکت ساختمانی نگین خاورمیانه با بیش از ۱۵ سال سابقه در
              اجرای پروژه‌های مسکونی، تجاری و اداری فعالیت می‌کند.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              دسترسی سریع
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-emerald-500"
                >
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link
                  href="/all-products"
                  className="transition hover:text-emerald-500"
                >
                  پروژه‌ها
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-emerald-500"
                >
                  درباره ما
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              اطلاعات تماس
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>📍 تهران، خیابان ولیعصر</p>

              <p>📞 09922590575</p>

              <p>✉ ilia.dr1384@gmail.com</p>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              شبکه‌های اجتماعی
            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="https://instagram.com/ily4_dr00"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-orange-500 transition"
              >
                Instagram
              </a>

              <a
                href="https://t.me/ily4_CFZ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-sky-500 transition"
              >
                Telegram
              </a>

              <a
                href="https://rubika.ir/ILY_cfz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-emerald-600 transition"
              >
                Rubika
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © ۱۴۰۵ تمامی حقوق این وب‌سایت متعلق به شرکت نگین خاورمیانه است.
        </div>

      </div>
    </footer>
  );
}