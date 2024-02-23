"use client";
import React from "react";
import Image from "next/image";
import img from "../../image/1.png";

export default function Banner() {
  return (
    <div className="bg-[#0d1117] h-auto mb-10 w-full py-[1px]">
      <div className="max-w-[1240px] my-[50px] mx-auto text-center ">
        <div className="text-[2rem]  md:text-[6rem] text-[#ccdae7]" style={{letterSpacing: '-.3rem', fontWeight: '600'}}>
          Design + Webflow
        </div>
        <h2 className="text-[#ccdae7] mt-4 md:text-[80px] text-4xl font-bold" style={{fontWeight: '600'}}>
          for{" "}
          <span class="bg-gradient-to-br from-red-500 to-purple-500 text-transparent bg-clip-text" style={{fontWeight: '600'}}>
            Tech Startups
          </span>{" "}
        </h2>
        <div className="text-[15px] text-[#ccdae7]  mt-8 md:text-[1.5rem]">
          Work with a team of designers and certified Webflow <br /> developers
          who know how to help startups succeed.
        </div>
        <button className="bg-[#0052cc] mt-5 h-14 px-10 text-[20px] font-bold text-white rounded-[40px] shadow-2xl hover:bg-[#5b46a8] hover:text-white transition-all duration-300 ">
          Work With Us
        </button>
      </div>
      <br />
      <br />
      <center>
        <Image src={img} className="px-12 mb-10 " />
      </center>
    </div>
  );
}
