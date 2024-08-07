'use client'
import { useState } from 'react';
import CustomWebcam from '@/app/Components/CustomWebcam';
import Loading from '@/app/Components/Loading';
import Hero from '@/app/Components/Hero';
import Team from '@/app/Components/Team';
import Message from '@/app/Components/Message';
import { sendEmail } from '@/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de toastify

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
    const formData = new FormData(event.currentTarget);
    await handleEmail(formData);
  };

  return (
    showCamera ? <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} /> :
    <>
      {isLoading && <Loading />}
      {!isLoading && <>
        <header>
          <Hero goToCamera={() => setShowCamera(true)} />
        </header>
        <main className={`${message && 'overflow-hidden'} flex flex-col`}>
          <Team />
          <div className='wrapper py-8 px-4 lg:py-16 lg:px-6'>
            <h2 className='text-2xl font-bold text-center mb-10 text-slate-50 animate-bounce'>Contáctanos</h2>
            <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <input name='names' className='h-10 rounded px-2 text-black' type="text" placeholder='Nombres' required />
                <input name='lastNames' className='h-10 rounded px-2 text-black' type="text" placeholder='Apellidos' required />
                <input name='email' className='h-10 rounded px-2 text-black' type="email" placeholder='Correo electrónico' required />
                <select name='subject' className='h-10 rounded px-2 text-black' required>
                  <option value="">Selecciona el asunto</option>
                  <option value="queja">Queja</option>
                  <option value="duda">Duda</option>
                  <option value="sugerencia">Sugerencia</option>
                </select>
              </div>
              <textarea name='text' className='h-24 rounded px-2 text-black w-full' id="message" placeholder='Mensaje' required></textarea>
              <button className='bg-green-500 w-[200px] h-10 rounded hover:bg-green-400' type="submit">Enviar</button>
            </form>
          </div>
          <Message message={message} close={() => setMessage('')} />
        </main>
      </>}
      <ToastContainer />
    </>
  );
}
