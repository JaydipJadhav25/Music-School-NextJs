
import { FeaturedCourese } from "@/components/FeaturalCourse";
import MusicSchoolTestimonial from "@/components/FooterCards";
import HeroSection from "@/components/HeroSection";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <FeaturedCourese/>
    <WhyChooseUs/>
    <MusicSchoolTestimonial/>
    <UpComingWebinar/>


    
   </main>
  );
}
