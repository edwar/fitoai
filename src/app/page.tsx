'use client'
import { useState } from 'react';
import CustomWebcam from '@/app/Components/CustomWebcam';
import Loading from '@/app/Components/Loading';
import Hero from '@/app/Components/Hero';
import Team from '@/app/Components/Team';
import Message from '@/app/Components/Message';
import { sendEmail } from '@/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlerIA = async (base64: string) => {
    setShowCamera(false);
    setIsLoading(true);
    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ base64 })
      });
      const message = await response.text();
      setMessage((state) => state + message);
      const button = document.getElementById('updateProductButton');
      if (button) {
        button.click();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmail = async (data: FormData) => {
    try {
      const resp = await sendEmail(data);
      const { ok } = resp;
      if (!ok) {
        toast.error("Error en el envío del email");
        return;
      }
      toast.success("Email enviado con éxito");
    } catch (error) {
      toast.error("Error en el envío del email");
      console.log("Error en el envío del email", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    await handleEmail(formData);
    
    form.reset();
    setIsLoading(false);
  };

  return (
    showCamera ? (
      <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} />
    ) : (
      <>
        {isLoading && <><Loading /><p className='text-white text-3xl absolute inset-0 overflow-hidden flex items-center justify-center z-50 top-72'>Enviando tu mensaje, esto podria tardar unos momentos...</p></>}

        {!isLoading && (
          <>
            <header>
              <Hero goToCamera={() => setShowCamera(true)} />
            </header>
            <main className={`${message ? 'overflow-hidden' : ''} flex flex-col`}>
              <Team />
              <div className='wrapper py-8 px-4 lg:py-16 lg:px-6'>
                <h2 className='text-2xl font-bold text-center mb-10 text-slate-50 animate-bounce'>Contáctanos</h2>
                <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <input 
                      name='names' 
                      className='h-10 rounded px-2 text-white border border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none' 
                      type="text" 
                      placeholder='Nombres' 
                      required 
                    />
                    <input 
                      name='lastNames' 
                      className='h-10 rounded px-2 text-white border border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none' 
                      type="text" 
                      placeholder='Apellidos' 
                      required 
                    />
                    <input 
                      name='email' 
                      className='h-10 rounded px-2 text-white border border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none' 
                      type="email" 
                      placeholder='Correo electrónico' 
                      required 
                    />
                    <select 
                      name='subject' 
                      className='h-10 rounded px-2 text-gray-400 border border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none appearance-none' 
                      required
                    >
                      <option value="" className="text-gray-400 bg-white">Selecciona el asunto</option>
                      <option value="queja" className="text-black bg-white">Queja</option>
                      <option value="duda" className="text-black bg-white">Duda</option>
                      <option value="sugerencia" className="text-black bg-white">Sugerencia</option>
                    </select>
                  </div>
                  <textarea 
                    name='text' 
                    className='h-24 rounded px-2 text-white border border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none w-full' 
                    id="message" 
                    placeholder='Mensaje' 
                    required
                  ></textarea>
                  <button
                    className={`w-[200px] h-10 rounded flex items-center justify-center ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400'} transition-colors duration-300`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                    ) : (
                      "Enviar"
                    )}
                    
                  </button>
          
                </form>
              </div>
              <Message message={message} close={() => setMessage('')} />
            </main>
          </>
        )}
        <ToastContainer />
      </>
    )
  );
}