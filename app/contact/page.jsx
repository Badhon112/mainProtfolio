import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 max-2xl:grid-cols-1">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 🖐
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work for your Project</h1>
            <p className="max-w-[400px]">
              I believe in the power of teamwork. By combining our skills and
              creativity, we can create something truly exceptional. Your
              vision, my expertise – a winning combination.
            </p>
          </div>
          <div className=" xl:flex w-full flex flex-col max-2xl:mt-9">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
