import React from "react";
import Image from "next/image";
import img from "../../image/a.jpeg";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function People() {
  return (
    <div>
      <div className=" flex justify-center items-center my-10">
        <div className=" container  md:w-[72%] rounded-lg bg-[#171e25] ">
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div>
              <Image
                src={img}
                className="rounded-tl-[10px] rounded-tr-0 rounded-bl-0 rounded-br-[10px] h-screen  "
              />
            </div>
            <div>
              <div className=" text-[#ccdae7] ">
                <div className="flex gap-5 text-[13px] px-10 mt-5 pt-5 text-[#bcbcda]">
                  <p className="text-[#a7b5c4]">05</p>
                  <p>. What People Say</p>
                </div>
                <div className="mt-5 flex gap-x-7 md:px-10">
                  <div className="w-[10%]">
                  <div className="h-[44px] w-[44px] border-[3px] border-[#7f89ec] rounded-[22px] shadow-2xl  flex justify-center items-center bg-[#4036be] ">
                    <MdOutlineConnectWithoutContact className="text-[25px] text-[#bcc6ee] shadow-2xl " />
                  </div>
                  </div>
                  <div className="w-[80%]">
                    <p className="md:text-5xl text-3xl font-bold text-ellipsis" style={{letterSpacing: '-.04em', lineHeight: '1.1'}}>
                      The word on <br />
                      <span class="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-transparent bg-clip-text gap-5">
                        Flowyak
                      </span>.
                    </p>
                    <br />
                    <p className=" text-[20px] text-[#a7b5c4] font-[500] ">
                      "Flowyak show a deep understanding of what pleases the eye
                      in the design process as well as an unusual attention to
                      details in Webflow development".
                    </p>
                  </div>
                  <div>
                  </div>
                </div>
                  <br />

                   <div className="md:flex" >
                    <div className="pl-14 md:mt-16 md:pt-10 " >
                      <p className="md:text-[40px] font-bold" >50+</p>
                      <p className="text-[16px] text-[#a7b5c4] font-[400] " >successful websites <br /> launched using Webflow</p>
                    </div>
                    <div className=" md:pl-6 pl-14 md:mt-16 md:pt-10 pb-4  " >
                      <p className="md:text-[40px] font-bold " >5000+</p>
                      <p className="text-[16px] text-[#a7b5c4] font-[400] " >Webflow templates sold in a <br /> little over two years</p>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
