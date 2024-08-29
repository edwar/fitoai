"use client";
import React, { useState } from 'react';
import './estilo.css';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const prices = {
    mango: { perPound: 2500, perKilo: 5000, perUnit: 1200 },
    limon: { perPound: 1500, perKilo: 3000, perUnit: 500 },
    mandarina: { perPound: 1800, perKilo: 3600, perUnit: 700 },
    aguacate: { perPound: 6000, perKilo: 12000, perUnit: 5000 },
    platano: { perPound: 1700, perKilo: 3400, perUnit: 600 },
    tomateDeArbol: { perPound: 2000, perKilo: 4000, perUnit: 800 },
  };

  const fruits = [
    { name: 'Mango', emoji: '🥭', image: '/frutas/mango.jpg', soloImage: '/frutas/mangosolo.png', price: prices.mango },
    { name: 'Limón', emoji: '🍋', image: '/frutas/limon.jpg', soloImage: '/frutas/limonsolo.png', price: prices.limon },
    { name: 'Mandarina', emoji: '🍊', image: '/frutas/mandarina.jpg', soloImage: '/frutas/mandarinasola.webp', price: prices.mandarina },
    { name: 'Aguacate', emoji: '🥑', image: '/frutas/aguacate.jpg', soloImage: '/frutas/aguacatesolo.webp', price: prices.aguacate },
    { name: 'Plátano', emoji: '🍌', image: '/frutas/platano.jpg', soloImage: '/frutas/platanosolo.jpg', price: prices.platano },
    { name: 'Tomate de Árbol', emoji: '🍅', image: '/frutas/tomatedearbol.jpg', soloImage: '/frutas/tomatedearbolsolo.jpg', price: prices.tomateDeArbol },
  ];

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="fruit-catalog">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-0 mx-48 py-36">
        {filteredFruits.map((fruit, index) => (
          <article key={index} className='card'>
            <img src={fruit.image} alt={fruit.name} />
            <div className="details">
              <h2>{fruit.emoji} {fruit.name}</h2>
              <div className="price">{`$${fruit.price.perPound} COP`}</div>
              <div className="additional-prices">
                <div>{`Por kilo: $${fruit.price.perKilo} COP`}</div>
                <div>{`Por unidad: $${fruit.price.perUnit} COP`}</div>
              </div>
            </div>
            <img src={fruit.soloImage} alt={`${fruit.name} solo`} />
          </article>
        ))}
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar frutas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
}
