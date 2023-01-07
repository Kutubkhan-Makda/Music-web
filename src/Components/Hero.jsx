import React, { useState } from 'react'
import DownloadAds from './DownloadAds'
import backgraphics from '../img/backgraphics.png'
import p1 from '../img/p 1.png'
import p2 from '../img/p 2.png'
import p3 from '../img/p 3.png'
import p4 from '../img/p 4.png'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

const Hero = () => {
  const [elementIsVisible, setelementIsVisible] = useState(false);

  const bg = {
    true:{
      left:'7rem',
    },
    false:{
      left:'19rem'
    }
  }

  const musicplayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  }

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  }
  
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor onChange={(isVisible)=>setelementIsVisible(isVisible)} minTopValue={300}>
      <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-full h-[35rem] relative z-50'>
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span>Experience The</span>
            <span><b>Best Quality Music</b></span>
            <span className="text-[15px] text-[#525D6E]">
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
          </span>
          <div>
            <span className='text-[13px]'>Download now on IOS and Android</span>
            <DownloadAds/>
          </div>
        </div>
        <div className="images relative w-[50%]">
            <motion.img transition={{duration:1,type:'ease-out'}} variants={bg} animate={`${elementIsVisible}`} src={backgraphics} alt="" className='absolute top-[-8rem] left-[19rem]'/>
            <motion.img src={p1} alt="" className='absolute top-[-15rem] h-[34rem] left-[13rem]'/>
            <motion.img transition={{duration:1,type:'ease-out'}} variants={musicplayer} animate={`${elementIsVisible}`} src={p2} alt="" className='absolute top-[94px] w-[175px] left-[235px]'/>
            <motion.img transition={{duration:1,type:'ease-out'}} variants={rect} animate={`${elementIsVisible}`} src={p3} alt="" className='absolute top-[12rem] w-[5rem] left-[13rem]'/>
            <motion.img transition={{duration:1,type:'ease-out'}} variants={heart} animate={`${elementIsVisible}`} src={p4} alt="" className='absolute top-[12rem] w-[5rem] left-[12.5rem]'/>
        </div>
      </div>
    </VisibilitySensor>
  )
}

export default Hero