import React from 'react'
import Image from 'next/image'

export default function Divider() {
  return (
    <>
        <div className='bg-gray-200 h-[4px] flex w-full my-4'>
            <div className='w-[48%]  w-auto bg-gradient-to-l from-teal-500 via-gray-300 to-white '></div>
            <div className='w-[50px] mx-auto  h-[50px] justify-center -mt-[25px] rounded-full border-2 border-teal-500 p-2'>
              <Image className='text-center justify-center ' src={'/image/up-and-down-arrows-with-a-line-in-the-middle.png'} width={'50'} height={'50'} alt={'icon'} />
            </div>
            <div className='w-[48%]  w-auto bg-gradient-to-r from-teal-500 via-gray-300 to-white '></div>
        </div>
    </>
  )
}
