"use client"
import React from 'react'
import { helps } from '@/app/data/help'

type Props = {
    params: {
        slug: string
    }
}

export default function Page({ params: { slug } } : Readonly<Props>) {
    const help = helps.find(({ id }) => id === slug)
  return (
    <div className='flex gap-8 w-full flex-col items-center min-h-screen max-w-screen-2xl mx-auto pt-28'>
        {!help ? 
            <>
                <p className='text-6xl font-bold'>No se encontro ningún artículo relacionado...</p>
                <img className='aspect-auto w-1/2' src="/helps/todo-bien.webp" alt="Todo esta bien" />
            </>:
            <>
                <h1 className='text-4xl font-semibold'>{help.title}</h1>
                <img className='w-1/3 float-left' src={help.image} alt={`Imagen de ${help.title}`} />
                <p className='text-balance font-light' dangerouslySetInnerHTML={{ __html: help.description }} />
            </>
        } 
    </div>
  )
}
