"use client"
import React, { useEffect, useState, useRef } from 'react';
import CustomWebcam from '@/components/CustomWebcam';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Message from '@/components/Message';
import { sendEmail } from '@/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useConfetti } from './hooks/useConfetti';

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [confetti, setConfetti] = useState(false)
  const formRef = useRef<HTMLDivElement>(null);
  const { handleConfetti } = useConfetti()

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
      setConfetti(true)
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

  useEffect(() => {
    if(confetti) {
      handleConfetti()
      setConfetti(false)
    }
  }, [confetti])

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsFormVisible(true);
        } else {
          setIsFormVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="wave-animation"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char}
      </span>
    ));
  };

  return (
    showCamera ? (
      <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} />
    ) : (
      <>
        {isLoading && (
          <>
            <Loading />
            <div className='text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4 text-center absolute inset-0 flex flex-col items-center justify-center z-50 top-72'>
              <span className="wave-container">
                {splitText('Enviando tu mensaje')}
              </span>
              <span className="wave-container mt-4">
                {splitText('Esto podría tardar unos momentos...')}
              </span>
            </div>
          </>
        )}

        {!isLoading && (
          <>
            <header>
              <Hero goToCamera={() => setShowCamera(true)} />
            </header>
            <main className={`${message ? 'overflow-hidden' : ''} flex flex-col`}>
              <Team />
              <div className='relative py-8 px-4 lg:py-12 lg:px-6'>
                <h2 className='text-2xl font-bold text-center mb-10 text-slate-50 animate-bounce' id='contactanos'>
                  Contáctanos
                </h2>
                <div 
                  ref={formRef}
                  className={`max-w-md mx-auto ${isFormVisible ? 'slide-in' : ''}`}
                >
                  <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg p-8 space-y-6">
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-5 group">
                        <input 
                          type="text" 
                          name="names" 
                          id="names"
                          autoComplete="off"
                          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-b-neutral-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                          placeholder=" "
                          required
                        />
                        <label 
                          htmlFor="names" 
                          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Nombres
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input 
                          type="text" 
                          name="lastNames" 
                          id="lastNames"
                          autoComplete="off"
                          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-b-neutral-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                          placeholder=" "
                          required 
                        />
                        <label 
                          htmlFor="lastNames" 
                          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Apellidos
                        </label>
                      </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input 
                        type="email" 
                        name="email" 
                        id="email"
                        autoComplete="off"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-b-neutral-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        required 
                      />
                      <label 
                        htmlFor="email" 
                        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Correo electrónico
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <select 
                        name="subject" 
                        id="subject"
                        autoComplete="off"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-b-neutral-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        required
                      >
                        <option value="" className="text-gray-600 bg-slate-800">Selecciona el asunto</option>
                        <option value="queja" className="text-white bg-slate-800">Queja</option>
                        <option value="duda" className="text-white bg-slate-800">Duda</option>
                        <option value="sugerencia" className="text-white bg-slate-800">Sugerencia</option>
                      </select>
                      <label 
                        htmlFor="subject" 
                        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Asunto.
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <textarea 
                        name="text" 
                        id="text"
                        rows={4}
                        autoComplete="off"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-b-neutral-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        required
                      ></textarea>
                      <label 
                        htmlFor="text" 
                        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Mensaje
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`btn-enviar w-full text-white ${isLoading ? '' : ''} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300`}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin mx-auto"></div>
                      ) : (
                        "Enviar"
                      )}
                    </button>
                  </form>
                </div>
                <Message message={message} close={() => setMessage('')} />
              </div>
            </main>
          </>
        )}
        <ToastContainer />
      </>
    )
  );
}
