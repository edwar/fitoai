import React from 'react'
import Camera from '../Icons/Camera'
import Logo from './Logo'

interface Props {
    goToCamera: () => void
}

const Hero = ({ goToCamera }: Props) => {
  return (
    <section className="bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="flex items-center gap-3 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"><Logo size="large" />FitoAI</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Soy una inteligencia artificial especializada en detectar las enfermedades de tus plantas.</p>
            <button onClick={goToCamera} className="inline-flex gap-3 border items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900">
                Vamos de ver
                <Camera />
            </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                
    </div>
</section>
  )
}

export default Hero
