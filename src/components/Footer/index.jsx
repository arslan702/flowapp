import React from 'react';
import Image from "next/image";
import img from '../../image/Favicon.svg'

export default function Footer() {
  return (
    <div className='h-auto px-5 md:w-[80%] md:mx-auto  mt-5 pt-10 pl-5 text-[#626364]' >
<div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 ' >
<div>
<Image src={img} className='rounded-lg' />
</div>
<div>
  <p className='font-[600] text-[#ccdae7] ' >Simple Websites</p>
  <p className=' text-[#979a9e] mt-2 hover:text-white ' >Accomplished</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Active</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Advantage</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Authentic</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >NFT Landing</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Pico</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Stark</p>
</div>
<div>
  <p className='font-[600] text-[#ccdae7] ' >FOR CREATIVES</p>
  <p className=' text-[#979a9e] mt-2 hover:text-white ' >Agencyper</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Better Half</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Blog Ace</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >MinimalFolio</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Musician</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Portfolio Ace</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Videomaker</p>
</div>
<div>
  <p className='font-[600] text-[#ccdae7] ' >FOR STARTUPS</p>
  <p className=' text-[#979a9e] mt-2 hover:text-white ' >Aalbatros</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Aascot</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Aastronaut</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Asterisk</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Cyankent</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Landing Page Ace</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Midnight</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Papalla</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Saamurai</p>
</div>
<div>
  <p className='font-[600] text-[#ccdae7] ' >OTHER</p>
  <p className=' text-[#979a9e] mt-2 hover:text-white ' >Aardvark</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Bayan</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Canela</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Cryptonapp</p>
  <p className=' text-[#979a9e] mt-1 hover:text-white ' >Sectra</p>
</div>
<br />
<br />


</div>

<hr />
<br />
<div className='flex justify-between pb-5' >
  <p>© 2023 Flowyak LTD</p>
  <p>All rights reserved</p>
</div>
    </div>
  )
}
