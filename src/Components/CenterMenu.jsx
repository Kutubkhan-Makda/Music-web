import React from 'react'

const CenterMenu = () => {
    const liststyle = 'mr-[3rem] hover:cursor-pointer'

  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liststyle}>Home</li>
            <li className={liststyle}>About</li>
            <li className={liststyle}>Preformer</li>
            <li className={liststyle}>Event Shedule</li>
        </ul>
    </div>
  )
}

export default CenterMenu