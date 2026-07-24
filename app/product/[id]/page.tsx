import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    notFound();
  }


  const infoCards = [
    {
      title: "مساحت",
      value: project.area,
    },
    {
      title: "طبقات",
      value: project.floors,
    },
    {
      title: "واحدها",
      value: project.units,
    },
    {
      title: "مدت اجرا",
      value: project.duration,
    },
  ];


  return (
    <main className="bg-slate-50">


      <section className="relative w-full h-64 md:h-[450px] lg:h-[700px]">

        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />


        <div className="
          absolute
          bottom-10
          right-6
          lg:right-16
          text-white
        ">

          <h1 className="
            text-3xl
            md:text-5xl
            lg:text-7xl
            font-bold
          ">
            {project.title}
          </h1>


          <p className="
            mt-4
            text-lg
            md:text-xl
            lg:text-3xl
            text-slate-200
          ">
            {project.type}
          </p>


          <p className="
            mt-5
            text-base
            md:text-lg
            lg:text-2xl
          ">
            📍 {project.location}
          </p>

        </div>

      </section>



      <section className="
        max-w-7xl
        mx-auto
        px-5
        py-10
        lg:px-10
        lg:py-16
      ">


        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

          {infoCards.map((item) => (

            <div
              key={item.title}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                shadow-md
                p-6
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <p className="
                text-slate-500
                text-sm
                lg:text-lg
              ">
                {item.title}
              </p>


              <h3 className="
                mt-4
                text-xl
                lg:text-3xl
                font-bold
                text-blue-600
              ">
                {item.value}
              </h3>


            </div>

          ))}

        </div>





        <div className="mt-16">

          <h2 className="
            text-3xl
            lg:text-5xl
            font-bold
            text-slate-800
          ">
            درباره پروژه
          </h2>


          <p className="
            mt-8
            text-slate-600
            leading-9
            lg:leading-[3rem]
            text-lg
            lg:text-2xl
          ">
            {project.description}
          </p>


        </div>





        <div className="mt-20">

          <h2 className="
            text-3xl
            lg:text-5xl
            font-bold
            text-slate-800
            mb-10
          ">
            خدمات انجام شده
          </h2>



          <div className="
            grid
            md:grid-cols-2
            gap-5
          ">


            {project.services.map((service) => (

              <div
                key={service}
                className="
                  flex
                  items-center
                  gap-4
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  shadow-md
                  px-6
                  py-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >


                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  text-blue-600
                  font-bold
                ">
                  ✓
                </div>



                <span className="
                  text-slate-700
                  text-lg
                  lg:text-xl
                  font-semibold
                ">
                  {service}
                </span>


              </div>

            ))}


          </div>


        </div>


      </section>


    </main>
  );
}