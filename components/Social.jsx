"use client";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import Link from "next/link";
const icons = [
  {
    path: "https://www.linkedin.com/in/badhon-biswas-5b1a20239/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Badhon112",
    name: <RiGithubFill />,
  },
  // {
  //   path: "/",
  //   name: <RiFacebookBoxFill />,
  // },
];
export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}> {icon.name}</div>
        </Link>
      ))}
    </div>
  );
}
