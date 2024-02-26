"use client";
import React, {useState} from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styles from './header.css'

export default function Header() {
 const [toggle,setToggle] = useState(false);

 const scrollToWhyUs = () => {
  setToggle(false);
  scroll.scrollTo('whyUsSection', { smooth: 'easeInOutQuart', duration: 500 });
};

 const scrollToPricing = () => {
  setToggle(false);
  scroll.scrollTo('pricingSection', { smooth: 'easeInOutQuart', duration: 500 });
};

const scrollToWhyWebflow = () => {
  setToggle(false);
  scroll.scrollTo('webFlowSection', { smooth: 'easeInOutQuart', duration: 500 });
};

const scrollToFaqs = () => {
  setToggle(false);
  scroll.scrollTo('faqsSection', { smooth: 'easeInOutQuart', duration: 500 });
};
  return (
    <div className=" bg-[#0d1117] p-4 ">
      <div className="max-w-[1240px]  mx-auto text-white flex justify-between  ">
        <div className="text-3xl font-bold cursor-pointer ">Logo</div>

        {
          toggle ? 
          < IoMdClose onClick={() => setToggle(!toggle) } className="text-white text-2xl cursor-pointer md:hidden block " />
         :
        < CiMenuFries onClick={() => setToggle(!toggle) } className="text-white text-2xl cursor-pointer md:hidden block " />
        }

        <div className="md:flex hidden gap-12 " >
        <ul className="flex  gap-8 items-center cursor-pointer text-[#ccdae7] text-[14px] " >
          <li className="relative"><ScrollLink to="webFlowSection" smooth={true} duration={500} onClick={scrollToWhyWebflow}>Why Webflow</ScrollLink></li>
          <li className="relative"><ScrollLink to="whyUsSection" smooth={true} duration={500} onClick={scrollToWhyUs}>Why us</ScrollLink></li>
          <li className="relative"><ScrollLink to="pricingSection" smooth={true} duration={500} onClick={scrollToPricing}>Pricing</ScrollLink></li>
          <li className="relative"><ScrollLink to="faqsSection" smooth={true} duration={500} onClick={scrollToFaqs}>Faqs</ScrollLink></li>
        </ul>
        <button className="bg-[#0052cc] h-10 px-3 rounded-2xl  hover:bg-[#5b46a8] hover:text-white transition-all duration-300  " >Work With Us</button>

        </div>
        {/* responsive  */}
        <ul className= {`cursor-pointer text-center  fixed bg-black text-[#ccdae7] top-[67px] md:hidden w-full h-screen  transition-all duration-1000
              ${toggle ? 'left-[0]' :  'left-[-100%]' }`} >
          <li className="p-5"><ScrollLink to="webFlowSection" smooth={true} duration={500} onClick={scrollToWhyWebflow}>Why Webflow</ScrollLink></li>
          <li className="p-5"><ScrollLink to="whyUsSection" smooth={true} duration={500} onClick={scrollToWhyUs}>Why us</ScrollLink></li>
          <li className="p-5"><ScrollLink to="pricingSection" smooth={true} duration={500} onClick={scrollToPricing}>Pricing</ScrollLink></li>
          <li className="p-5"><ScrollLink to="faqsSection" smooth={true} duration={500} onClick={scrollToFaqs}>Faqs</ScrollLink></li>
        <button className="bg-[#0052cc]  text-black h-10 px-5 m-5 rounded-md  hover:bg-[#5b46a8] hover:text-white transition-all duration-300  " >Contact Us</button>
        </ul>
      </div>

    </div>
  );
}
