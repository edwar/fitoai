import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
          <Link href="/" className="flex gap-3 justify-center items-center text-2xl font-semibold text-white"> 
              <Logo size='small'/>
              FitoAI
          </Link>
          <p className="my-6 text-gray-400">Aplicacion web potenciada con Inteligencia Artificial que ayuda con la identificación de plagas en los cultivos.</p>
          <span className="text-sm sm:text-center text-gray-400">2024 - <Link href="/" className="hover:underline">Fito AI</Link>.</span>
      </div>
    </footer>
  )
}

export default Footer
