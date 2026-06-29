import FeaturedDoctors from "@/components/HomePage/FeaturedDoctors/FeaturedDoctors";
import HeroSection from "@/components/HomePage/heroSection/HeroSection";
import OurSpecializations from "@/components/HomePage/ourSpecializations/OurSpecializations";
import FeaturedPatientReviews from "@/components/HomePage/PatientReviews/FeaturedPatientReviews";
import Statistics from "@/components/HomePage/statistics/Statistics";
import WhyChooseUs from "@/components/HomePage/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedDoctors></FeaturedDoctors>
      <OurSpecializations></OurSpecializations>
      <Statistics></Statistics>
      <FeaturedPatientReviews></FeaturedPatientReviews>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
