import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className="flex">
        <div className="hidden lg:block lg:w-[50%]">
          <p className="w-full text-slate-800 text-2xl font-bold lg:mr-6 lg:mt-6">
            نگین خاورمیانه
          </p>
        </div>

        <div className="sm:w-[100%] lg:w-[50%]">
          <div className="h-[80px] w-[80px] overflow-hidden rounded-full mr-5 sm:mr-36 md:mr-18 xl:mr-36">
            <Image
              src="/img/cropped-logo-2-1.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}