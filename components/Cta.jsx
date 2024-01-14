import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your Imagination into Reality ? <br /> <br /> I AM HERE TO HELP .
          </h2>
          <Link href='/contact'>
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
