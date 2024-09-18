"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Fruta {
  nombre: string;
  emoji: string;
  imagen: string;
  imagenSola: string;
  precio: {
    porLibra: number;
    porKilo: number;
    porUnidad: number;
  };
  infoNutricional: {
    calorias: string;
    grasas: string;
    carbohidratos: string;
    proteinas: string;
    vitaminaC: string;
    calcio: string;
    hierro: string;
  };
}

export default function Pagina() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [frutaSeleccionada, setFrutaSeleccionada] = useState<Fruta | null>(null);

  const precios = {
    mango: { porLibra: 2500, porKilo: 5000, porUnidad: 1200 },
    limon: { porLibra: 1500, porKilo: 3000, porUnidad: 500 },
    mandarina: { porLibra: 1800, porKilo: 3600, porUnidad: 700 },
    aguacate: { porLibra: 6000, porKilo: 12000, porUnidad: 5000 },
    platano: { porLibra: 1700, porKilo: 3400, porUnidad: 600 },
    tomateDeArbol: { porLibra: 2000, porKilo: 4000, porUnidad: 800 },
    remolacha: { porLibra: 3000, porKilo: 6000, porUnidad: 1000 },
    papa: { porLibra: 1200, porKilo: 2400, porUnidad: 800 },
    papaya: { porLibra: 3500, porKilo: 7000, porUnidad: 1500 },
    lulo: { porLibra: 4000, porKilo: 8000, porUnidad: 2000 },
    naranja: { porLibra: 1700, porKilo: 3400, porUnidad: 600 },
    yuca: { porLibra: 2500, porKilo: 5000, porUnidad: 1200 },
    ahuyama: { porLibra: 2700, porKilo: 5400, porUnidad: 1300 },
    tomate: { porLibra: 2200, porKilo: 4400, porUnidad: 900 },
  };

  const frutas: Fruta[] = [
    {
      nombre: 'Mango',
      emoji: '🥭',
      imagen: '/frutas/mango.jpg',
      imagenSola: '/frutas/mangosolo.png',
      precio: precios.mango,
      infoNutricional: {
        calorias: '60 kcal',
        grasas: '0.4 g',
        carbohidratos: '15 g',
        proteinas: '0.8 g',
        vitaminaC: '36.4 mg',
        calcio: '11 mg',
        hierro: '0.2 mg'
      }
    },
    {
      nombre: 'Limón',
      emoji: '🍋',
      imagen: '/frutas/limon.jpg',
      imagenSola: '/frutas/limonsolo.png',
      precio: precios.limon,
      infoNutricional: {
        calorias: '29 kcal',
        grasas: '0.3 g',
        carbohidratos: '9 g',
        proteinas: '1.1 g',
        vitaminaC: '53 mg',
        calcio: '26 mg',
        hierro: '0.6 mg'
      }
    },
    {
      nombre: 'Mandarina',
      emoji: '🍊',
      imagen: '/frutas/mandarina.jpg',
      imagenSola: '/frutas/mandarinasola.webp',
      precio: precios.mandarina,
      infoNutricional: {
        calorias: '53 kcal',
        grasas: '0.3 g',
        carbohidratos: '13 g',
        proteinas: '0.8 g',
        vitaminaC: '26.7 mg',
        calcio: '37 mg',
        hierro: '0.2 mg'
      }
    },
    {
      nombre: 'Aguacate',
      emoji: '🥑',
      imagen: '/frutas/aguacate.jpg',
      imagenSola: '/frutas/aguacatesolo.webp',
      precio: precios.aguacate,
      infoNutricional: {
        calorias: '160 kcal',
        grasas: '15 g',
        carbohidratos: '9 g',
        proteinas: '2 g',
        vitaminaC: '10 mg',
        calcio: '12 mg',
        hierro: '0.6 mg'
      }
    },
    {
      nombre: 'Plátano',
      emoji: '🍌',
      imagen: '/frutas/platano.jpg',
      imagenSola: '/frutas/platanosolo.jpg',
      precio: precios.platano,
      infoNutricional: {
        calorias: '89 kcal',
        grasas: '0.3 g',
        carbohidratos: '23 g',
        proteinas: '1.1 g',
        vitaminaC: '8.7 mg',
        calcio: '5 mg',
        hierro: '0.3 mg'
      }
    },
    {
      nombre: 'Tomate de Árbol',
      emoji: '🍅',
      imagen: '/frutas/tomatedearbol.jpg',
      imagenSola: '/frutas/tomatedearbolsolo.jpg',
      precio: precios.tomateDeArbol,
      infoNutricional: {
        calorias: '74 kcal',
        grasas: '0.3 g',
        carbohidratos: '18 g',
        proteinas: '1.7 g',
        vitaminaC: '30 mg',
        calcio: '18 mg',
        hierro: '0.6 mg'
      }
    },
    {
      nombre: 'Remolacha',
      emoji: '🍠',
      imagen: '/frutas/remolacha.jpg',
      imagenSola: '/frutas/remolachasola.png',
      precio: precios.remolacha,
      infoNutricional: {
        calorias: '43 kcal',
        grasas: '0.2 g',
        carbohidratos: '10 g',
        proteinas: '1.6 g',
        vitaminaC: '4 mg',
        calcio: '23 mg',
        hierro: '0.8 mg'
      }
    },
    {
      nombre: 'Papa',
      emoji: '🥔',
      imagen: '/frutas/papa.jpg',
      imagenSola: '/frutas/papasola.webp',
      precio: precios.papa,
      infoNutricional: {
        calorias: '77 kcal',
        grasas: '0.1 g',
        carbohidratos: '17 g',
        proteinas: '2 g',
        vitaminaC: '19.7 mg',
        calcio: '12 mg',
        hierro: '0.8 mg'
      }
    },
    {
      nombre: 'Papaya',
      emoji: '🍈',
      imagen: '/frutas/papaya.jpg',
      imagenSola: '/frutas/papayasola.png',
      precio: precios.papaya,
      infoNutricional: {
        calorias: '43 kcal',
        grasas: '0.3 g',
        carbohidratos: '11 g',
        proteinas: '0.5 g',
        vitaminaC: '60.9 mg',
        calcio: '34 mg',
        hierro: '0.3 mg'
      }
    },
    {
      nombre: 'Lulo',
      emoji: '🍈',
      imagen: '/frutas/lulo.jpg',
      imagenSola: '/frutas/lulosolo.png',
      precio: precios.lulo,
      infoNutricional: {
        calorias: '43 kcal',
        grasas: '0.4 g',
        carbohidratos: '10 g',
        proteinas: '1.3 g',
        vitaminaC: '26 mg',
        calcio: '12 mg',
        hierro: '0.5 mg'
      }
    },
    {
      nombre: 'Naranja',
      emoji: '🍊',
      imagen: '/frutas/naranja.jpg',
      imagenSola: '/frutas/naranjasola.png',
      precio: precios.naranja,
      infoNutricional: {
        calorias: '47 kcal',
        grasas: '0.1 g',
        carbohidratos: '12 g',
        proteinas: '0.9 g',
        vitaminaC: '53.2 mg',
        calcio: '40 mg',
        hierro: '0.1 mg'
      }
    },
    {
      nombre: 'Yuca',
      emoji: '🥥',
      imagen: '/frutas/yuca.jpg',
      imagenSola: '/frutas/yucasola.png',
      precio: precios.yuca,
      infoNutricional: {
        calorias: '160 kcal',
        grasas: '0.3 g',
        carbohidratos: '38 g',
        proteinas: '1.4 g',
        vitaminaC: '20 mg',
        calcio: '30 mg',
        hierro: '0.6 mg'
      }
    },
    {
      nombre: 'Ahuyama',
      emoji: '🎃',
      imagen: '/frutas/ahuyama.jpg',
      imagenSola: '/frutas/ahuyamasola.png',
      precio: precios.ahuyama,
      infoNutricional: {
        calorias: '26 kcal',
        grasas: '0.1 g',
        carbohidratos: '7 g',
        proteinas: '1 g',
        vitaminaC: '9 mg',
        calcio: '20 mg',
        hierro: '0.8 mg'
      }
    },
    {
      nombre: 'Tomate',
      emoji: '🍅',
      imagen: '/frutas/tomate.jpg',
      imagenSola: '/frutas/tomatesola.png',
      precio: precios.tomate,
      infoNutricional: {
        calorias: '18 kcal',
        grasas: '0.2 g',
        carbohidratos: '4 g',
        proteinas: '0.9 g',
        vitaminaC: '14 mg',
        calcio: '18 mg',
        hierro: '0.5 mg'
      }
    },
  ];

  const frutasFiltradas = frutas.filter(fruta =>
    fruta.nombre.toLowerCase().startsWith(terminoBusqueda.toLowerCase())
  );

  const manejarClicFruta = (fruta: Fruta) => {
    setFrutaSeleccionada(fruta);
  };

  const cerrarPopup = () => {
    setFrutaSeleccionada(null);
  };

  return (
    <div className="catalogo-frutas bg-gray-900 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="contenedor-busqueda mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar frutas/verduras..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              className="w-full p-2 pl-10 rounded bg-gray-700 text-white"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frutasFiltradas.map((fruta, indice) => (
            <div 
              key={indice} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform group hover:scale-105 cursor-pointer"
              onClick={() => manejarClicFruta(fruta)}
            >
              <img src={fruta.imagen} alt={fruta.nombre} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-white mb-2">{fruta.emoji} {fruta.nombre}</h2>
                  <div className="text-lg font-semibold text-green-400 mb-1">{`$${fruta.precio.porLibra} COP`}</div>
                  <div className="text-sm text-gray-200">
                    <div>{`Por kilo: $${fruta.precio.porKilo} COP`}</div>
                    <div>{`Por unidad: $${fruta.precio.porUnidad} COP`}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black transition-opacity duration-200 opacity-60 group-hover:opacity-20" />
                <img 
                  src={fruta.imagenSola} 
                  alt={`${fruta.nombre} sola`} 
                  className="absolute bottom-0 right-0 w-1/2 h-auto transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" 
                />
              </div>
            </div>
          ))}
        </div>

        {frutaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div 
            className="rounded-lg p-6 max-w-2xl w-full m-4 relative"
            style={{
              backgroundImage: "url('/frutas/fondoprice1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <button 
              onClick={cerrarPopup}
              className="absolute top-2 right-2 text-black hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="flex flex-col md:flex-row">
              <img 
                src={frutaSeleccionada.imagenSola} 
                alt={frutaSeleccionada.nombre} 
                className="w-full md:w-1/3 object-contain mb-4 md:mb-0 md:mr-4"
              />
              <div className="text-white bg-black bg-opacity-50 p-4 rounded">
                <h2 className="text-2xl font-bold mb-2">{frutaSeleccionada.emoji} {frutaSeleccionada.nombre}</h2>
                <h3 className="text-xl font-semibold mb-2">Información Nutricional</h3>
                <ul className="list-disc list-inside mb-4">
                  <li>Calorías: {frutaSeleccionada.infoNutricional.calorias}</li>
                  <li>Grasas totales: {frutaSeleccionada.infoNutricional.grasas}</li>
                  <li>Carbohidratos: {frutaSeleccionada.infoNutricional.carbohidratos}</li>
                  <li>Proteínas: {frutaSeleccionada.infoNutricional.proteinas}</li>
                  <li>Vitamina C: {frutaSeleccionada.infoNutricional.vitaminaC}</li>
                  <li>Calcio: {frutaSeleccionada.infoNutricional.calcio}</li>
                  <li>Hierro: {frutaSeleccionada.infoNutricional.hierro}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}