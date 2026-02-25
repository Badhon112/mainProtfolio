import {
  GanttChartSquare,
  Box,
  MonitorPlay,
  Cloud,
  ShieldCheck,
  Boxes,
  Workflow,
  Activity,
  Smartphone,
  Cpu,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Software Engineering",
    description:
      "Designing and building scalable web and mobile applications with modern full-stack architectures, focusing on performance, maintainability, and clean system design.",
  },
  {
    icon: <MonitorPlay size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    description:
      "Developing robust backend systems, REST APIs, and microservices using Node.js and modern frameworks with secure authentication and scalable data architectures.",
  },
  {
    icon: <Smartphone size={72} strokeWidth={0.8} />,
    title: "Mobile Application Development",
    description:
      "Designing and developing responsive and high-performance mobile applications for iOS and Android, integrating with backend services and cloud APIs to deliver seamless user experiences.",
  },
  {
    icon: <Cpu size={72} strokeWidth={0.8} />,
    title: "System Design & Architecture",
    description:
      "Creating scalable and maintainable software architectures, including database design, microservices structuring, and cloud-native solutions for high availability and performance.",
  },
  {
    icon: <Cloud size={72} strokeWidth={0.8} />,
    title: "AWS Cloud & DevOps",
    description:
      "Designing and deploying scalable cloud infrastructure on AWS using Infrastructure as Code, automated deployments, and highly available architectures.",
  },
  {
    icon: <ShieldCheck size={72} strokeWidth={0.8} />,
    title: "DevSecOps",
    description:
      "Integrating security throughout the development lifecycle with automated scanning, secure CI/CD pipelines, container hardening, and vulnerability management.",
  },
  {
    icon: <Boxes size={72} strokeWidth={0.8} />,
    title: "Containerization & Kubernetes",
    description:
      "Containerizing applications using Docker and orchestrating workloads with Kubernetes for scalable and resilient microservices deployments.",
  },
  {
    icon: <Workflow size={72} strokeWidth={0.8} />,
    title: "CI/CD Automation",
    description:
      "Building automated CI/CD pipelines that streamline build, testing, security validation, and deployment workflows.",
  },
  {
    icon: <Activity size={72} strokeWidth={0.8} />,
    title: "Monitoring & Observability",
    description:
      "Implementing monitoring and observability solutions using Prometheus and Grafana for performance tracking and proactive incident detection.",
  },
];

export default function Services() {
  return (
    <section className="mb-12 xl:mb-36 2xl:mt-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 xl:mb-24 text-center mx-auto tracking-[5px]">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[424px] h-72 flex flex-col pt-16 pb-10 justify-center items-center relative">
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="mb-4">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
