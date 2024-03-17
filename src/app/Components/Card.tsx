import React from 'react'

interface Props {
    image: string
    title: string
    description: string
    url: string
}

export default function Card({ image, description, title, url }: Props) {
  return (
    <div className='max-w-lg mx-auto'>
        <div className='bg-slate-700 shadow-md border border-slate-500 rounded-lg max-w-sm mb-5'>
            <img className='rounded-t-lg' src={image} alt={`Imagen de ${title}`} />
            <div className='p-5'>
                <h5 className='text-white font-bold text-2xl tracking-tight mb-2 truncate'>{title}</h5>
                <p className='font-normal text-slate-200 mb-3 line-clamp-3'>{description}</p>
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
