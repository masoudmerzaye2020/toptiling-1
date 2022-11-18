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
          <div className='w-fit py-4'>
            <h1 className='text-2xl text-white uppercase'>about us</h1>
            <div className='w-[70%] border-t-2 border-teal-700 mt-[2px] '></div>
          </div>
          <p>North Suburban Tilers was founded by George Irimia back in 1998 Melbourne, and since then has developed into one of Melbourne's leading movements in wall & floor tiling and renovations and all in between.

George and his team are the best when it comes to the latest innovations and stylish trends in the wall & floor tiling interior and exterior design region.</p>
        </div>
        <div className='w-full lg:w-1/3 lg:pl-2'>
        <div className='w-fit py-4'>
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
                  <Link href={'/service'} className='hover:text-teal-300 hover:underline underline-offset-4'>Service</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/work'} className='hover:text-teal-300 hover:underline underline-offset-4'>Our Work</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/quate'} className='hover:text-teal-300 hover:underline underline-offset-4'>Free Quate</Link>
                </li>  
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/quate'} className='hover:text-teal-300 hover:underline underline-offset-4'>Gallery</Link>
                </li>      
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/quate'} className='hover:text-teal-300 hover:underline underline-offset-4'>Contact Us</Link>
                </li>         
              </ul>
              
            </div>
            <div className='w-1/2'>
            <ul>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Wall and Floor Tiling</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Tile Renovation</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Grout Cleaning</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Tile Sealing</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Waterproofing</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Tile Restoration</Link>
                </li>
                <li className='flex py-[3px]'>
                  <Image className='text-white py-[4px] mr-4' src={'/image/Line22.png'} width={'12'} height={'3'} alt={'icon'}/>
                  <Link href={'/'} className='hover:text-teal-300 hover:underline underline-offset-4'>Tile Repair</Link>
                </li>

                
                
                              
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/3 lg:pl-2'>
          <div className='w-fit py-4'>
            <h1 className='text-2xl text-white uppercase'>Contact Us</h1>
            <div className='w-[70%] border-t-2 border-teal-700 mt-[2px] '>

            </div>
          </div>
          <div>
            <div className='flex py-[3px]'>
              <div className='pr-4 font-bold'>Address :</div>
              <div className='hover:text-teal-500'>PO Box 1092, Epping, VIC, 3076 </div>
            </div>
            <div className='flex py-[3px]'>
              <div className='pr-4 font-bold'>Phone :</div>
              <div className='hover:text-teal-500'><Link href={'https://wa.me/whatsappphonenumber/?text=urlencodedtext'} target="_blank">+62 422 142 134</Link></div>
            </div>
            <div className='flex py-[3px]'>
              <div className='pr-4 font-bold'>Gmail :</div>
              <div className='hover:text-teal-500'><Link href={'https://mail.google.com/'} target="_blank">sheragha@mgail.com </Link></div>
            </div>
            
          </div> 
        </div> 
                
        </div>
        </Container>
        <div className='justify-center mx-auto items-center text-center flex flex-row mt-6 '>
           <div className='bg-white w-[40px] h-[40px] mx-2 p-[1px] justify-center text-center m-auto flex rounded-full bg-teal-200'><Image src={'/image/youtube.png'} width={'80'} height={'80'} alt={'youtube'}/></div>
           <div className='bg-white w-[40px] h-[40px] mx-2 p-[1px] justify-center text-center m-auto flex rounded-full bg-teal-200'><Image src={'/image/tiktok.png'} width={'80'} height={'80'} alt={'youtube'}/></div>
           <div className='bg-white w-[40px] h-[40px] mx-2 p-[1px] justify-center text-center m-auto flex rounded-full bg-teal-200'><Image src={'/image/pinterest.png'} width={'80'} height={'80'} alt={'youtube'}/></div>
           <div className='bg-white w-[40px] h-[40px] mx-2 p-[0px] justify-center text-center m-auto flex rounded-full bg-teal-200'><Image src={'/image/instagram.png'} width={'85'} height={'85'} alt={'youtube'}/></div>
           <div className='bg-white w-[40px] h-[40px] mx-2 p-[1px] justify-center text-center m-auto flex rounded-full bg-teal-200'><Image src={'/image/facebook.png'} width={'80'} height={'80'} alt={'youtube'}/></div>
           <div className='bg-white w-[40px] h-[40px] mx-2 p-[1px] justify-center text-center m-auto flex rounded-full bg-teal-200'><Image src={'/image/youtube.png'} width={'80'} height={'80'} alt={'youtube'}/></div>
       
        </div>
      </div>
    </>
  )
}

export default Footer