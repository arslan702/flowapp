import React from "react";
import { MdDevices } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { MdOutlineStyle } from "react-icons/md";

export default function Faq2() {
  return (
    // <div
    //   className=" bg-[#171e25]"  style={{
    //     width: "auto",
    //     borderTopLeftRadius: "50%",
    //     borderTopRightRadius: "50%",
    //     marginLeft: "-40em",
    //     paddingLeft: "40em",
    //     paddingRight: "30em",
    //     overflow: "hidden",
    //   }}
    // >
    <div className="bg-[#171e25]  md:w-auto md:rounded-tl-[70%] md:pl-[40em] md:ml-[-40em] md:rounded-tr-[35%]  md:pr-0 overflow-hidden relative ">
      {/* </div> */}

      <div className="pt-40 md:w-[80%] ">
        <div className="md:pl-52 flex mt-4 ">
          <div className="h-[3.75rem] w-[3.75rem] border-[3px] border-[#7f89ec] rounded-[50%] shadow-md shadow-inner-md flex justify-center items-center bg-[#4036be]">
            <MdDevices className="text-[25px] text-[#bcc6ee] shadow-2xl " />
          </div>

          <p className="text-[#6668eb] pl-4 pt-4 md:text-4xl text-2xl font-bold ">
            Webflow development
          </p>
        </div>
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            What do you need to get started?
          </p>

          <p className="pl-2">
            Just your designs, either via link (Adobe XD, Figma, Sketch, etc.)
            or through a file (PDF, PSD, video, any extension you can think of).
          </p>
        </div>
        <br />
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            Can I request custom functionality?
          </p>

          <p className="pl-2">
            With Webflow + Javascript, you can build anything you may need, but
            you should expect a higher price per page. The prices above apply to
            native Webflow development, basic Javascript, and commonly used
            integrations (Facebook Pixels, Google Analytics, Intercom...)
          </p>
        </div>
      </div>

      <div className="mt-10 md:w-[80%]">
        <div className="md:pl-52 flex mt-4 ">
          <div className="h-[3.75rem] w-[3.75rem] border-[3px] border-[#ec6464] rounded-[50%] shadow-md shadow-inner-md flex justify-center items-center bg-[#ac1515]">
            <MdOutlineVolunteerActivism className="text-[25px] text-[#f1b5b5] shadow-2xl " />
          </div>

          <p className="text-[#e23b3b] pl-7 pt-4 md:text-4xl text-2xl font-bold ">
            Bespoke web design
          </p>
        </div>
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            What do you need to get started?
          </p>
          <br />
          <p className="pl-2">
            We will ask to compile a short form with information about your
            company and your competitors. Get your copy (your website's written
            content) ready, it is the only element we can't do without.
          </p>
        </div>
        <br />
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            How much input will I have for my website design?
          </p>
          <br />
          <p className="pl-2">
            You can provide us with examples of websites you may like as well as
            your brand guidelines. <br />
            Outside of that, your job is to describe in the most accurate way
            the problems you aim to solve and the goals you aim to reach; ours
            is to find the best solution compatible with your budget.
          </p>
        </div>
        <br />
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            What do you need to get started?
          </p>

          <p className="pl-2">
            Just your designs, either via link (Adobe XD, Figma, Sketch, etc.)
            or through a file (PDF, PSD, video, any extension you can think of).
          </p>
        </div>
      </div>

      <div className=" mt-10 md:w-[80%]">
        <div className="md:pl-52 flex mt-4 ">
          <div className="h-[3.75rem] w-[3.75rem] border-[3px] border-[#26d5bf] rounded-[50%] shadow-md shadow-inner-md flex justify-center items-center bg-[#097068]">
            <MdOutlineStyle className="text-[25px] text-[#92f3e0] shadow-2xl " />
          </div>

          <p className="text-[#0eb3a0] pl-7 pt-4 md:text-4xl text-2xl font-bold ">
            Custom made assets
          </p>
        </div>
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            What kind of assets can you do for me?
          </p>
          <br />
          <p className="pl-2">
            We do icons, mockups, screenshots, and lottie animations. We don't
            do illustrations, gifs, and videos.
          </p>
        </div>
        <br />
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            Can you create a logo from my website?
          </p>
          <br />
          <p className="pl-2">
            We can do that, just know that the logo will look cool but won't
            undergo the level of study you may expect from a professional logo
            designer. Making great logos is harder than it looks!
          </p>
        </div>
        <br />
        <div className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold ">
            What do you need to get started?
          </p>

          <p className="pl-2">
            Just your designs, either via link (Adobe XD, Figma, Sketch, etc.)
            or through a file (PDF, PSD, video, any extension you can think of).
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="" >
      <div
        className="bg-gradient md:p-8 md:mx-auto md:w-[900px] "
        style={{
          background: "#0052cc",
          height: "320px",
          borderRadius: "17px",
          padding: "40px",
          boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        
        <p
          className="text-white md:text-5xl text-2xl md:p-4 font-bold text-center"
          style={{ lineHeight: "3.5rem" }}
        >
          Move even faster with{" "}
          <span className="bg-black py-1 px-4 md:py-1 md:px-4 rounded-full">
            flowyak
          </span>{" "}
          and a new Webflow website.
        </p>

        <br />
        <center>
          <button className="bg-[#1335a7]  mt-1 h-14 px-10 md:px-10 text-[20px] font-bold text-white rounded-[40px] shadow-2xl hover:bg-[#5b46a8] hover:text-white transition-all duration-300 ">
            Work With Us
          </button>
        </center>
      </div>
      </div>
    </div>
  );
}
