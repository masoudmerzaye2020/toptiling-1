import React from 'react'
import Section from './section'
import Container from './container'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
  return (
    <>
      <div className='bg-black text-neutral-500 py-8'>
        <Container>
        <div className=' w-full flex flex-wrap'>
        <div className='w-full lg:w-1/3 lg:pr-2'>
          <div className='w-fit pb-4'>
          <h1 className='text-2xl text-white uppercase'>about us</h1>
          <div className='w-[70%] border-t-2 border-teal-700 mt-[2px] '></div>
          </div>
          <p>North Suburban Tilers was founded by George Irimia back in 1998 Melbourne, and since then has developed into one of Melbourne's leading movements in wall & floor tiling and renovations and all in between.

George and his team are the best when it comes to the latest innovations and stylish trends in the wall & floor tiling interior and exterior design region.</p>
        </div>
        <div className='w-full lg:w-1/3 lg:pl-2'>
        <div className='w-fit pb-4'>
          <h1 className='text-2xl text-white uppercase'>Company Links</h1>
          <div className='w-[70%] border-t-2 border-teal-700 mt-[2px] '></div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-1/2'>
              <ul>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Home</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/about'} className='hover:text-teal-300 hover:underline underline-offset-4'>About</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/about'} className='hover:text-teal-300 hover:underline underline-offset-4'>Service</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/about'} className='hover:text-teal-300 hover:underline underline-offset-4'>Our Work</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/about'} className='hover:text-teal-300 hover:underline underline-offset-4'>Free Quate</Link>
                </li>               
              </ul>
              
            </div>
            <div className='w-1/2'>
            <ul>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Home</Link>
                </li>
                              
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/3 lg:pl-2'>
        <div className='w-fit pb-4'>
          <h1 className='text-2xl text-white uppercase'>Contact Us</h1>
          <div className='w-[70%] border-t-2 border-teal-700 mt-[2px] '></div>
          </div>
        </div>        
      </div>
        </Container>
      </div>
    </>
  )
}

export default Footer