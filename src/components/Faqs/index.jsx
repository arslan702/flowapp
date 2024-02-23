import React from "react";

export default function Faqs() {
  return (
    <div className="md:h-[70vh] h-[60vh] text-[#ccdae7]">
      <div
        className="w-full h-full   justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #0a2a88, #0d1117 )",
        }}
      >
        <div className="flex  justify-center mt-5 pt-10 ">
          <p>07</p>
          <p>· OUR FAQS</p>
        </div>
        <br />
        <p className="text-center md:text-6xl text-3xl font-bold " >Your questions answered</p>
        <br />
        <p className="pt-4 text-center md:text-3xl " >
          We're here to help with any questions you have. If you <br /> want to know
          more, just get in touch.
        </p>
      </div>
     
    </div>
  );
}
