import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-11/12  lg:w-11/12 xl:w-8/12 mx-auto'>{children}</div>
  )
}
