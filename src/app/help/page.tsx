
import React from 'react'
import Card from '../../components/Card'
import { helps } from '../data/help'

export default function Page() {
  return (
    <section className='flex w-full min-h-screen max-w-screen-2xl mx-auto pt-28'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 '>
        {helps.map(({ id, image, title }) => (
          <Card
            key={id}
            image={image}
            title={title}
            url={`/help/${id}`}
          />
        ))}
      </div>
    </section>
  )
}
