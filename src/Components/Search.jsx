import React, { useState } from 'react'
import backgraphics from '../img/backgraphics.png'
import d1 from '../img/d1.png'
import d2 from '../img/d2.png'
import d3 from '../img/d3.png'
import d4 from '../img/d4.png'
import search from '../img/search.png'
import Path318 from '../img/Path 318.png'
import MusicPlayer from './MusicPlayer'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

const Search = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };

  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };

  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  return (
    <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]'>
      <div className="left flex-1">
        <motion.img variants={bg} animate={`${elementIsVisible}`} transition={{duration: 1,type: "ease-out"}} src={backgraphics} alt="" className='absolute top-[22rem] left-[-48rem]'/>
        <img src={d1} alt="" className='absolute top-[26rem] w-[16rem]'/>
        <img src={d2} alt="" className='absolute top-[32.7rem] left-[7rem] w-[9rem]'/>
        <motion.img variants={redimg} animate={`${elementIsVisible}`} transition={{duration:1.2,type:"ease-out"}} src={d3} alt="" className='absolute top-[33rem] left-[17rem] w-[9rem]'/>
        <motion.img variants={musicimg} animate={`${elementIsVisible}`} transition={{ duration:1,type:"ease-out"}} src={d4} alt="" className='absolute top-[50rem] left-[2rem] w-[17rem]'/>
      </div>
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] z-10">
        <div className="searchbar flex justify-start w-[100%]">
          <input type="text" placeholder='Enter tne Keyword and URL' className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'/>
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img src={search} alt="" className='w-[1.5rem]'/>
          </div>
        </div>
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img src={Path318} alt="" className="w-[5rem]" />
        </div>
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
          <MusicPlayer/>
        </VisibilitySensor>
      </div>
    </div>
  )
}

export default Search