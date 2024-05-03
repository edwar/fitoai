"use client"
import React from 'react'
import DOMPurify from 'dompurify'

interface Props {
    image: string
    title: string
    description: string
    url: string
}

export default function Card({ image, description, title, url }: Readonly<Props>) {
  return (
    <div className='w-full'>
        <div className='bg-slate-700 shadow-md border border-slate-500 rounded-lg'>
            <img className='rounded-t-lg aspect-square' src={image} alt={`Imagen de ${title}`} />
            <div className='p-5'>
                <h5 className='text-white font-bold text-2xl tracking-tight mb-2 truncate'>{title}</h5>
                <p className='font-normal text-slate-200 mb-3 line-clamp-3' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}/>
                <div className='flex justify-end'>
                    <a className='text-white bg-slate-800 hover:bg-slate-900 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center' href={url}>
                        Ver mas
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
