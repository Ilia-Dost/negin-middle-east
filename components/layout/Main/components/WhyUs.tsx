"use client";

export default function WhyUs() {
  return (
    <section className="py-20 px-6 mt-48 md:mt-0 lg:mt-0">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="
            text-3xl 
            md:text-4xl 
            font-bold 
            text-slate-800 
            mb-4
          ">
            خانه‌ی شما، تعهدِ ماست.
          </h2>


          <p className="
            text-lg 
            text-slate-500 
            max-w-2xl 
            mx-auto
            leading-8
          ">
            ما در نگین خاورمیانه، طی این ۱۵ سال یاد گرفته‌ایم که
            ساخت‌وساز فقط آجر و آهن نیست؛ بلکه ساختن فضایی برای
            آرامش شماست.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8 mb-16">


          <div
            className="
              bg-white
              p-8
              rounded-2xl
              shadow-sm
              border
              border-slate-200
              hover:shadow-lg
              transition-all
              lg:hover:-translate-y-2
              lg:duration-300
            "
          >

            <div
              className="
                w-12
                h-12
                bg-blue-100
                text-blue-600
                rounded-xl
                flex
                items-center
                justify-center
                mb-6
              "
            >

              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>

            </div>



            <h3 className="
              text-xl
              font-bold
              text-slate-800
              mb-3
            ">
              شفافیت کامل، از ابتدا تا کلید نهایی
            </h3>


            <p className="
              text-slate-500
              leading-relaxed
            ">
              ما در کنار شما هستیم تا هیچ ابهامی باقی نماند.
              از همان ابتدا، برنامه زمانی و بودجه‌بندی را با دقت
              شفاف می‌کنیم. هیچ هزینه‌ی پنهانی در کار نیست،
              چون معتقدیم اعتماد با شفافیت ساخته می‌شود.
            </p>

          </div>





          <div
            className="
              bg-white
              p-8
              rounded-2xl
              shadow-sm
              border
              border-slate-200
              hover:shadow-lg
              transition-all
              lg:hover:-translate-y-2
              lg:duration-300
            "
          >

            <div
              className="
                w-12
                h-12
                bg-blue-100
                text-green-500
                rounded-xl
                flex
                items-center
                justify-center
                mb-6
              "
            >

              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />

              </svg>

            </div>



            <h3 className="
              text-xl
              font-bold
              text-slate-800
              mb-3
            ">
              گارانتی کیفیت، برای آرامش خیال شما
            </h3>


            <p className="
              text-slate-500
              leading-relaxed
            ">
              ما به دقت تیم فنی‌مان اطمینان داریم و کیفیت اجرا
              را گارانتی می‌کنیم. مسئولیت هرگونه نقص فنی با ماست؛
              ما تا آخرین لحظه کنارتان هستیم تا از بابت سازه
              خیالتان راحت باشد.
            </p>

          </div>


        </div>





        <div
          className="
            bg-slate-900
            rounded-3xl
            p-8
            md:p-12
            text-center
            text-white
          "
        >

          <h3 className="
            text-2xl
            font-bold
            mb-4
          ">
            هنوز سوالی دارید؟ بیایید گپی بزنیم!
          </h3>


          <p className="
            mb-8
            text-slate-300
          ">
            یک جلسه مشاوره رایگان، بدون تعهد؛ فقط برای اینکه
            بهتر راهنمایی‌تان کنیم.
          </p>



          <a
            href="https://t.me/ily4_CFZ"
            className="
              inline-block
              bg-white
              text-blue-600
              px-8
              py-3
              rounded-full
              font-bold
              hover:bg-blue-50
              transition
              duration-300
              shadow-lg
            "
          >
            درخواست مشاوره رایگان
          </a>


        </div>


      </div>

    </section>
  );
}