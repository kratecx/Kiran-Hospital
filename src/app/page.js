import FeaturedCourses from "@/components/home/FeaturedCourses";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <>
    <HeroSection />
    <ServicesOverview />
    <FeaturedCourses />
    <Testimonials />
    {/* <StatsCounter /> */}
    
    </>  
  );
}
