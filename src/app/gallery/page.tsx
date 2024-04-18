import { v2 as cloudinary } from 'cloudinary'
import React from 'react'
import GallerySwipe from '../Components/GallerySwipe'

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export default async function Page() {
    const { resources } = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();
      const images = resources.map((resource: any) => {
        const { width, height } = resource;
        return {
          largeURL: resource.secure_url.replace("/upload/", "/upload/c_fill,w_2500/"),
          thumbnailURL: resource.secure_url.replace("/upload/", "/upload/c_fill,w_300/"),
          width,
          height,
          alt: resource.filename
        }
      });
  return (
    <section className='min-h-screen pt-28 wrapper p-4 md:p-8 lg:p-10'>
        <GallerySwipe images={images} galleryID='gallery' />
    </section>
  )
}
