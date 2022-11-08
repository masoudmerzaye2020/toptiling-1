import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <>
     <div className='w-full bg-black h-screen bg-my_bg_image bg-cover bg-center bg-no-repeat relative'>       
        <div className='absolute m-auto left-0 right-0 absolute inset-x-0  bg-white mt-32 lg:mt-40 w-full md:w-8/12  text-center'>
          <h1 className=' text-2xl md:text-5xl lg:text-6xl  font-semibold text-lightcyan text-gray'> Top Tiling Service in Perth Australia</h1>
          <div className='border-b-[2px] w-[50%] mx-auto pt-4 border-lightcyan'></div>
          <div className='border-b-[2px] w-[40%] mx-auto pt-[2px] border-darkcyan'></div>
        </div>
      <div className='h-full w-full flex'>
        <div className='mx-auto w-full xl:w-8/12  md:flex flex-wrap mt-auto mb-[80px] py-auto '>
          <div className='md:w-1/2 lg:w-1/3 w-full px-6 my-6 mx-auto'>
            <div className=' flex py-3 bg-black bg-opacity-60 text-gray px-6 py-6 rounded-[1px] hover:text-lightcyan'>
              <div className='flex bg-lightcyan rounded-full w-[80px] h-[80px] p-[10px] justify-center'><Image className='justify-center items-center my-auto flex text-center ' src={'/image/bathroom.png'} width={60} height={60} alt={'ajlds'}/></div>
              <div className='px-4 my-auto'><p>WALL AND FLOOT TILING SERVICE</p>
                <div className='w-full border-b-[2px] border-lightcyan pt-2'>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/3 w-full px-6 my-6 mx-auto'>
            <div className=' flex py-3 bg-black bg-opacity-60 text-gray px-6 py-6 rounded-[1px] hover:text-lightcyan'>
              <div className='flex bg-lightcyan rounded-full w-[80px] h-[80px] p-[10px] justify-center'><Image className='justify-center items-center my-auto flex text-center ' src={'/image/bathroom.png'} width={60} height={60} alt={'ajlds'}/></div>
              <div className='px-4 my-auto'><p>WALL AND FLOOT TILING SERVICE</p>
              <div className='w-full border-b-[2px] border-lightcyan pt-2'>
              </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/3 w-full px-6 my-6 mx-auto'>
            <div className=' flex py-3 bg-black bg-opacity-60 text-gray px-6 py-6 rounded-[1px] hover:text-lightcyan'>
              <div className='flex bg-lightcyan rounded-full w-[80px] h-[80px] p-[10px] justify-center'><Image className='justify-center items-center my-auto flex text-center ' src={'/image/bathroom.png'} width={60} height={60} alt={'ajlds'}/></div>
              <div className='px-4 my-auto'><p>WALL AND FLOOT TILING SERVICE</p>
              <div className='w-full border-b-[2px] border-lightcyan pt-2'>
              </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>

         
      </div> 


    <section className='bg-lightdark'>
      <div className=''>
        <h1>What We Offer</h1>
      </div>
    </section>

    </>
  )
}
