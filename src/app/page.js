import Banner from "@/components/Banner/Banner";
import Faq2 from "@/components/Faq2";
import Faqs from "@/components/Faqs";
import Help from "@/components/Help";
import People from "@/components/People";
import Pricing from "@/components/Pricing";
import Review from "@/components/Review";
import Why from "@/components/Why";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Help/>
      <Review/>
      <Work/>
      <Why/>
      <People/>
      <Pricing/>
      <Faqs/>
      <Faq2/>
    </div>
  );
}
