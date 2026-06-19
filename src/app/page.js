import HeroSection from "@/components/HomePage/heroSection/HeroSection";
import OurSpecializations from "@/components/HomePage/ourSpecializations/OurSpecializations";
import Statistics from "@/components/HomePage/statistics/Statistics";
import WhyChooseUs from "@/components/HomePage/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <OurSpecializations></OurSpecializations>
      <Statistics></Statistics>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
