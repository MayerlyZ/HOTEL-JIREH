
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomPreview from '@/components/RoomPreview';
import { Button } from '@/components/ui/button';

const Rooms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8 bg-eco-light-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-dark-green text-center mb-4 font-playfair">
            Nuestras Habitaciones
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Descubre nuestras acogedoras habitaciones diseñadas para brindarte una experiencia única en armonía con la naturaleza.
          </p>
        </div>
      </div>
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-eco-dark-green mb-4">Filtros</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-eco-dark-green text-eco-dark-green">
                Todas
              </Button>
              <Button variant="outline" className="border-eco-dark-green text-eco-dark-green">
                Vista al Bosque
              </Button>
              <Button variant="outline" className="border-eco-dark-green text-eco-dark-green">
                Vista a la Montaña
              </Button>
              <Button variant="outline" className="border-eco-dark-green text-eco-dark-green">
                Cerca del Río
              </Button>
            </div>
          </div>
          
          <RoomPreview />
          
          <div className="mt-12 bg-eco-cream p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-eco-dark-green mb-4">Información Adicional</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Todas nuestras habitaciones incluyen desayuno orgánico preparado con productos locales.</li>
              <li>Check-in: 15:00 hrs / Check-out: 12:00 hrs</li>
              <li>Ofrecemos traslado gratuito desde/hacia la estación de autobuses más cercana.</li>
              <li>Mascotas permitidas en habitaciones seleccionadas (consultar disponibilidad).</li>
              <li>Cancelación gratuita hasta 48 horas antes de la fecha de llegada.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;
