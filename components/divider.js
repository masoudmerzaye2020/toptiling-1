import React from 'react'

export default function Divider() {
  return (
    <>
        <div className='bg-gray-200 h-[10px] flex'>
            <div className='w-5/12 h-[10px] w-auto bg-teal-400 '></div>
            <div className='w-1/12 mx-auto bg-teal-400'></div>
            <div className='w-5/12 h-[10px] w-auto bg-teal-400 '></div>
        </div>
    </>
  )
}
