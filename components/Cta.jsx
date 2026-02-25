// import React from "react";
// import { Button } from "./ui/button";
// import Link from "next/link";

// export default function Cta() {
//   return (
//     <section className="py-24 ">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center">
//           <h2 className="h2 max-w-xl text-center mb-8">
//             Prepared to turn your Imagination into Reality ? <br /> <br /> I AM HERE TO HELP .
//           </h2>
//           <Link href='/contact'>
//             <Button>Contact Me</Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import Link from "next/link";
import { SlideIn, TextReveal } from "react-animate-components-ts";

const imaginationToRealityWords = [
  "Prepared",
  "to",
  "turn",
  "your",
  "Imagination",
  "into",
  "Reality",
  "?",
  "<br />",
  "<br />",
  "I",
  "AM",
  "HERE",
  "TO",
  "HELP",
  ".",
];
export default function Cta() {
  return (
    <section className="py-10 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            <TextReveal delay={0.5} words={imaginationToRealityWords} />
          </h2>
          <SlideIn direction="left" delay={1}>
            <Link href="/contact">
              <div className="dark:bg-white dark:text-black text-xl rounded-lg p-5 font-bold text-white bg-black">
                Contact Me
              </div>
            </Link>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
