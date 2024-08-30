import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='wrapper p-4 md:p-8 lg:p-10'>
      <div className='text-center'>
        <Link href='/' className='flex gap-3 justify-center items-center text-2xl font-semibold text-white'> 
          <Logo/>
        </Link>
        <p className='my-6 text-gray-400 bg-slate-900'>
          Aplicación web potenciada con Inteligencia Artificial que ayuda con la identificación de plagas en los cultivos.
        </p>
        <span className='text-sm sm:text-center text-gray-400'>
          2024 - <Link href='/' className='hover:underline'>Fito AI</Link>.
        </span>
        <br />
        {/* Modificado: Enlace con referencia al ID */}
        <a href="#contactanos" className='text-gray-300 hover:text-blue-600 font-light'>
          ¿Tienes alguna duda? Contáctanos
        </a>
      </div>
    </footer>
  );
}

export default Footer;
