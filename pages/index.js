import Head from 'next/head'
import Image from 'next/image'
import Box from '../components/box'
import Title from '../components/title'




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


    <section className='bg-zinc-600'>
      <div className=''>
        <Title title={'Leave Your Renovation in the Hands of Experts'}/>
      </div>
      <div>
        <div>
          <Box title={'Waterproofing'}/>
        </div>
      </div>
    </section>

    </>
  )
}
