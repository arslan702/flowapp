import React from "react";
import Image from "next/image";
import img from "../../image/n.jpeg";

export default function Review() {
  return (
    <div className="md:my-15" >
      <div className="h-screen flex justify-center items-center">
        <div
          className="bg-gradient p-8 m-3 "
          style={{
            backgroundImage:
              "radial-gradient(circle at 0 -50%, rgba(255, 255, 255, 0) 3%, #079de0 44%, rgba(255, 255, 255, 0) 72%), radial-gradient(circle at 50% 100%, #a355ee, #3077eb)",
            height: "auto",
            width: "900px",
            borderRadius: "17px",
            padding: "40px",
            boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="md:flex gap-x-5 ">
            <Image
              src={img}
              className="rounded-[50%] h-[100px] w-[100px] border-[5px] border-[white] "
            />
            <div>
              <p className="md:text-3xl sm:text-md pt-3 xs:text-sm text-white font-[700] ">
                “We really wanted a CMS that was the least developer dependent,
                and with Webflow, we’ve completely removed a step from our
                workflows and cut time-to-launch in half.”
              </p>
              <br />
              
              <p className=" text-2xl text-white ">
                {" "}
                <strong>Giulio Sotgiu</strong>{" "}
              </p>
              <p className="text-[#ccdae7] text-xl font-[500] ">
                Senior designer & website owner, bunq
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
