import React from 'react'
import Image from 'next/image'

export default function Imagebox(props) {
  return (
    <>
      <div className='flex mx-auto py-3'>
        <div className='w-[90px] md:w-[110px] items-center pt-3 pr-4'>
          <Image className='border-2 ml-auto border-teal-500 p-[3px] hover:p-[1px] hover:bg-teal-100' src={props.src} width={'70'} height={'70'} alt={'wal'}/>
        </div>
        <div className='w-full flex flex-col '>
           
          <div className='w-fit'>
            <h1 className='text-[24px] font-semibold pb-[2px]'>
              {props.title}
            </h1>
              <div className='border-t-[2px] border-teal-500 w-a'></div>
              <div className='border-t-[2px] border-teal-300 w-[50%] mt-[2px]'></div>
            
          </div> 
          <div>
            <p>
            {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
