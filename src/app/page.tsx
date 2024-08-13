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
import './Components/estilos/style.css'; // Asegúrate de importar el archivo CSS donde defines la animación

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

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="wave-animation">{char === ' ' ? '\u00A0' : char}</span>
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
            <p className='text-white text-3xl absolute inset-0 overflow-hidden flex items-center justify-center z-50 top-72'>
              {splitText('Enviando tu mensaje, esto podría tardar unos momentos...')}
            </p>
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
                <h2 className='text-2xl font-bold text-center mb-10 text-slate-50 animate-bounce'>
                  Contáctanos
                </h2>
                <div className='bg-slate-800 rounded-lg p-8 space-y-8 mx-auto max-w-3xl'>
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                      <div className='relative'>
                        <input 
                          id='names'
                          name='names' 
                          className='peer placeholder-transparent h-12 w-full border-b-2 border-slate-600 text-white focus:border-blue-500 outline-none bg-transparent' 
                          type="text" 
                          placeholder='Nombres' 
                          required 
                          autoComplete='off'
                        />
                        <label htmlFor='names' className='absolute left-0 top-2 text-gray-600 text-sm transition-all duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600'>
                          Nombres
                        </label>
                      </div>
                      <div className='relative'>
                        <input 
                          id='lastNames'
                          name='lastNames' 
                          className='peer placeholder-transparent h-12 w-full border-b-2 border-slate-600 text-white focus:border-blue-500 outline-none bg-transparent' 
                          type="text" 
                          placeholder='Apellidos' 
                          required 
                          autoComplete='off'
                        />
                        <label htmlFor='lastNames' className='absolute left-0 top-2 text-gray-600 text-sm transition-all duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600'>
                          Apellidos
                        </label>
                      </div>
                    </div>
                    <div className='relative mt-6'>
                      <input 
                        id='email'
                        name='email' 
                        className='peer placeholder-transparent h-12 w-full border-b-2 border-slate-600 text-white focus:border-blue-500 outline-none bg-transparent' 
                        type="email" 
                        placeholder='Correo electrónico' 
                        required 
                        autoComplete='off'
                      />
                      <label htmlFor='email' className='absolute left-0 top-2 text-gray-600 text-sm transition-all duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600'>
                        Correo electrónico
                      </label>
                    </div>
                    <div className='relative mt-6'>
                      <select 
                        id='subject'
                        name='subject' 
                        className='peer placeholder-transparent h-12 w-full border-b-2 border-slate-600 text-white focus:border-blue-500 outline-none bg-transparent appearance-none' 
                        required
                      >
                        <option value="" className="text-gray-600 bg-white">Selecciona el asunto</option>
                        <option value="queja" className="text-black bg-white">Queja</option>
                        <option value="duda" className="text-black bg-white">Duda</option>
                        <option value="sugerencia" className="text-black bg-white">Sugerencia</option>
                      </select>
                      <label htmlFor='subject' className='absolute left-0 top-2 text-gray-600 text-sm transition-all duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600'>
                        Asunto
                      </label>
                    </div>
                    <div className='relative mt-6'>
                      <textarea 
                        id='text'
                        name='text' 
                        className='peer placeholder-transparent h-24 w-full border-b-2 border-slate-600 text-white focus:border-blue-500 outline-none bg-transparent' 
                        placeholder='Mensaje' 
                        required
                      ></textarea>
                      <label htmlFor='text' className='absolute left-0 top-2 text-gray-600 text-sm transition-all duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600'>
                        Mensaje
                      </label>
                    </div>
                    <div className='flex justify-center mt-6'>
                      <button
                        className={`w-3/6 h-12 rounded-lg flex items-center justify-center ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-indigo-600 transition-transform duration-300 scale-100 hover:scale-105 align-middle'} transition-colors duration-300`}
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                        ) : (
                          "Enviar"
                        )}
                      </button>
                    </div>
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
