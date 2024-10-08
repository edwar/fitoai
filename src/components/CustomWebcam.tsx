'use client'
import React, { useCallback, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect';
import Webcam from 'react-webcam';
import Flip from '../app/Icons/Flip';
import Trash from '../app/Icons/Trash';
import Launch from '../app/Icons/Launch';
import Camera from '../app/Icons/Camera';
import Close from '../app/Icons/Close';
import Mirror from '../app/Icons/Mirror';

interface FacingMode {
    exact: 'user' | 'environment'
}

interface Props {
    callback: (base64: string) => void
    close: () => void
}

const CustomWebcam = ({ callback, close }: Props) => {
    const webcamRef = useRef<Webcam & HTMLVideoElement>(null);
    const [imgSrc, setImgSrc] = useState('');
    const [mirrored, setMirrored] = useState(false);
    const [flipState, setFlipState] = useState(false)
    const [facingMode, setFacingMode] = useState<FacingMode>({
        exact: 'user'
    });

    const retake = () => {
        setImgSrc('');
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if(imageSrc) {
            setImgSrc(imageSrc);
        }
    }, [webcamRef]);

    const flip = () => {
        setFacingMode({
            exact: !flipState ? 'environment' : 'user'
        })
        setFlipState(!flipState)
    }

    const launchImage = () => {
        callback(imgSrc)
    }

    return (
        <div className='fixed bg-slate-800 inset-0 overflow-hidden z-50'>
            {imgSrc ? (
                <img src={imgSrc} alt='webcam' className='absolute object-cover w-full h-full' />
            ) : (
                <Webcam
                    className='absolute object-cover w-full h-full'
                    audio={false}
                    screenshotFormat='image/jpeg'
                    ref={webcamRef}
                    mirrored={mirrored}
                    screenshotQuality={1}
                    videoConstraints={{
                        facingMode: isMobile ? facingMode : 'user'
                    }}
                />
            )}
            <div className='absolute top-5 right-5 cursor-pointer text-white' onClick={close}><Close /></div>
            <div className='absolute bottom-5 left-5'>
                <label className='flex cursor-pointer gap-2 text-white'>
                    <Mirror />
                    <input type='checkbox' checked={mirrored} onChange={(e) => setMirrored(e.target.checked)} className='sr-only peer' />
                    <div className='relative w-11 h-6 peer-focus:outline-none rounded-full bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-800'></div>
                </label>
            </div>
            <div className='absolute bottom-5 right-5'>
                <button onClick={flip} type='button' className='bg-slate-800 border-2 font-extrabold rounded-full text-sm p-2.5 text-center inline-flex items-center border-white text-white'>
                    <Flip />
                    <span className='sr-only'>Flip</span>
                </button>
            </div>
            <div className='flex gap-5 absolute bottom-7 left-1/2 transform -translate-x-1/2'>
                {imgSrc ? (
                    <>
                        <button onClick={retake} type='button' className='bg-red-600 border-2 focus:outline-none font-extrabold rounded-full text-sm p-2.5 text-center inline-flex items-center border-white text-white'>
                            <Trash />
                            <span className='sr-only'>Trash</span>
                        </button>
                        <button onClick={launchImage} type='button' className='bg-green-600 border-2 focus:outline-none font-extrabold rounded-full text-sm p-2.5 text-center inline-flex items-center border-white text-white'>
                            <Launch />
                            <span className='sr-only'>Launch</span>
                        </button>
                    </>
                ) : (
                    <button onClick={capture} type='button' className='bg-slate-800 border-2 font-extrabold rounded-full text-sm p-2.5 text-center inline-flex items-center border-white text-white'>
                        <Camera />
                        <span className='sr-only'>Camera</span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default CustomWebcam
