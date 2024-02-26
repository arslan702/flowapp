"use client";
import React, { useState } from "react";
import { MdDevices } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { MdOutlineStyle } from "react-icons/md";

const development = [
  {
    id: 1,
    question: "What do you need to get started?",
    answer: "Just your designs, either via link (Adobe XD, Figma, Sketch, etc.) or through a file (PDF, PSD, video, any extension you can think of).",
  },
  {
    id: 2,
    question: "Can I request custom functionality?",
    answer: "With Webflow + Javascript, you can build anything you may need, but you should expect a higher price per page. The prices above apply to native Webflow development, basic Javascript, and commonly used integrations (Facebook Pixels, Google Analytics, Intercom...)",
  },
  {
    id: 3,
    question: "Can I request complex interactions?",
    answer: "Yes, you can but should also expect a higher price per page. The prices above refer to more traditional tech websites, with middling layouts and animations (like Figma, Notion, and Stripe).",
  },
  {
    id: 4,
    question: "How long will you need to build a Webflow website?",
    answer: "The specific time frame varies depending on the complexity of the project, but a good rule of thumb is 1 day for each page."
  },
  {
    id: 5,
    question: "What's the cost to maintain a Webflow website?",
    answer: "Webflow's hosting pricing ranges from $14 to $39 per month billed yearly or $18 to $49 per month billed monthly. You won't need workspace plans."
  },
  {
    id: 6,
    question: "Is Webflow right for me?",
    answer: "We consider Webflow the best solution for marketing and conversion-focused websites. It is great for simple web apps too, while you should consider other solutions for complex eCommerce stores and webapps."
  }
]

const bespoke = [
  {
    id: 1,
    question: "What do you need to get started?",
    answer: "We will ask to compile a short form with information about your company and your competitors. Get your copy (your website's written content) ready, it is the only element we can't do without.",
  },
  {
    id: 2,
    question: "How much input will I have for my website design?",
    answer: `You can provide us with examples of websites you may like as well as your brand guidelines.

    Outside of that, your job is to describe in the most accurate way the problems you aim to solve and the goals you aim to reach; ours is to find the best solution compatible with your budget.`,
  },
  {
    id: 3,
    question: "How long will you need to design a bespoke website?",
    answer: "The specific time frame varies depending on the complexity of the project, but a good rule of thumb is 2 days for each page.",
  },
  {
    id: 4,
    question: "Do you design websites on your own or outsource certain tasks?",
    answer: "We like to be very focused so we can keep everything in house."
  },
  {
    id: 5,
    question: "How will we communicate during the web design process?",
    answer: "Anything you may like, just not video calls."
  },
]

const custome = [
  {
    id: 1,
    question: "What kind of assets can you do for me?",
    answer: "We do icons, mockups, screenshots, and lottie animations. We don't do illustrations, gifs, and videos.",
  },
  {
    id: 2,
    question: "Can you create a logo from my website?",
    answer: `We can do that, just know that the logo will look cool but won't undergo the level of study you may expect from a professional logo designer. Making great logos is harder than it looks!`,
  },
  {
    id: 3,
    question: "Can you help me source photos for my website?",
    answer: "Sure, in fact we would like to!",
  }
]

export default function Faq2() {
  const [visibleAnswers, setVisibleAnswers] = useState([]);
  const [visibleBespoke, setVisibleBespoke] = useState([]);
  const [custom, setCustom] = useState([]);

  const toggleAnswerVisibility = (questionId) => {
    if (visibleAnswers.includes(questionId)) {
      setVisibleAnswers((prev) => prev.filter((id) => id !== questionId));
    } else {
      setVisibleAnswers((prev) => [...prev, questionId]);
    }
  };

  const toggleBespokeVisibility = (questionId) => {
    if (visibleBespoke.includes(questionId)) {
      setVisibleBespoke((prev) => prev.filter((id) => id !== questionId));
    } else {
      setVisibleBespoke((prev) => [...prev, questionId]);
    }
  };

  const toggleCustomVisibility = (questionId) => {
    if (custom.includes(questionId)) {
      setCustom((prev) => prev.filter((id) => id !== questionId));
    } else {
      setCustom((prev) => [...prev, questionId]);
    }
  };

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
    <div className="bg-[#171e25] px-5  md:w-auto md:rounded-tl-[70%] md:pl-[40em] md:ml-[-40em] md:rounded-tr-[35%]  md:pr-0 overflow-hidden relative ">
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
        {development?.map((dev) => (
          <>
        <div key={dev?.id} className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold cursor-pointer" onClick={() => toggleAnswerVisibility(dev.id)}>
            {dev?.question}
          </p>
          <div className={`answer-container ${
              visibleAnswers.includes(dev.id) ? 'visible' : ''
            }`}>
            <p className="pl-2">{dev.answer}</p>
          </div>
        </div>
        <br />
        </>
        ))}
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
        {bespoke?.map((bes) => (
        <>
        <div key={bes?.id} className="md:pl-72 text-[#ccdae7] ">
          <p className="text-xl p-2 font-bold cursor-pointer" onClick={() => toggleBespokeVisibility(bes?.id)}>
            {bes?.question}
          </p>
          <div className={`answer-container ${
              visibleBespoke.includes(bes.id) ? 'visible' : ''
            }`}>
          <p className="pl-2">
            {bes?.question}
          </p>
          </div>
        </div>
        <br />
        </>
        ))}
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
        {custome?.map((cust) => (
        <>
        <div key={cust?.id} className="md:pl-72 text-[#ccdae7]">
          <p className="text-xl p-2 font-bold cursor-pointer" onClick={() => toggleCustomVisibility(cust?.id)}>
            {cust?.question}
          </p>
          <div className={`answer-container ${
              custom.includes(cust.id) ? 'visible' : ''
            }`}>
          <p className="pl-2">
            {cust?.question}
          </p>
          </div>
        </div>
        <br />
        </>
        ))}
      </div>
      <br />
      <br />
      <div className="" >
      <div
        className="bg-gradient md:p-8 md:mx-auto md:w-[900px] "
        style={{
          background: "#0052cc",
          height: "auto",
          borderRadius: "17px",
          padding: "40px",
          boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        
        <p
          className="text-white md:text-[3em] text-center text-2xl md:p-4 font-bold "
          style={{ lineHeight: "1.1", letterSpacing: '-.04em' }}
        >
          Move even faster with{" "}
          <span className="bg-black text-[30px] py-1 px-4 md:py-1 md:px-4 rounded-full leading-[60px] ">
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
