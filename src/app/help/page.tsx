'use client'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Card from '@/app/Components/Card';
import { Helps } from '@/info/data';


export default function Page() {
    const items = Helps.map((help) => {
      const { id, ...rest } = help;
      return (
        <Card key={id} {...rest} />
      )
    });
    return (
      <section className='min-h-screen pt-28'>
        <div className='wrapper px-8'>
          <h1 className='text-center text-5xl pb-10'>Ayudas</h1>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
            <Masonry gutter='10px'>
              {items}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    )
}
