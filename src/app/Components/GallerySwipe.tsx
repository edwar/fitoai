'use client'
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

type Source = {
  largeURL: string
  thumbnailURL: string
  alt: string
  width: number
  height: number
  resource_type: 'image' | 'video'
}

export default function GallerySwipe({ sources, galleryID }: Readonly<{sources: Source[], galleryID: string}>) {
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
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20" id={galleryID}>
      {sources.map((source, index: number) => (
        <div key={galleryID + '-' + index} className='grid gap-4'>
          <a
            href={source.largeURL}
            data-pswp-width={source.width}
            data-pswp-height={source.height}
            target="_blank"
            rel="noreferrer"
          >
            {source.resource_type === "image"
              ? <img src={source.thumbnailURL} alt={source.alt} />
              : <video src={source.thumbnailURL} />
            }
          </a>
        </div>
      ))}
    </div>
  );
}