import React from 'react'
import AppStore from '../img/App Store.png';
import GooglePlay from '../img/Google Play.png';

const DownloadAds = () => {
    const dowmlodeImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'

  return (
    <div className='Download'>
        <div className="Download_images flex">
            <img src={AppStore} alt="" className={dowmlodeImgStyle+` mr-[2rem]`}/>
            <img src={GooglePlay} alt="" className={dowmlodeImgStyle}/>
        </div>
    </div>
  )
}

export default DownloadAds