import Image from "next/image";
import StatsSection from "@/components/layout/Main/components/StatsSection";

const features = [
  {
    icon: "🏗",
    title: "کیفیت ساخت",
    description:
      "استفاده از بهترین متریال و استانداردهای روز دنیا.",
  },
  {
    icon: "🤝",
    title: "تعهد",
    description:
      "تحویل پروژه‌ها در زمان مقرر با کیفیت مطلوب.",
  },
  {
    icon: "💡",
    title: "نوآوری",
    description:
      "استفاده از فناوری‌های نوین صنعت ساختمان.",
  },
  {
    icon: "🛡",
    title: "اعتماد",
    description:
      "رضایت مشتریان، مهم‌ترین سرمایه شرکت نگین.",
  },
];

const steps = [
  "مشاوره",
  "طراحی",
  "اجرا",
  "تحویل",
];


export default function About() {

  return (

    <main className="w-full min-h-screen bg-slate-50">


      <section className="
        relative
        w-full
        h-[350px]
        md:h-[500px]
        lg:h-[700px]
      ">

        <Image
          src="/img/photo1783319682.jpeg"
          alt="درباره ما"
          fill
          priority
          className="object-cover"
        />


        <div className="
          absolute
          inset-0
          bg-black/60
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-5
        ">


          <h1 className="
            text-white
            text-4xl
            md:text-6xl
            lg:text-8xl
            font-bold
          ">
            درباره شرکت نگین
          </h1>


          <p className="
            text-white/90
            mt-6
            text-base
            md:text-xl
            lg:text-2xl
            max-w-3xl
            leading-8
          ">
            بیش از ۱۵ سال تجربه در طراحی، اجرا و مدیریت پروژه‌های
            ساختمانی در سراسر کشور
          </p>


        </div>


      </section>






      <section className="
        max-w-7xl
        mx-auto
        py-16
        lg:py-24
        px-5
      ">


        <div className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
        ">


          <div>

            <Image
              src="/img/photo1783319611.jpeg"
              alt="شرکت"
              width={800}
              height={700}
              className="
                rounded-3xl
                object-cover
                w-full
                h-[300px]
                md:h-[450px]
                lg:h-[600px]
              "
            />

          </div>




          <div>


            <h2 className="
              text-3xl
              text-slate-800
              md:text-4xl
              lg:text-5xl
              font-bold
              mt-4
            ">
              ساخت آینده‌ای ماندگار
            </h2>



            <p className="
              mt-8
              leading-9
              text-slate-600
              text-base
              md:text-lg
              lg:text-xl
            ">
              متن معرفی شرکت...
            </p>


          </div>


        </div>


      </section>






      <section className="
        bg-slate-900
        py-20
      ">


        <div className="
          max-w-7xl
          mx-auto
          px-5
        ">


          <h2 className="
            text-center
            text-white
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
          ">
            چرا نگین خاورمیانه؟
          </h2>



          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-16
          ">


            {features.map((item) => (

              <div
                key={item.title}
                className="
                  bg-slate-800
                  rounded-3xl
                  p-8
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                <div className="text-5xl">
                  {item.icon}
                </div>


                <h3 className="
                  text-blue-400
                  text-2xl
                  font-bold
                  mt-6
                ">
                  {item.title}
                </h3>



                <p className="
                  text-slate-300
                  mt-4
                  leading-8
                ">
                  {item.description}
                </p>


              </div>

            ))}


          </div>


        </div>


      </section>






      <StatsSection />







      <section className="
        py-20
        mt-20
      ">


        <div className="
          max-w-7xl
          mx-auto
          px-5
        ">


          <h2 className="
            text-center
            text-slate-800
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
          ">
            روند اجرای پروژه
          </h2>




          <div className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-16
          ">


            {steps.map((step, index) => (

              <div
                key={step}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  text-center
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >

                <div className="
                  text-5xl
                  font-bold
                  text-blue-600
                ">
                  {index + 1}
                </div>


                <h3 className="
                  text-xl
                  text-slate-800
                  font-bold
                  mt-5
                ">
                  {step}
                </h3>


              </div>

            ))}


          </div>


        </div>


      </section>







      <section className="
        bg-blue-600
        py-20
      ">


        <div className="
          max-w-5xl
          mx-auto
          text-center
          px-5
        ">


          <h2 className="
            text-white
            text-3xl
            md:text-5xl
            font-bold
          ">
            آماده همکاری با شما هستیم
          </h2>



          <p className="
            text-white/90
            mt-8
            text-lg
            leading-9
          ">
            برای دریافت مشاوره و اجرای پروژه‌های ساختمانی
            با کارشناسان ما در ارتباط باشید.
          </p>




          <a
            href="https://t.me/ily4_CFZ"
            className="
              inline-block
              mt-10
              bg-white
              text-blue-600
              px-10
              py-4
              rounded-2xl
              font-bold
              hover:bg-blue-50
              transition
            "
          >
            تماس با ما
          </a>


        </div>


      </section>



    </main>

  );
}