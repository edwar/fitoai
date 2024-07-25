'use client'
import { useState } from 'react';
import CustomWebcam from '@/app/Components/CustomWebcam';
import Loading from '@/app/Components/Loading';
import Hero from '@/app/Components/Hero';
import Team from '@/app/Components/Team';
import Message from '@/app/Components/Message';
import { sendEmail } from '@/actions';

export default function Home() {
  const [showCamera, setShowCamera] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const handlerIA = async (base64: string) => {
    setShowCamera(false)
    setIsLoading(true)
    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ base64 })
      })
      const message = await response.text();
      setMessage((state) => state + message);
      const button = document.getElementById('updateProductButton');
      if(button) {
        button.click()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  
  return (
    showCamera ? <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} />:
    <>
      {isLoading && <Loading />}
      {!isLoading && <>
        <header>
          <Hero goToCamera={() => setShowCamera(true)} />
        </header>
        <main className={`${message && 'overflow-hidden'} flex flex-col`}>
          <Team />
          <div className='wrapper py-8 px-4 lg:py-16 lg:px-6'>
            <h2 className='text-2xl font-bold text-center mb-10 text-slate-50 animate-bounce'>Contactanos</h2>
            <form className='flex flex-col gap-4 w-full items-center' action={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <input name='names' className='h-10 rounded px-2 text-black' type="text" placeholder='Nombres' />
                <input name='lastNames' className='h-10 rounded px-2 text-black' type="text" placeholder='Apellidos' />
                <input name='email' className='h-10 rounded px-2 text-black' type="email" placeholder='Correo electronico' />
                <input name='subject' className='h-10 rounded px-2 text-black' type="text" placeholder='Asunto' />
              </div>
              <textarea name='text' className='h-24 rounded px-2 text-black w-full' id="message" placeholder='Mensage'></textarea>
              <button className='bg-green-500 w-[200px] h-10 rounded hover:bg-green-400' type="submit">Enviar</button>
            </form>
          </div>
          <Message message={message} close={() => setMessage('')} />
        </main>
      </>}
    </>
  );
}
