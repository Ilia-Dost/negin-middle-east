"use client";

import Counter from "./Counter";

const stats = [
  {
    title: "سال سابقه",
    value: 15,
    suffix: "+",
  },
  {
    title: "پروژه انجام شده",
    value: 250,
    suffix: "+",
  },
  {
    title: "سرمایه‌گذار",
    value: 30,
    suffix: "+",
  },
  {
    title: "رضایت مشتری",
    value: 98,
    suffix: "%",
  },
];

export default function StatsSection() {
  return (
    <section className="h-[200px]">
      <div className="w-[350px] md:w-[800px] lg:w-[1000px] xl:w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              text-center
              p-6
              rounded-2xl
              mt-8
              bg-white
              border
              border-slate-200
              shadow-md
              hover:shadow-lg
              transition-all
              duration-300
              lg:hover:-translate-y-2
            "
          >

            <Counter
              end={item.value}
              suffix={item.suffix}
              delay={2000 + index * 300}
              duration={2000}
              className="
                text-2xl
                lg:text-4xl
                font-bold
                text-blue-600
              "
            />


            <p
              className="
                mt-3
                text-slate-600
                text-xl
                lg:text-3xl
                font-medium
              "
            >
              {item.title}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}