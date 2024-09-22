import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(id));
        } else {
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
          });
        }
      },
      { threshold: 0.1 } // 10% de la sección debe estar visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team-section"
      className={`relative transition-opacity duration-1000 ${visibleSections.has('team-section') ? 'opacity-100' : 'opacity-0'}`}
    >
      <ul className='circles pointer-events-none -z-0'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='wrapper py-8 px-4 lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>Equipo</h2>
        </div>
        <div className="flex overflow-hidden space-x-72 group mb-5 md:mb-0">
          <div className="flex space-x-72 animate-loop-scroll">
            <p className='font-light lg:mb-16 sm:text-xl text-gray-400 text-nowrap max-w-none'>Somos un equipo de estudiantes de la institucion educativa departamental Hernan Venegas Carrillo</p>
            <p className='font-light lg:mb-16 sm:text-xl text-gray-400 text-nowrap max-w-none'>Somos un equipo de estudiantes de la institucion educativa departamental Hernan Venegas Carrillo</p>
          </div>
          <div className="flex space-x-72 animate-loop-scroll" aria-hidden="true">
            <p className='font-light lg:mb-16 sm:text-xl text-gray-400 text-nowrap max-w-none'>Somos un equipo de estudiantes de la institucion educativa departamental Hernan Venegas Carrillo</p>
            <p className='font-light lg:mb-16 sm:text-xl text-gray-400 text-nowrap max-w-none'>Somos un equipo de estudiantes de la institucion educativa departamental Hernan Venegas Carrillo</p>
          </div>
        </div>
        <div className='grid px-10 gap-16 mb-6 lg:mb-16 md:grid-cols-2'>
          {/* Miembros del equipo */}
          <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-90 duration-700'>
            <div className='w-full sm:w-1/3 h-full'>
              <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/angela.webp' alt='Angela' />
            </div>
            <div className='w-full sm:w-2/3 p-5'>
              <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                <div>Angela Rocio Amaya Diaz</div>
              </h3>
              <span className='text-gray-400 line-clamp-2'>Estudiante</span>
              <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Diseño de pagina y editora de contenidos</p>
              <div className='flex space-x-4 mt-3'>
                <a href="https://wa.me/573146070586?text=Hola%20me%20interesa%20más%20información" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-green-500'>
                  <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-500'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-pink-500'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
              </div>
            </div>
          </div> 
          <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-90 duration-700'>
            <div className='w-full sm:w-1/3 h-full'>
              <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/santiago.jpg' alt='Santiago' />
            </div>
            <div className='w-full sm:w-2/3 p-5'>
              <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                <div>Santiago Morales Morales</div>
              </h3>
              <span className='text-gray-400 line-clamp-2'>Estudiante</span>
              <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Programador</p>
              <div className='flex space-x-4 mt-3'>
                <a href="https://wa.me/573134550474?text=Hola%20me%20interesa%20más%20información" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-green-500'>
                  <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-500'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-pink-500'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
              </div>
            </div>
          </div> 
          <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-90 duration-700'>
            <div className='w-full sm:w-1/3 h-full'>
              <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/nicolas.jpg' alt='Nicolas' />
            </div>
            <div className='w-full sm:w-2/3 p-5'>
              <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                <div>Nicolas Morales Morales</div>
              </h3>
              <span className='text-gray-400 line-clamp-2'>Estudiante</span>
              <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Programador</p>
              <div className='flex space-x-4 mt-3'>
                <a href="https://wa.me/573134550453?text=Hola%20me%20interesa%20más%20información" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-green-500'>
                  <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-500'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-pink-500'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
              </div>
            </div>
          </div> 
          <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-90 duration-700'>
            <div className='w-full sm:w-1/3 h-full'>
              <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/emmanuel.webp' alt='Emmanuel' />
            </div>
            <div className='w-full sm:w-2/3 p-5'>
              <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                <div>Emmanuel Andres Soto Peña</div>
              </h3>
              <span className='text-gray-400 line-clamp-2'>Estudiante</span>
              <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Diseñador de pagina web</p>
              <div className='flex space-x-4 mt-3'>
                <a href="https://wa.me/573203896944?text=Hola%20me%20interesa%20más%20información" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-green-500'>
                  <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-500'>
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-pink-500'>
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
              </div>
            </div>
          </div>  
        </div>  
      </div>
    </section>
  );
};

export default Team;
