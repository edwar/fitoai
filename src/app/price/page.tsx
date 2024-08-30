"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './estilo.css';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const prices = {
    mango: { perPound: 2500, perKilo: 5000, perUnit: 1200 },
    limon: { perPound: 1500, perKilo: 3000, perUnit: 500 },
    mandarina: { perPound: 1800, perKilo: 3600, perUnit: 700 },
    aguacate: { perPound: 6000, perKilo: 12000, perUnit: 5000 },
    platano: { perPound: 1700, perKilo: 3400, perUnit: 600 },
    tomateDeArbol: { perPound: 2000, perKilo: 4000, perUnit: 800 },
    remolacha: { perPound: 3000, perKilo: 6000, perUnit: 1000 },
    papa: { perPound: 1200, perKilo: 2400, perUnit: 800 },
    papaya: { perPound: 3500, perKilo: 7000, perUnit: 1500 },
    lulo: { perPound: 4000, perKilo: 8000, perUnit: 2000 },
    naranja: { perPound: 1700, perKilo: 3400, perUnit: 600 },
    yuca: { perPound: 2500, perKilo: 5000, perUnit: 1200 },
    ahuyama: { perPound: 2700, perKilo: 5400, perUnit: 1300 },
    tomate: { perPound: 2200, perKilo: 4400, perUnit: 900 },
  };

  const fruits = [
    { name: 'Mango', emoji: '🥭', image: '/frutas/mango.jpg', soloImage: '/frutas/mangosolo.png', price: prices.mango },
    { name: 'Limón', emoji: '🍋', image: '/frutas/limon.jpg', soloImage: '/frutas/limonsolo.png', price: prices.limon },
    { name: 'Mandarina', emoji: '🍊', image: '/frutas/mandarina.jpg', soloImage: '/frutas/mandarinasola.webp', price: prices.mandarina },
    { name: 'Aguacate', emoji: '🥑', image: '/frutas/aguacate.jpg', soloImage: '/frutas/aguacatesolo.webp', price: prices.aguacate },
    { name: 'Plátano', emoji: '🍌', image: '/frutas/platano.jpg', soloImage: '/frutas/platanosolo.jpg', price: prices.platano },
    { name: 'Tomate de Árbol', emoji: '🍅', image: '/frutas/tomatedearbol.jpg', soloImage: '/frutas/tomatedearbolsolo.jpg', price: prices.tomateDeArbol },
    { name: 'Remolacha', emoji: '🍠', image: '/frutas/remolacha.jpg', soloImage: '/frutas/remolachasola.png', price: prices.remolacha },
    { name: 'Papa', emoji: '🥔', image: '/frutas/papa.jpg', soloImage: '/frutas/papasola.webp', price: prices.papa },
    { name: 'Papaya', emoji: '🍈', image: '/frutas/papaya.jpg', soloImage: '/frutas/papayasola.png', price: prices.papaya },
    { name: 'Lulo', emoji: '🍈', image: '/frutas/lulo.jpg', soloImage: '/frutas/lulosolo.png', price: prices.lulo },
    { name: 'Naranja', emoji: '🍊', image: '/frutas/naranja.jpg', soloImage: '/frutas/naranjasola.png', price: prices.naranja },
    { name: 'Yuca', emoji: '🥥', image: '/frutas/yuca.jpg', soloImage: '/frutas/yucasola.png', price: prices.yuca },
    { name: 'Ahuyama', emoji: '🎃', image: '/frutas/ahuyama.jpg', soloImage: '/frutas/ahuyamasola.png', price: prices.ahuyama },
    { name: 'Tomate', emoji: '🍅', image: '/frutas/tomate.jpg', soloImage: '/frutas/tomatesola.png', price: prices.tomate },
  ];

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="fruit-catalog">
      <div className={`search-container ${showSearch ? 'show' : ''}`}>
        <button className="search-icon" onClick={() => setShowSearch(!showSearch)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          placeholder="Buscar frutas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
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
    </div>
  );
}
