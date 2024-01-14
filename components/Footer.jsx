import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Social 
          containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
          iconStyles="text-primary text-[20px] dark:text-white/70"
          />
          <div className="text-sm">
            Copyright &copy; Youtube All Right reserved{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
