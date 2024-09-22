'use client'
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type Source = {
  largeURL: string
  thumbnailURL: string
  alt: string
  width: number
  height: number
  resource_type: 'image' | 'video'
}

export default function GallerySwipe({ sources, galleryID }: Readonly<{sources: Source[], galleryID: string}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const openLightbox = (index: number) => {
    document.body.style.overflow = 'hidden';
    setCurrentItem(index);
    setIsOpen(true);
  };

  const moveNext = () => {
    setCurrentItem((prevIndex) => (prevIndex + 1) % sources.length);
  };

  const movePrev = () => {
    setCurrentItem((prevIndex) => (prevIndex + sources.length - 1) % sources.length);
  };

  const close = () => {
    document.body.style.overflow = 'visible';
    setIsOpen(false)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {sources.map((source, index) => (
        <div key={`${galleryID} - ${index}`} className="flex justify-center items-center w-full cursor-pointer" onClick={() => { openLightbox(index) }}>
          {source.resource_type === 'image' ? (
            <img src={source.thumbnailURL} alt={source.alt} className="w-full aspect-square pointer-events-none" />
          ) : (
            <video controls className="w-full aspect-square pointer-events-none">
              <source src={source.thumbnailURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
      {isOpen && (
        <div>
          {sources[currentItem].resource_type === 'image' ? (
            <Lightbox
              mainSrc={sources[currentItem].largeURL}
              nextSrc={sources[(currentItem + 1) % sources.length].largeURL}
              prevSrc={sources[(currentItem + sources.length - 1) % sources.length].largeURL}
              onCloseRequest={() => close()}
              onMovePrevRequest={movePrev}
              onMoveNextRequest={moveNext}
            />
          ) : (
            <div className="fixed inset-0 z-50 bottom-0 bg-black/90">
              <video controls autoPlay className="w-screen h-screen aspect-square">
                <source src={sources[currentItem].largeURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className='absolute top-3 right-6' onClick={() => close()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-8 h-8 hover:text-white" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
                <button className='absolute z-50 top-1/2 -left-1 transform -translate-y-1/2' onClick={movePrev}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-16 h-14 hover:text-white" width="68" height="68" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                </button>
                <button className='absolute z-50 top-1/2 right-0 transform -translate-y-1/2' onClick={moveNext}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-14 h-14 hover:text-white" width="68" height="68" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}