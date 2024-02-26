"use client";
import React from "react";
import Image from "next/image";
import img from "../../image/1.png";

export default function Banner() {
  return (
    <div className="bg-[#0d1117] h-auto mb-10 w-full py-[1px]">
      <div className="max-w-[1240px] my-[50px] mx-auto text-center px-2 ">
        <div className="text-[3rem]  md:text-[5.5rem] text-[#ccdae7] font-[600] md:px-40 "  >
          Design + Webflow 
        </div>
        <h2 className="text-[#ccdae7] mt-1 md:text-[80px] text-4xl font-bold" style={{fontWeight: '600'}}>
        for {" "}
          <span class="md:text-[83px] bg-gradient-to-br from-red-500 to-purple-500 text-transparent bg-clip-text" style={{fontWeight: '600'}}>
           <b>Tech Startups</b> 
          </span>{" "}
        </h2>
        <div className="text-[17px] text-[#ccdae7] px-1  mt-8 md:text-[1.5rem] md:px-64 text-center ">
          Work with a team of designers and certified Webflow  developers
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
