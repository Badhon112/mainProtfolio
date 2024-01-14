"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

export default function Form() {
  return (
    <form className="flex flex-col gap-y-5 mt-32">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder='Name'/>
        <User className="absolute right-6 " size={20}/>
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder='Email'/>
        <MailIcon className="absolute right-6 " size={20}/>
      </div>
      <div className="relative flex items-center">
        <Textarea type="description" id="description" placeholder='Type your message here'/>
        <User className="absolute top-4 right-6 " size={20}/>
      </div>
      <Button className='flex items-center max-w-40'>Let's Talk</Button>
    </form>
  );
}
