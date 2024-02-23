import React from "react";
import Image from "next/image";
import img from "../../image/a.jpeg";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function People() {
  return (
    <div>
      <div className=" flex justify-center items-center my-5 ">
        <div className=" container  md:w-[80%] rounded-lg bg-[#171e25] ">
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div>
              <Image
                src={img}
                className="rounded-tl-[10px] rounded-tr-0 rounded-bl-0 rounded-br-[10px] h-screen  "
              />
            </div>
            <div>
              <div className=" text-[#ccdae7] ">
                <div className="flex gap-5 text-[13px] px-10 mt-5 text-[#bcbcda] font- ">
                  <p>05</p>
                  <p>. What People Say</p>
                </div>
                <div className="mt-5 flex gap-x-7 md:px-10 pl-5 ">
                  <div className="h-[4.5rem] w-[15rem] border-[3px] border-[#7f89ec] rounded-[50%] shadow-2xl  flex justify-center items-center bg-[#4036be] ">
                    <MdOutlineConnectWithoutContact className="text-[25px] text-[#bcc6ee] shadow-2xl " />
                  </div>
                  <div className="  ">
                    <p className="md:text-5xl text-3xl font-bold text-ellipsis ">
                      The word on <br />
                      <span class="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-transparent bg-clip-text gap-5">
                        flowyak
                      </span>
                    </p>
                    <br />
                    <p className=" text-[20px] text-[#7a7a7e] font-[500] ">
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
                      <p className="md:text-5xl font-bold " >50+</p>
                      <p className="text-[18px] text-[#8c8c8f] font-[600] " >successful websites <br /> launched using Webflow</p>
                    </div>
                    <div className=" md:pl-6 pl-14 md:mt-16 md:pt-10 pb-4  " >
                      <p className="md:text-5xl font-bold " >5000+</p>
                      <p className="text-[18px] text-[#8c8c8f] font-[600] " >Webflow templates sold in a <br /> little over two years</p>
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
