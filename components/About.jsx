import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Badhon Biswas",
  },
  {
    icon: <MailIcon size={20} />,
    text: "biswasbadhon896@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Dhaka,Bangladesh",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0174629778",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor on Computer Science",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 16 April 2001",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "City University",
        qualification: "Bachelor of Science",
        years: "2019-2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      { icon: "/Linux.png", name: "Linux" },
      { icon: "/Git.png", name: "Git/Github" },
      { icon: "/Reacticon.png", name: "React Js" },
      {
        icon: "/Node.png",
        name: "Node Js, Express JS",
      },
      {
        icon: "/Mongo.png",
        name: "MongoDB",
      },
      {
        icon: "/Mern.png",
        name: "MERN Stack",
      },
      {
        icon: "/Next.png",
        name: "Next Js",
      },
      {
        icon: "/VR.png",
        name: "Virtual Reality (VR)",
      },
      {
        icon: "/3d.png",
        name: "3d Model / 3d Animation",
      },
      {
        icon: "/Three.png",
        name: "Three.Js / R3F",
      },
      {
        icon: "/Bld.png",
        name: "Blender",
      },
      {
        icon: "/jankins.png",
        name: "Jankins",
      },
      {
        icon: "/Docker.png",
        name: "Docker",
      },
      {
        icon: "/Kub.png",
        name: "Kubernet",
      },
    ],
  },
];

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="w-[505px] h-[505px] relative"
              imgSrc="/profile1.jpg"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full flex justify-around xl:grid-cols-3  xl:border dark:border-none">
                <TabsTrigger value="personal" className="w-[162px] xl:w-auto">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="skills" className="w-[162px] xl:w-auto">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left xl:mt-8">
                    <h3 className="h3 mb-4">
                      Unmatched Knowledge & Skills for 2 years
                    </h3>
                    <p className="max-w-xl mx-auto xl:mx-0 ">
                      I'm a highly skilled and experienced web developer (over 2
                      years of professional knowledge in Web development), used
                      to working with established projects and startups alike. I
                      have a thorough knowledge of all aspects of web
                      development, all the way from MERN Stack and Virtual
                      Reality (VR) to testing, automation, monitoring, and
                      Deploying Applications in the Cloud.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 mt-10">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-5 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div>
                      <div className="text-primary">Education</div>
                      <div className="border-b border-border"></div>
                      <div className="text-lg">
                        BSC in CSE (City University) CGPA 3.20/4
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mt-5">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bangla, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">The Skills I have </h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="grid xl:grid-cols-2 gap-4 mb-12 mt-10">
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name, icon } = item;
                            return (
                              <div
                                className="flex items-center gap-x-5 mx-auto xl:mx-0"
                                key={index}
                              >
                                <DevImg
                                  containerStyles="w-12 h-12 relative rounded-full"
                                  imgSrc={icon}
                                />

                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div>
                        <div className="text-primary">Tools That I Use</div>
                        <div className="border-b border-border"></div>
                        <div>Blender , VsCode , Figma</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
