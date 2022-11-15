import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto'>{children}</div>
  )
}
