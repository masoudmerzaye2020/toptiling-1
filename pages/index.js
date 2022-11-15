import Head from 'next/head'
import Image from 'next/image'
import Box from '../components/box'
import Container from '../components/container'
import Imagebox from '../components/imagebox'
import Section from '../components/section'
import Title from '../components/title'
import Gallery from '../components/gallery'
import Divider from '../components/divider'




export default function Home() {
  return (
    <>
      <div className='w-full bg-black h-screen bg-my_bg_image bg-cover bg-center bg-no-repeat relative'>       
        <div className='relative h-full bg-zinc-800 bg-opacity-70 '>
        <div className='absolute m-auto left-0 right-0 absolute inset-x-0 text-white mt-32 lg:mt-80 w-full md:w-8/12  text-center'>
          <h1 className=' text-2xl md:text-5xl lg:text-6xl  font-semibold  text-white'> Top Tiling Service in Perth Australia</h1>
          <div className='border-b-[3px] w-[50%] mx-auto pt-4 border-teal-500'></div>
          <div className='border-b-[5px] w-[40%] mx-auto pt-[4px] border-teal-700'></div>
        </div>
        <div className='h-full w-full flex'>
          <div className='mx-auto w-full xl:w-8/12  md:flex flex-wrap mt-auto mb-[80px] py-auto '>
            <Box title={'Wall and Floor Tiling Service'} src={'/image/bathroom.png'}/>
            <Box title={'Wall and Floor Tiling Service'} src={'/image/bathroom.png'}/>
            <Box title={'Wall and Floor Tiling Service'} src={'/image/bathroom.png'}/>
          </div>
        </div> 
        </div>
      </div> 


    
    <Section>
      <Container>
      <Title className={''} title={'What we Offer'}/>
        <div className='grid lg:grid-cols-2 gap-1 md:gap-3 mt-3'>
          <Imagebox src={'/image/wallandfloor.png'} title={'Wall and Floor Tiling'} desc={'At North Suburban Tilers, we specialize in wall and floor tiling around inner and outer northern regions of Melbourne.'}/>
          <Imagebox src={'/image/bathroom1.png'} title={'Bathroom Renovations'} desc={'Our team has over 20 years experience in the industry. Leave your bathroom renovation to the professionals.'}/>
          <Imagebox src={'/image/water-tap.png'} title={'Waterproofing'} desc={'We have a qualified waterproofing team which can not wait to help work on your next project.'}/>
          <Imagebox src={'/image/floor.png'} title={'Floor Screeding'} desc={'Looking for the perfect tiling job? We can screed your floor to get a perfectly levelled surface.'}/>
          <Imagebox src={'/image/house-cleaning.png'} title={'Grouting & Cleaning'} desc={'We can restore the grout between your tiles. Our team will clean or replace the grout so you can enjoy new floors.'}/>
          <Imagebox src={'/image/paint-roller.png'} title={'Tile Sealing'} desc={'We can protect your tiles by applying sealer, this will ensure your tiles don not get stained and also help with cleaning.'}/>
        </div>
      </Container>
    </Section>
    <Divider/>
    
        <Title className={''} title={'Gallery'}/>
        <Gallery/>


    </>
  )
}
