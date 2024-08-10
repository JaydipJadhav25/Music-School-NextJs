
import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";


{/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="red"
        />
        <Spotlight
          className="-top-40 left-0 md:left-80 md:-top-40"
          fill="white"
        /> */}

function HeroSection(){
    return (
        <div
        className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >

            <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="red"
        />
        <Spotlight
          className="-top-40 left-0 md:left-80 md:-top-40"
          fill="white"
        />
         <div className="p-4 relative z-10 w-full text-center" >
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Master <br/> the art of music
        </h1>
        <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>

        </div>    

        <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link>
            </div>
            
        </div>
      )
}

export default HeroSection;