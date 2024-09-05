"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo'; // Asegúrate de que la ruta de importación sea correcta
import { ShoppingBag, Share2, Send, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    // Simulando la función feather.replace()
    console.log('Iconos reemplazados');
  }, []);

  return (
    <footer className="relative mt-[300px] pt-[300px] pb-12 text-white bg-black">
      <div className="footer__parralax absolute left-0 -top-[300px] h-[300px] w-full overflow-hidden">
        <div className="footer__parralax-trees absolute inset-0 bg-repeat-x bg-bottom" style={{backgroundImage: "url(https://i.ibb.co/nQM4PGJ/arbres.png)", animation: "parralax 1000s linear infinite"}}></div>
        <div className="footer__parralax-moto absolute bottom-20 left-1/2 -ml-[250px] h-[200px] w-[150px] bg-no-repeat" style={{backgroundImage: "url(https://i.ibb.co/JCGfFJd/moto-net.gif)", animation: "moto 5s linear infinite"}}></div>
        <div className="footer__parralax-secondplan absolute inset-0 bg-repeat-x bg-bottom" style={{backgroundImage: "url(https://i.ibb.co/J3TjC4W/second-plan.png)", animation: "parralax 600s linear infinite"}}></div>
        <div className="footer__parralax-premierplan absolute inset-0 bg-repeat-x bg-bottom" style={{backgroundImage: "url(https://i.ibb.co/RQhDWbk/premierplanv3.png)", animation: "parralax 500s linear infinite"}}></div>
        <div className="footer__parralax-voiture absolute bottom-[10px] left-1/2 ml-[250px] h-[114px] w-[206px] bg-no-repeat" style={{backgroundImage: "url(https://i.ibb.co/0Qhp4DN/voiture-fumee.gif)", animation: "voiture 1s linear infinite"}}></div>
      </div>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <Link href='/' className='flex gap-3 justify-center items-center text-2xl font-semibold text-white'> 
            <Logo />
            <span>Fito AI</span>
          </Link>
        </div>
        <div className="footer__columns flex flex-col md:flex-row justify-between gap-8">
          <div className="footer__col">
            <h3 className="footer__col-title text-2xl mb-8 uppercase flex items-center">
              <span>SERVICIOS</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list flex flex-col gap-6">
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:underline">
                  Inteligencia Artificial que proporciona diagnosticos sobre enfermedades de las plantas
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:underline">
                    
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:underline">
                    
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:underline">
                    
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:underline">
                    
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title text-2xl mb-8 uppercase flex items-center">
              <Share2 className="mr-4" /> <span>Redes Sociales</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list flex flex-col gap-6">
                <li className="footer__nav-item">
                  <Link href="https://www.youtube.com/embed/zIn69z4Pwak?si=OWv7P3_e-jj-mV0P" className="footer__nav-link flex items-center hover:underline">
                    <Youtube className="mr-4" /><span>Tutorial Fito Ai.</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link flex items-center hover:underline">
                    <Facebook className="mr-4" /><span>Facebook</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link flex items-center hover:underline">
                    <Instagram className="mr-4" /><span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title text-2xl mb-8 uppercase flex items-center">
              <Send className="mr-4" /> <span>CONTACTOS</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list flex flex-col gap-6">
                <li className="footer__nav-item">
                  <a href="#contactanos" className="footer__nav-link hover:underline">
                    ¡CONTACTANOS!
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer__copyrights pt-12 mt-12 border-t border-white border-opacity-20">
          <p className="flex justify-center ">
            Derechos Reservados ©️FitoAi
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes parralax {
          0% { background-position: 260px 100%; }
          100% { background-position: -10000vw 100%; }
        }
        @keyframes moto {
          0% { transform: translateY(0) rotate(0); }
          5% { transform: translateY(0) rotate(-5deg); }
          25% { transform: translateY(60px) rotate(-20deg); }
          49% { transform: translateY(0) rotate(-1deg); }
          51% { transform: translateY(0) rotate(1deg); }
          75% { transform: translateY(60px) rotate(20deg); }
          80% { transform: translateY(60px) rotate(0deg); }
          98% { transform: translateY(0) rotate(0); }
        }
        @keyframes voiture {
          0% { transform: rotate(0); }
          25% { transform: rotate(-5deg); }
          50% { transform: rotate(0); }
          75% { transform: rotate(5deg); }
          100% { transform: rotate(0); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;