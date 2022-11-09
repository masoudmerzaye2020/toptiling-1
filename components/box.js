import React from 'react'
import Image from 'next/image'

export default function Box(props) {
  return (
    <>
    <div className='md:w-1/2 lg:w-1/3 w-full px-6 my-6 mx-auto'>
        <div className=' flex py-3 bg-black bg-opacity-60 text-white px-6 py-6 rounded-[1px] hover:text-teal-500'>
            <div className='flex bg-teal-500 rounded-full w-[80px] h-[80px] p-[10px] justify-center'>
                <Image className='justify-center items-center my-auto flex text-center ' src={props.src} width={60} height={60} alt={'ajlds'}/></div>
            <div className='px-4 my-auto'><p>{props.title}</p>
            <div className='w-full border-b-[2px] border-teal-500 pt-2'>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
