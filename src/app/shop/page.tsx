import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export default function Ppageage() {
    return (
        <section className='min-h-screen pt-28 wrapper p-4 md:p-8 md:pt-24 lg:p-10 lg:pt-24'>
            <h1 className='text-white mb-4 font-semibold text-5xl'>
                <p className='text-center bg-slate-800 w-full'>Tiendas agrícolas</p>
            </h1>
            <div className="flex flex-wrap gap-4">
                {/* Tarjeta 1 */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:opacity-50 duration-300">
                    <a href="#">
                        <img className="rounded-t-lg" src="/shop/casa1..jpg" alt="Imagen Tienda" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agroherramientas tocaima</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Agroherramientas Tocaima es sinónimo de confianza, excelencia y satisfacción.</p>
                        <div className="flex items-center mb-3">
                            <a href="https://maps.app.goo.gl/uaknUnNvoNcks5e37" target='_blank' rel='noopener noreferrer' className="transition-colors duration-300 hover:text-red-700">
                                <FontAwesomeIcon icon={faMapPin} className="w-5 h-5 text-red-500 mr-2 hover:text-red-700" />
                            </a>
                            <p className="text-gray-700 dark:text-gray-400">Ubicaciòn</p>
                        </div>
                        
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:opacity-50 duration-300">
                    <a href="#">
                        <img className="rounded-t-lg" src="/shop/casa2.jpeg" alt="Agrocentro" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ferretería AGROCENTRO</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Venta de Herramientas Manuales,Eléctricas,Suministros de Construcción,Pinturas , Acabados,Fontanería,Electricidad entre otros más.</p>
                        <div className="flex items-center mb-3">
                            <a href="https://maps.app.goo.gl/n6UkBqLMdAVhchov8" target='_blank' rel='noopener noreferrer' className="transition-colors duration-300 hover:text-red-700">
                                <FontAwesomeIcon icon={faMapPin} className="w-5 h-5 text-red-500 mr-2 hover:text-red-700" />
                            </a>
                            <p className="text-gray-700 dark:text-gray-400">Ubicaciòn</p>
                        </div>
                        
                    </div>
                </div>



                {/* Agrega más tarjetas aquí */}
            </div>
        </section>
    )
}
