"use client";
import React, {useState} from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Header() {
 const [toggle,setToggle] = useState(false);
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
        <ul className="flex  gap-8 items-center cursor-pointer  " >
          <li >Why Webflow</li>
          <li>Why us</li>
          <li>Pricing</li>
          <li>Faqs</li>
        </ul>
        <button className="bg-[#0052cc] h-10 px-3 rounded-2xl hover:bg-white hover:text-black " >Work With Us</button>
        </div>
        {/* responsive  */}
        <ul className= {`cursor-pointer text-center  fixed bg-black text-white top-[67px] md:hidden w-full h-screen  transition-all duration-1000
              ${toggle ? 'left-[0]' :  'left-[-100%]' }`} >
          <li className="p-5" >Why Webflow</li>
          <li className="p-5">Why us</li>
          <li className="p-5">Pricing</li>
          <li className="p-5">Faqs</li>
        <button className="bg-white  text-black h-10 px-5 m-5 rounded-md hover:bg-white hover:text-black " >Contact Us</button>
        </ul>
      </div>

    </div>
  );
}
