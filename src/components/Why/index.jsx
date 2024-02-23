import React from "react";
import { MdGroups } from "react-icons/md";
import Image from "next/image";
import img from "../../image/2.jpg";
import { IoAppsSharp } from "react-icons/io5";

export default function Why() {
  return (
    <div className="text-white mt-10 gap-x-10 px-0 md:px-14 py-5">
      <div className=" text-[#ccdae7] ">
        <div className="flex gap-5 text-[13px] md:px-44 px-14">
          <p>Why Us</p>
          <p>04</p>
        </div>
        <div className="mt-5 flex gap-x-5 md:px-44 ">
          <div className="h-[2.90rem] w-[3rem] border-[3px] border-[#e49106] rounded-[50%] shadow-2xl  flex justify-center items-center bg-[#a84b05] ">
            <MdGroups className="text-[25px] text-[#f5dc7a] " />
          </div>
          <div className=" w-[35rem] ">
            <p
              className="md:text-[3em] text-3xl text-[#ccdae7] font-bold text-ellipsis"
              style={{ letterSpacing: "-.04em", lineHeight: "1.1" }}
            >
              We are a team of{" "}
              <span class="bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text gap-5 ">
                highly-skilled{" "}
              </span>
              designers and Webflow developers.{" "}
            </p>
            <br />
            <p
              className=" text-[20px]"
              style={{ letterSpacing: "-.02em", lineHeight: "1.5" }}
            >
              We offer all our clients 24/7 availability, transparent, fixed
              pricing and the guarantee to launch in less than 14 days.
            </p>
          </div>
        </div>

        <div className="md:flex ml-0 md:ml-40">
          <div className="md:w-[50%] ">
            <Image src={img} className="w-full" />
          </div>

          {/* Second div for text */}
          <div className="md:w-[40%] p-10 ml-0 md:ml-10">
            <div className="text-[#ccdae7]">
              <div className="flex space-x-3">
                <IoAppsSharp className="mt-2" />
                <p className="text-[20px] font-bold pt-1" style={{letterSpacing: '-.025em', lineHeight: '1.2'}}>
                  Design with real content
                </p>
              </div>
              <p className="md:pr-14 pt-2 text-[16px] text-[#a7b5c4]" style={{lineHeight: '1.33'}}>
                Design is a tool to communicate your message and present your
                product in the best possible way. That's why we always start
                from your content.
              </p>
              <br />
              <div className="flex space-x-3">
                <IoAppsSharp className="mt-3" />
                <p className="text-[20px] font-bold pt-1" style={{letterSpacing: '-.025em', lineHeight: '1.2'}}>
                  Keep your projects organised
                </p>
              </div>
              <p className=" md:pr-14 pt-2 text-[18px] text-[#a7b5c4]" style={{lineHeight: '1.33'}}>
                apps Keep your projects organised We follow Webflow development
                best practices to build websites that are easy to manage and
                grow.
              </p>
              <br />
              <div className="flex space-x-3">
                <IoAppsSharp className="mt-3" />
                <p className="text-[20px] font-bold pt-1" style={{letterSpacing: '-.025em', lineHeight: '1.2'}}>
                  Create reusable symbols
                </p>
              </div>
              <p className=" md:pr-14 pt-2 text-[18px] text-[#a7b5c4]" style={{lineHeight: '1.33'}}>
                We build components and sections that you can re-use throughout
                your website to create new pages without hiring an expensive
                developer.
              </p>
              {/* <br />
              <div className="flex space-x-3">
                <IoAppsSharp className="mt-3" />
                <p className="text-[20px] font-bold pt-1" style={{letterSpacing: '-.025em', lineHeight: '1.2'}}>
                  Integrations and automation
                </p>
              </div>
              <p className=" md:pr-14 pt-2 text-[18px] text-[#a7b5c4]" style={{lineHeight: '1.33'}}>
                We integrate your website with the tools you use plus Zapier or
                Make, so you can save time for what matters most.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
