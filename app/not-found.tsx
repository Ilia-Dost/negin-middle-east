import Link from "next/link";
export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-600 flex items-center justify-center px-5">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 text-center max-w-2xl w-full">

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          صفحه مورد نظر پیدا نشد
        </h2>

        <p className="mt-5 text-gray-500 leading-8 text-base md:text-lg lg:text-xl">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است
          آدرس آن تغییر کرده باشد.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-bold"
          >
            بازگشت به صفحه اصلی
          </Link>

          <Link
            href="/Allproduct"
            className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition text-gray-700 px-8 py-4 rounded-2xl font-bold"
          >
            مشاهده پروژه‌ها
          </Link>

        </div>

      </div>

    </main>
  );
}