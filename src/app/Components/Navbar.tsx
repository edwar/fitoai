"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Brand from '@/app/Components/Brand'
import { usePathname } from 'next/navigation'


export default function Navbar() {
  const pathname = usePathname()
  
  useEffect(() => {
    const check = document.getElementById("menu") as HTMLInputElement
    if(!check) return
    check.checked = false
  }, [pathname])
  return (
    <nav className='fixed w-full flex justify-between items-center px-10 py-3 h-20 bg-slate-800 z-50'>
      <a href='/' className='w-1/3 max-w-[140px]'>
        <Brand />
      </a>
      <input type='checkbox' name='menu' id='menu' className='peer hidden' />
      <label htmlFor='menu' className='bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden'></label>
      <div className='fixed inset-0 bg-gradient-to-b from-white/70 to-slate-950/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none'>
        <ul className='absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static'>
          <li>
            <Link href='/gallery' className='text-slate-800 md:text-white px-3 py-2 rounded-md md:hover:bg-slate-500'>Galeria</Link>
          </li>
          <li>
            <Link href='/shop' className='text-slate-800 md:text-white px-3 py-2 rounded-md md:hover:bg-slate-500'>Tiendas agrícolas</Link>
          </li>
          <li>
            <Link href='/help' className='text-slate-800 md:text-white px-3 py-2 rounded-md md:hover:bg-slate-500'>Ayudas</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
