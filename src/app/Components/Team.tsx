import React from 'react'

const Team = () => {
  return (
    <section>
        <div className='wrapper py-8 px-4 lg:py-16 lg:px-6 '>
            <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>Equipo</h2>
                <p className='font-light lg:mb-16 sm:text-xl text-gray-400'>Somos un equipo de estudiantes de la institucion educativa departamental Hernan Venegas Carrillo</p>
            </div> 
            <div className='grid px-10 gap-16 mb-6 lg:mb-16 md:grid-cols-2'>
                <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-110 duration-700'>
                   <div className='w-full sm:w-1/3 h-full'>
                        <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/angela.webp' alt='Angela' />
                    </div>
                    <div className='w-full sm:w-2/3 p-5'>
                        <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                           <div>Angela Rocio Amaya Diaz</div>
                        </h3>
                        <span className='text-gray-400 line-clamp-2'>Estudiante</span>
                        <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Diseño de pagina y editora de contenidos</p>
                    </div>
                </div> 
                <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-110 duration-700'>
                    <div className='w-full sm:w-1/3 h-full'>
                        <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/santiago.webp' alt='Santiago' />
                    </div>
                    <div className='w-full sm:w-2/3 p-5'>
                        <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                           <div>Santiago Morales Morales</div>
                        </h3>
                        <span className='text-gray-400 line-clamp-2'>Estudiante</span>
                        <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>programador</p>
                    </div>
                </div> 
                <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-110 duration-700'>
                    <div className='w-full sm:w-1/3 h-full'>
                        <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/nicolas.webp' alt='Nicolas' />
                    </div>
                    <div className='w-full sm:w-2/3 p-5'>
                        <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                           <div>Nicolas Morales Morales</div>
                        </h3>
                        <span className='text-gray-400 line-clamp-2'>Estudiante</span>
                        <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Programador</p>
                    </div>
                </div> 
                <div className='flex flex-col sm:flex-row items-center rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-110 duration-700'>
                    <div className='w-full sm:w-1/3 h-full'>
                        <img className='max-h-max h-full aspect-auto rounded-t-lg sm:rounded-none sm:rounded-l-lg' src='/team/emmanuel.webp' alt='Emmanuel' />
                    </div>
                    <div className='w-full sm:w-2/3 p-5'>
                        <h3 className='text-xl font-bold tracking-tight text-white line-clamp-1'>
                           <div>Emmanuel Andres Soto Peña</div>
                        </h3>
                        <span className='text-gray-400 line-clamp-2'>Estudiante</span>
                        <p className='mt-3 mb-4 font-light text-gray-400 line-clamp-3'>Diseñador de pagina web</p>
                    </div>
                </div>  
            </div>  
        </div>
    </section>
  )
}

export default Team
