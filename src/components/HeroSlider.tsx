
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const sliderImages = [
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Vista montañosa del lodge ecológico"
  },
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Río y montañas cercanas al lodge"
  },
  {
    url: "https://images.unsplash.com/photo-1515729947596-a598e5de0ab3",
    alt: "Paisaje montañoso alrededor del lodge"
  },
  {
    url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Bosque donde se encuentra el lodge ecológico"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider overflow-hidden relative">
      {/* Images */}
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.url} 
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 md:mb-6 font-playfair max-w-4xl">
          Descubre la Armonía con la Naturaleza
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          Disfruta de una experiencia única en nuestro lodge ecológico, donde el lujo se encuentra con la sostenibilidad.
        </p>
        <Button size="lg" className="bg-eco-dark-green hover:bg-eco-medium-green text-white px-8 py-6 text-lg">
          Reservar Ahora
        </Button>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
