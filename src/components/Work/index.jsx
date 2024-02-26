import React from "react";

export default function Work() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(#0d1117 7%, rgba(13, 17, 23, 0) 20%), radial-gradient(circle farthest-side at -25% 150%, #0d1117 48%, rgba(13, 17, 23, 0) 65%), radial-gradient(circle at -25% -125%, rgba(13, 17, 23, 0) 50%, #0d1117 70%, rgba(13, 17, 23, 0) 72%), radial-gradient(circle at 0 -50%, #0d1117 32%, rgba(255, 255, 255, 0) 62%), radial-gradient(circle farthest-side at 0 -25%, #007252 50%, rgba(13, 17, 23, 0) 72%), radial-gradient(circle at 50% -100%, #05f 26%, rgba(13, 17, 23, 0) 72%)`,
  };

  return (
    <div style={backgroundStyle} className="md:my-15" >
      <div className=" pt-9 ">
        <center>
          <div className="text-[#c3c8ce] flex justify-center gap-3 md:my-5 text-[10px] ">
            <p className="text-[#88898b]" >02</p>
            <p>. WORK WITH OUR TEAM</p>
          </div>
          <div>
            <p className="md:text-[6em] text-[50px]  text-[#c3c8ce] font-bold" style={{lineHeight: '1.1', letterSpacing: '-.05em'}}>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(207deg, #f0ad68 33%, #26d5bf 74%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Founder
              </span>
              , meet
            </p>
            <p className="md:text-[100px] text-[50px] text-[#c3c8ce] font-bold"  style={{lineHeight: '1.1', letterSpacing: '-.05em'}}>
              your{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(28deg, #31b3ec 29%, #f89aa6 82%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                partner
              </span>{" "}
            </p>
          </div>
          <br />
          <p className="text-[#a7b5c4] text-[1.125em] px-5"  style={{letterSpacing: '-.01em', lineHeight: '1.33'}}>With 50 successful launches and 5,000+ templates  sold, our team has a track record you can count on.</p>
      <button className="bg-[#0052cc] mt-6 h-14  px-10 text-[20px] font-bold text-white rounded-[40px] shadow-2xl hover:bg-[#5b46a8] hover:text-white transition-all duration-300 ">
          Work With Us
        </button>
        </center>
      </div>
    </div>
  );
}
