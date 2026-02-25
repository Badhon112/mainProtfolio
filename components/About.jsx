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

// const skillData = [
//   {
//     title: "Skills",
//     data: [
//       { icon: "/Linux.png", name: "Linux" },
//       { icon: "/Git.png", name: "Git/Github" },
//       { icon: "/Reacticon.png", name: "React Js" },
//       {
//         icon: "/Node.png",
//         name: "Node Js, Express JS",
//       },
//       {
//         icon: "/Mongo.png",
//         name: "MongoDB",
//       },
//       {
//         icon: "/Mern.png",
//         name: "MERN Stack",
//       },
//       {
//         icon: "/Next.png",
//         name: "Next Js",
//       },
//       {
//         icon: "/VR.png",
//         name: "Virtual Reality (VR)",
//       },
//       {
//         icon: "/3d.png",
//         name: "3d Model / 3d Animation",
//       },
//       {
//         icon: "/Three.png",
//         name: "Three.Js / R3F",
//       },
//       {
//         icon: "/Bld.png",
//         name: "Blender",
//       },
//       {
//         icon: "/jankins.png",
//         name: "Jankins",
//       },
//       {
//         icon: "/Docker.png",
//         name: "Docker",
//       },
//       {
//         icon: "/Kub.png",
//         name: "Kubernet",
//       },
//     ],
//   },
// ];

const skillData = [
  {
    title: "Skills",
    data: [
      // { icon: "/Linux.png", name: "Linux" },
      // { icon: "/Git.png", name: "Git / GitHub / GitLab" },
      // { icon: "/Reacticon.png", name: "React.js" },
      // { icon: "/Next.png", name: "Next.js" },
      // { icon: "/Node.png", name: "Node.js / Express.js" },
      // { icon: "/Typescript.png", name: "TypeScript" },
      // { icon: "/Python.png", name: "Python" },
      // { icon: "/Mongo.png", name: "MongoDB" },
      // { icon: "/Mern.png", name: "MERN Stack" },
      // { icon: "/AWS.png", name: "AWS Cloud" },
      // { icon: "/Terraform.png", name: "Terraform" },
      // { icon: "/Ansible.png", name: "Ansible" },
      // { icon: "/jankins.png", name: "Jenkins CI/CD" },
      // { icon: "/Nginx.png", name: "Nginx" },
      // { icon: "/Docker.png", name: "Docker" },
      // { icon: "/Kub.png", name: "Kubernetes" },
      // { icon: "/AWS.png", name: "AWS EKS" },
      // { icon: "/Prometheus.png", name: "Prometheus" },
      // { icon: "/Grafana.png", name: "Grafana" },
      // { icon: "/Sonarqube.png", name: "SonarQube" },
      // { icon: "/Trivy.png", name: "Trivy Security Scan" },
      // { icon: "/VR.png", name: "Virtual Reality (VR)" },
      // { icon: "/3d.png", name: "3D Modeling / Animation" },
      // { icon: "/Three.png", name: "Three.js / R3F" },
      // { icon: "/Bld.png", name: "Blender" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        name: "Linux",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        name: "Git / GitHub / GitLab",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React.js",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js / Express.js",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        name: "Python",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "MERN Stack",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        name: "AWS Cloud",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        name: "Terraform",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
        name: "Ansible",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        name: "Jenkins CI/CD",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        name: "Nginx",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        name: "Docker",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        name: "Kubernetes",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        name: "AWS EKS",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
        name: "Prometheus",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
        name: "Grafana",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
        name: "SonarQube",
      },
      {
        icon: "https://raw.githubusercontent.com/aquasecurity/trivy/main/docs/imgs/logo.png",
        name: "Trivy Security Scan",
      },
      {
        icon: "/VR.png",
        name: "Virtual Reality (VR)",
      },
      {
        icon: "/3d.png",
        name: "3D Modeling / Animation",
      },
      {
        icon: "/Three.png",
        name: "Three.js / R3F",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
        name: "Blender",
      },
    ],
  },
];

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="min-h-screen pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col items-center justify-center xl:flex-row">
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
                      I'm a highly skilled web developer with over{" "}
                      <strong> 3.5 years of professional experience,</strong>{" "}
                      working across both startups and production-grade
                      projects. I have comprehensive knowledge of the full
                      software lifecycle, ranging from{" "}
                      <strong>
                        {" "}
                        MERN stack and VR-based application development to
                        DevSecOps practices including testing, CI/CD automation,
                        monitoring, security integration, and cloud deployment
                        on AWS.
                      </strong>
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 mt-10">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-5 mx-auto xl:mx-0">
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
                      <div className="grid xl:grid-cols-3 gap-4 mb-12 mt-10">
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name, icon } = item;
                            return (
                              <div
                                className="flex items-center gap-x-5 mx-auto xl:mx-0"
                                key={index}>
                                <DevImg
                                  containerStyles="w-12 h-12 relative rounded-full"
                                  imgSrc={icon}
                                />

                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                      <div>
                        <div className="text-primary">Tools That I Use</div>
                        <div className="border-b border-border"></div>
                        <div>
                          {" "}
                          • VS Code • Figma • Docker Desktop • Postman • GitHub
                          • AWS Console
                        </div>
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
