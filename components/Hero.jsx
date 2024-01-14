import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
//components

import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[85vh] xl:pt-28  bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Web Developer
            </div>
            <h1 className="h1 mb-4">Hello I am Badhon Biswas</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I have a thorough knowledge of all aspects of web development, all
              the way from MERN Stack to Virtual Reality
            </p>
            {/* button  */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image  */}
          <div className="hidden xl:flex relative ">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNumber={2}
              badgeText="Years Of Experience"
            />
            {/* <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNumber={10}
              // endCountText='K'
              badgeText="Finished Project"
            /> */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTodoFill />}
              endCountNumber={30}
              // endCountText='K'
              badgeText="Finished Project"
            />
            <DevImg
              containerStyles="w-[510px] h-[462px] bg-no-repeat  rounded-full"
              imgSrc="/Profile2.jpg"
            />
          </div>
        </div>
        {/* icons  */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
