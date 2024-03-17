import React from 'react'
import Link from 'next/link'
import Brand from '@/app/Components/Brand'

export default function Navbar() {
  return (
    <div className="fixed w-full inline-flex justify-between items-center px-5 py-3 h-50 bg-gray-900">
      <Brand />
      <ul className='flex gap-4'>
        <li>
          <Link href="/about" className='px-3 py-2 rounded-sm hover:bg-slate-500'>Nosotros</Link>
        </li>
        <li>
          <Link href="/" className='px-3 py-2 rounded-sm hover:bg-slate-500'>Entrevistas</Link>
        </li>
        <li>
          <Link href="/" className='px-3 py-2 rounded-sm hover:bg-slate-500'>Ayudas</Link>
        </li>
        <li>
          <Link href="/" className='px-3 py-2 rounded-sm hover:bg-slate-500'>Contactanos</Link>
        </li>
        <li>
          <Link href="/" className='px-3 py-2 rounded-sm hover:bg-slate-500'>Iniciar sesión</Link>
        </li>
      </ul>
    </div>
  )
}
