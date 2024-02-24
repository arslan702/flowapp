import Banner from "@/components/Banner/Banner";
import Faq2 from "@/components/Faq2";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Help from "@/components/Help";
import HelpTabs from "@/components/HelpTabs";
import People from "@/components/People";
import Pricing from "@/components/Pricing";
import Review from "@/components/Review";
import Why from "@/components/Why";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Help/>
      <HelpTabs/>
      <Review/>
      <Work/>
      <Why/>
      <People/>
      <Pricing/>
      <Faqs/>
      <Faq2/>
      <Footer/>
    </div>
  );
}
