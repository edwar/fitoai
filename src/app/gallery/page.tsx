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
      const sources = resources.map((resource: any) => {
        const { width, height } = resource;
        return {
          largeURL: resource.secure_url.replace("/upload/", "/upload/c_fill,w_2500/"),
          thumbnailURL: resource.secure_url.replace("/upload/", "/upload/c_fill,w_300/"),
          width,
          height,
          alt: resource.filename,
          resource_type: resource.resource_type
        }
      });
  return (
    <section className='min-h-screen pt-28 wrapper p-4 md:p-8 lg:p-10'>
            <div className="text-container" style={{ marginTop: '50px', marginBottom: '30px', textAlign: 'center' }}>
                <h1 className="marquee-text">Bienvenido a la galería  📷</h1>
                <p style={{ fontSize: '1.5em', color: '#666666', textShadow: '1px 1px 0px white' }}>Aquí encontrarás fotos y videos relacionados con la agricultura.</p>
            </div>
            <GallerySwipe sources={sources} galleryID='gallery' />
        </section>
    )
}