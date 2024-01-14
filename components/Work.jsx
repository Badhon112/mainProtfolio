"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

//Components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/Profile2.jpg",
    category: "react js",
    name: "Search and Filter Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat?",
    link: "/",
    github: "/ ",
  },
  {
    image: "/Profile2.jpg",
    category: "react js",
    name: "Search and Filter Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat?",
    link: "/",
    github: "/ ",
  },
  {
    image: "/Profile2.jpg",
    category: "react js",
    name: "Search and Filter Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat?",
    link: "/",
    github: "/ ",
  },
];

export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12  xl:h-[400px] flex justify-center flex-col items-center xl:items-start">
          <h2 className="mb-4 text-2xl  tracking-[4px]">Latest Projects</h2>
          <p className="mb-8">
            Lets review Some of my Leatest Project
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
