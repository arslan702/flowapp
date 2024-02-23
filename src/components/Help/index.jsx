import React from "react";
import { MdSelfImprovement } from "react-icons/md";

export default function Help() {
  return (
    <div className="text-white mt-10 gap-x-10 py-5">
      <div className="md:px-24 px-3 text-[#ccdae7] ">
        <div className="flex gap-5 text-[13px] ">
          <p>1</p>
          <p>.HOW WE HELP</p>
        </div>
        <div className="mt-5 flex gap-x-5  ">
          <div className="h-[2.90rem] w-[3rem] border-[3px] border-[#7f89ec] rounded-[50%]   flex justify-center items-center bg-[#4036be] ">
            <MdSelfImprovement className="text-[25px]  " />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="md:text-5xl text-2xl font-bold text-ellipsis ">
              We <span className="text-[#524add]  ">take on the stress</span> of
              designing, building, and managing your website
            </p>
            <br />
            <p className=" text-[22px] ">
              So you can spend more time building your product and working on
              your main business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
