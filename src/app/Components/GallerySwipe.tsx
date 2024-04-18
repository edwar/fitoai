'use client'
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

type Image = {
  largeURL: string
  thumbnailURL: string
  alt: string
  width: number
  height: number
}

export default function GallerySwipe({ images, galleryID }: Readonly<{images: Image[], galleryID: string}>) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20" id={galleryID}>
      {images.map((image, index: number) => (
        <div key={galleryID + '-' + index} className='grid gap-4'>
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt={image.alt} />
          </a>
        </div>
      ))}
    </div>
  );
}