
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomPreview from '@/components/RoomPreview';

const Rooms = () => {
  return (
    <div className="min-vh-100">
      <Navbar />
      <div className="pt-5 mt-5 pb-4" style={{ backgroundColor: 'rgba(151, 188, 98, 0.2)' }}>
        <div className="container px-4">
          <h1 className="display-4 fw-bold text-center mb-3" style={{ color: 'var(--eco-dark-green)', fontFamily: 'Playfair Display, serif' }}>
            Nuestras Habitaciones
          </h1>
          <p className="text-center text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Descubre nuestras acogedoras habitaciones diseñadas para brindarte una experiencia única en armonía con la naturaleza.
          </p>
        </div>
      </div>
      <div className="py-5 px-4">
        <div className="container">
          <div className="mb-4">
            <h2 className="fs-3 fw-semibold mb-3" style={{ color: 'var(--eco-dark-green)' }}>Filtros</h2>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-outline-success">Todas</button>
              <button className="btn btn-outline-success">Vista al Bosque</button>
              <button className="btn btn-outline-success">Vista a la Montaña</button>
              <button className="btn btn-outline-success">Cerca del Río</button>
            </div>
          </div>
          
          <RoomPreview />
          
          <div className="mt-5 p-4 rounded shadow-sm" style={{ backgroundColor: 'var(--eco-cream)' }}>
            <h2 className="fs-3 fw-semibold mb-3" style={{ color: 'var(--eco-dark-green)' }}>Información Adicional</h2>
            <ul className="ps-4">
              <li className="mb-2">Todas nuestras habitaciones incluyen desayuno orgánico preparado con productos locales.</li>
              <li className="mb-2">Check-in: 15:00 hrs / Check-out: 12:00 hrs</li>
              <li className="mb-2">Ofrecemos traslado gratuito desde/hacia la estación de autobuses más cercana.</li>
              <li className="mb-2">Mascotas permitidas en habitaciones seleccionadas (consultar disponibilidad).</li>
              <li className="mb-2">Cancelación gratuita hasta 48 horas antes de la fecha de llegada.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;
