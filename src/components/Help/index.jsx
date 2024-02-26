import React from "react";
import { MdSelfImprovement } from "react-icons/md";

export default function Help() {
  return (
    <div className="text-white mt-10 gap-x-10 px-0 md:px-32 py-5" id="webFlowSection">
      <div className="md:px-16 px-3 text-[#ccdae7] ">
        <div className="flex gap-5 text-[13px] ">
          <p className="md:text-[10px] text-[#797a7a] " >01</p>
          <p className="md:text-[0.725em]">. HOW WE HELP</p>
        </div>
        <div className="mt-3 flex gap-x-3  ">
          <div className="h-[3.15rem] w-[3.2rem] border-[3px] border-[#7f89ec] rounded-[50%] md:mt-6   flex justify-center items-center bg-[#4036be] ">
            <MdSelfImprovement className="text-[25px]  " />
          </div>
          <div className="md:w-[65%] w-full">
            <p className="md:text-[3em] sm:p-5 text-3xl text-[#ccdae7] font-bold text-ellipsis" style={{lineHeight: '1.1', letterSpacing: '-.04em'}}>
              We <span className="gradient-text text-[#524add]">take on the stress</span> of
              designing, building, and managing your website
            </p>
            
            <p className="text-[20px] text-[#a7b5c4] md:px-5 " style={{letterSpacing: '-.02em', lineHeight: '1.5'}}>
              So you can spend more time building your product and working on
              your main business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
