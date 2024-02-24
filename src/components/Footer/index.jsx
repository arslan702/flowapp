import React from "react";
import Image from "next/image";
import img from "../../image/Favicon.svg";

export default function Footer() {
  return (
    <div className="h-auto px-5 md:w-[80%] md:mx-auto  mt-5 pt-10 pl-5 text-[#626364]">
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 ">
        <div>
          <Image src={img} className="rounded-lg" />
        </div>
        <div>
          <p className="font-[600] text-[.625em] text-[#ccdae7] cursor-pointer" style={{letterSpacing: '.01em', }}>SIMPLE WEBSITES</p>
          <p className=" text-[#646f7c] text-[.875em] mt-2 hover:text-white cursor-pointer">Accomplished</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Active</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Advantage</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Authentic</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">NFT Landing</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Pico</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Stark</p>
        </div>
        <div>
          <p className="font-[600] text-[.625em] text-[#ccdae7]" style={{letterSpacing: '.01em', }}>FOR CREATIVES</p>
          <p className=" text-[#646f7c] text-[.875em] mt-2 hover:text-white cursor-pointer">Agencyper</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Better Half</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Blog Ace</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">MinimalFolio</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Musician</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">
            Portfolio Ace
          </p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white ">Videomaker</p>
        </div>
        <div>
          <p className="font-[600] text-[.625em] text-[#ccdae7]" style={{letterSpacing: '.01em', }}>FOR STARTUPS</p>
          <p className=" text-[#646f7c] text-[.875em] mt-2 hover:text-white cursor-pointer">Aalbatros</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Aascot</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Aastronaut</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Asterisk</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Cyankent</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">
            Landing Page Ace
          </p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Midnight</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Papalla</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Saamurai</p>
        </div>
        <div>
          <p className="font-[600] text-[.625em] text-[#ccdae7]" style={{letterSpacing: '.01em', }}>OTHER</p>
          <p className=" text-[#646f7c] text-[.875em] mt-2 hover:text-white cursor-pointer">Aardvark</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Bayan</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Canela</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Cryptonapp</p>
          <p className=" text-[#646f7c] text-[.875em] mt-1 hover:text-white cursor-pointer">Sectra</p>
        </div>
        <br />
        <br />
      </div>
      <hr />
      <br />
      <div className="flex justify-between pb-5">
        <p>© 2023 Flowyak LTD</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
