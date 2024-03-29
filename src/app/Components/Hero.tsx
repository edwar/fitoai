import React from 'react'
import Camera from '@/app/Icons/Camera'
import Brand from '@/app/Components/Brand'

interface Props {
    goToCamera: () => void
}

const Hero = ({ goToCamera }: Props) => {
  return (
    <section>
        <div className='grid wrapper px-4 pb-8 pt-20 lg:gap-8 xl:gap-0 lg:pb-8 lg:pt-30 lg:grid-cols-12'>
            <div className='flex flex-col justify-center items-center lg:mr-auto lg:place-self-center lg:justify-start lg:items-start lg:col-span-7'>
                <h1 className='hidden lg:flex items-center gap-3 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none lg:text-5xl xl:text-6xl text-white'>
                    <Brand />
                </h1>
                <p className='max-w-2xl text-center lg:text-left mb-6 font-light lg:mb-8 lg:text-lg lg:text-xl text-gray-400'>Soy una inteligencia artificial especializada en detectar las enfermedades de tus plantas.</p>
                <button onClick={goToCamera} className='flex w-52 gap-3 border items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900'>
                    Examinar planta
                    <Camera />
                </button>
            </div>
            <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                <div className='relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]'>
                    <div className='h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg z-0'></div>
                    <div className='h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg z-0'></div>
                    <div className='h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg z-0'></div>
                    <div className='h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg z-0'></div>
                    <div className='rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800'>
                        <img src='/phone.webp' className='block w-[272px] h-[572px]' alt='' />
                    </div>
                </div>
            </div>                
        </div>
    </section>
  )
}

export default Hero
