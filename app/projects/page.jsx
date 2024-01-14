"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
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
    category: "Node JS",
    name: "Search and Filter Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat?",
    link: "/",
    github: "/ ",
  },
  {
    image: "/Profile2.jpg",
    category: "Next Js",
    name: "Search and Filter Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat?",
    link: "/",
    github: "/ ",
  },
  {
    image: "/Profile2.jpg",
    category: "Next Js",
    name: "Search and Filter Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat?",
    link: "/",
    github: "/ ",
  },
];
const uniqueCategories = [
  "All projects",
  ...new Set(projectData.map((item) => item.category)),
];
export default function Projects() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All projects");
  // console.log(category);
  const filteredProjects = projectData.filter((project) => {
    return category === "All projects"
      ? project
      : project.category === category;
  });
  console.log(filteredProjects);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mb-8 xl:mb-16 text-center mx-auto text-4xl font-bold">
          My Projects
        </h2>
        <Tabs defaultValue={category}  className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
