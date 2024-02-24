"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { MdOutlineComputer } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import tab11 from "../../image/tab11.webp";
import tab22 from "../../image/tab22.webp";
import tab33 from "../../image/tab33.webp";

function HelpTabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col'>
            <div className='flex justify-center w-[385px] h-auto rounded-[0.5em] p-[1.5em] cursor-pointer' style={{backgroundColor: activeTab == 0 ? '#222d3b' : '#171e25',boxShadow: '0 0 24px -12px #1b2435, inset 0 0 0 1px #313c4d'}}  onClick={() => setActiveTab(0)}>
                <div className='w-[20%]'>
                <div className='w-[3em] h-[3em] flex justify-center items-center bg-[#171e25] rounded-[10px]'>
                    <MdOutlineComputer color='#ccdae7' size={25}/>
                </div>
                </div>
                <div className='flex flex-col w-[80%] mt-4'>
                    <div className='text-[#ffffff] text-[1em] font-[600]' style={{letterSpacing: '-.025em',lineHeight: '1.1'}}>
                        Top Webflow development
                    </div>
                    {activeTab == 0 && (
                    <div className='text-[#8597ad] text-[16px] font-[400] mt-2' style={{lineHeight: '1.33'}}>
                        We are certified Webflow template developers with over 5,000 happy customers.
                    </div>
                    )}
                </div>
            </div>
            <div className='flex justify-center w-[385px] h-auto rounded-[0.5em] p-[1.5em] mt-4 cursor-pointer' style={{backgroundColor: activeTab == 1 ? '#222d3b' : '#171e25',boxShadow: '0 0 24px -12px #1b2435, inset 0 0 0 1px #313c4d'}}  onClick={() => setActiveTab(1)}>
            <div className='w-[20%]'>
                <div className='w-[3em] h-[3em] flex justify-center items-center bg-[#171e25] rounded-[10px]'>
                    <FaHandHoldingHeart color='#ccdae7' size={25}/>
                </div>
                </div>
                <div className='flex flex-col w-[80%] mt-4'>
                    <div className='text-[#ffffff] text-[1em] font-[600]' style={{letterSpacing: '-.025em',lineHeight: '1.1'}} >
                        Bespoke website design
                    </div>
                    {activeTab == 1 && (
                    <div className='text-[#8597ad] text-[16px] font-[400] mt-2' style={{lineHeight: '1.33'}}>
                        Our websites combine top-notch performance with a modern look and feel.
                    </div>
                    )}
                </div>
            </div>
            <div className='flex justify-center w-[385px] h-auto rounded-[0.5em] p-[1.5em] mt-4 cursor-pointer' style={{backgroundColor: activeTab == 2 ? '#222d3b' : '#171e25', boxShadow: '0 0 24px -12px #1b2435, inset 0 0 0 1px #313c4d'}}  onClick={() => setActiveTab(2)}>
            <div className='w-[20%]'>
                <div className='w-[3em] h-[3em] flex justify-center items-center bg-[#171e25] rounded-[10px]'>
                    <MdOutlineComputer color='#ccdae7' size={25}/>
                </div>
                </div>
                <div className='flex flex-col w-[80%] mt-4'>
                    <div className='text-[#ffffff] text-[1em] font-[600]' style={{letterSpacing: '-.025em',lineHeight: '1.1'}}>
                        Custom made assets
                    </div>
                    {activeTab == 2 && (
                    <div className='text-[#8597ad] text-[16px] font-[400] mt-2' style={{lineHeight: '1.33'}}>
                        Present your product in its best light with custom icons, screenshots and mockups.
                    </div>
                    )}
                </div>
            </div>
        </div>
        <div>
            {activeTab == 0 && (
            <div className={`tabbg1 w-[650px] h-[511px] ml-5 rounded-[0.5em] flex justify-center items-center flex-col`} style={{transform: 'scale(.9)rotate(4deg)'}}>
                <Image src={tab11} width={600} height={500}/>
            </div>
            )}
            {activeTab == 1 && (
            <div className={`tabbg2 w-[650px] h-[511px] ml-5 rounded-[0.5em] flex justify-center items-center flex-col`} style={{transform: 'scale(.9)rotate(4deg)'}}>
                <Image src={tab22} width={600} height={500}/>
            </div>
            )}
            {activeTab == 2 && (
            <div className={`tabbg3 w-[650px] h-[511px] ml-5 rounded-[0.5em] flex justify-center items-center flex-col`} style={{transform: 'scale(.9)rotate(4deg)'}}>
                <Image src={tab33} width={600} height={500}/>
            </div>
            )}
        </div>
    </div>
  )
}

export default HelpTabs