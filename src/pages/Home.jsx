import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import OurFacilities from "../components/home/OurFacilities";
import Tabs from "../components/home/Tabs";
import MembershipSection from "../components/home/MembershipSection";
import HospitalitySection from "../components/home/Hospitality";
import WhyChooseUsSection from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Features from "../components/home/Features";

const Home = () => {
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-10 px-2">
      <Helmet>
        <title>CloudHostel | Home</title>
      </Helmet>
      {/* hero section */}
      <Hero />
      {/* Tabs section */}
      <p className=" text-primary dark:text-gray-400 sm:text-5xl text-2xl font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 sm:w-[350px] w-[200px] ml-20  sm:mx-auto mt-5 mb-10">
        Featured Meals
      </p>
      <Tabs />
      {/* Membership section */}
      <MembershipSection />
      {/* Hospitality section */}
      <HospitalitySection />
      {/* Why Choose Us section */}
      <WhyChooseUsSection />
      {/* Our Facilities section */}
      <OurFacilities />
      {/*Features section */}
      <Features />
      {/* Our Testimonials section */}
      <Testimonials />
    </div>
  );
};

export default Home;
