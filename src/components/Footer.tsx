"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Share2, Send, Youtube, Facebook, Instagram } from 'lucide-react';

// Declaración global para particlesJS
declare global {
  interface Window {
    particlesJS: (elementId: string, config: any) => void;
  }
}

const Footer = () => {
  useEffect(() => {
    if (!document.getElementById('particles-js')) {
      console.error('particles-js element not found');
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof window.particlesJS === 'function') {
        window.particlesJS("particles-js", {
          "particles": {
            // ACA SON LAS PROPIEDADES DE LAS PARTICULAS EL NUMBER ES PARA CUANTAS PARTICULAS QUIERES
            "number": { "value": 50, "density": { "enable": true, "value_area": 1420.4657549380909 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "triangle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
            "opacity": { "value": 0.06313181133058181, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 11.83721462448409, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              // ACA ES QUE CUANDO PASE EL HOVER QUE LAS FIGURAS SE REPELAN. PONER TRUE SI QUIERES QUE SUCEDA
              "onhover": { "enable": false, "mode": "repulse" },
              // ACA ES QUE CUANDO SE DE CLICK SE AÑADAN MAS FIGURAS. PONER TRUE SI QUIERES QUE SUCEDA
              "onclick": { "enable": false, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
              "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
              "repulse": { "distance": 200, "duration": 0.4 },
              "push": { "particles_nb": 4 },
              "remove": { "particles_nb": 2 }
            }
          },
          "retina_detect": true
        });
      } else {
        console.error('particlesJS is not available');
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="relative mt-[300px] pt-[300px] pb-12 text-white bg-slate-900">
      <div id="particles-js" className="absolute inset-0"></div>
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-8">
          <Link href='/' className='flex gap-3 justify-center items-center text-2xl font-semibold text-white'> 
            <Logo />
            <span className="logo text-8xl font-['Monoton']">Fito AI</span>
          </Link>
          <h2 className="text-3xl font-bold text-[#555560]">Inteligencia Artificial para Diagnóstico de Plantas</h2>
        </div>
        <div className="footer__columns flex flex-col md:flex-row justify-between gap-8">
          <div className="footer__col">
            <h3 className="footer__col-title text-2xl mb-8 uppercase flex items-center text-[#fc3565]">
              <span>SERVICIOS</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list flex flex-col gap-6">
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:text-[#fc3565] transition duration-500">
                    Diagnóstico de enfermedades en plantas
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:text-[#fc3565] transition duration-500">
                    Recomendaciones de tratamiento
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link hover:text-[#fc3565] transition duration-500">
                    Identificación de plagas
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title text-2xl mb-8 uppercase flex items-center text-[#fc3565]">
              <Share2 className="mr-4" /> <span>Redes Sociales</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list flex flex-col gap-6">
                <li className="footer__nav-item">
                  <Link href="https://www.youtube.com/embed/zIn69z4Pwak?si=OWv7P3_e-jj-mV0P" className="footer__nav-link flex items-center hover:text-[#fc3565] transition duration-500">
                    <Youtube className="mr-4" /><span>Tutorial Fito AI</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link flex items-center hover:text-[#fc3565] transition duration-500">
                    <Facebook className="mr-4" /><span>Facebook</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link href="" className="footer__nav-link flex items-center hover:text-[#fc3565] transition duration-500">
                    <Instagram className="mr-4" /><span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title text-2xl mb-8 uppercase flex items-center text-[#fc3565]">
              <Send className="mr-4" /> <span>CONTACTOS</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list flex flex-col gap-6">
                <li className="footer__nav-item">
                  <a href="#contactanos" className="footer__nav-link hover:text-[#fc3565] transition duration-500">
                    ¡CONTÁCTANOS!
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer__copyrights pt-12 mt-12 border-t border-white border-opacity-20">
          <p className="flex justify-center text-sm">
            Derechos Reservados ©️ FitoAI | Desarrollado con 💚 para plantas saludables
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;