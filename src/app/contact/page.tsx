// "use client";
import React from "react";
import { Meteors } from "../../components/ui/meteors";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/utils/cn";
import { PinContainer } from "../../components/ui/3d-pin";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,

} from "@tabler/icons-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";


interface LabelInputContainerProps {
  className?: string;
  children: React.ReactNode;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);



const words = "A third-year engineering student with hands-on experience in full-stack web development. currently honing skills through internships in website design and development.";


 function MeteorsDemo() {
  return (
    // <div className="min-h-screen bg-black py-12 pt-36">
     <div className=" min-h-screen relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden flex flex-col justify-center items-center">
     {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"> */}

     {/* <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black opacity-50 my-4"> */}
      {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact
      </h2> */}
    
{/*           
       <form action="" className="my-7">
       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>

            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
     
          <LabelInputContainer>

            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
         
          </LabelInputContainer>
        
        </div>  

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          
        </button>
        
     
      </form>    */}

                <div className="my-36">
                     
<LabelInputContainer>

<Label htmlFor="firstname">First name</Label>
<Input id="firstname" placeholder="Tyler" type="text" />
</LabelInputContainer>

<LabelInputContainer>

<Label htmlFor="lastname">Last name</Label>
<Input id="lastname" placeholder="Durden" type="text" />

</LabelInputContainer>

<LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
        </button>     
     
       </div>
     
       <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-6xl">
               
              <CardContainer className="inter-var m-4 transition duration-300 ease-in-out hover:shadow-xl hover:shadow-pink-500/50 hover:shadow-blue-500/50 hover:shadow-yellow-500/50 rounded">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                 <div className="flex justify-center align-middle">

                 <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white text-2xl"
                  >
                 <h1 className="font-extrabold text-2xl font-bold animate-textColorChange hover:animate-textColorChange">Jaydip Jadhav</h1>
                 
                 <CardItem className="font-thin">
                 <TextGenerateEffect words={words}  className="font-light"/>
           
                 
                 </CardItem>
                  </CardItem>
                
                  <CardItem translateZ="100" className="w-full mt-4 w-64">
                    <Image
                      src="/courses/jay.jpg"
                      height="600"
                      width="600"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="my"
                    />
                  </CardItem>
                 </div>
              
                </CardBody>
              </CardContainer>

              
             
              
              </div>
          </div>
      </div>


       



          <Meteors number={60} />

          
      {/* </div> */}
       </div>
        //  </div>
   
  );
}

export default MeteorsDemo;