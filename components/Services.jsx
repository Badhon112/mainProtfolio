import { GanttChartSquare, Box, MonitorPlay } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <Box size={72} strokeWidth={0.8} />,
    title: "3d Modeling",
    description:
      "Creating three-dimensional models of objects, characters, or scenes that will be integrated into the website",
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      " I'm comfortable navigating the entire web development landscape. From crafting pixel-perfect user interfaces to architecting robust server-side solutions, I love bringing concepts to life from end to end.",
  },
  {
    icon: <MonitorPlay size={72} strokeWidth={0.8} />,
    title: "Virtual Reality",
    description:
      "With a profound understanding of VR technologies and frameworks, I specialize in designing and developing virtual worlds that captivate and engage users. From VR simulations to interactive experiences, I bring ideas to life in the virtual space.",
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
              className="w-full max-w-[424px] h-72 flex flex-col pt-16 pb-10 justify-center items-center relative"
            >
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
