
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Services = () => {
  const ecoServices = [
    {
      title: "Tours Ecológicos",
      description: "Explora la biodiversidad local con nuestros guías especializados en rutas sostenibles.",
      features: [
        "Senderismo interpretativo",
        "Observación de aves",
        "Visitas a comunidades locales",
        "Fotografía de naturaleza"
      ],
      imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3"
    },
    {
      title: "Spa Natural",
      description: "Rejuvenece cuerpo y mente con tratamientos que utilizan productos orgánicos locales.",
      features: [
        "Masajes terapéuticos",
        "Faciales con productos naturales",
        "Baños de arcilla",
        "Aromaterapia orgánica"
      ],
      imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3"
    },
    {
      title: "Restaurante Orgánico",
      description: "Disfruta de una experiencia gastronómica con ingredientes frescos de nuestra huerta y productores locales.",
      features: [
        "Menú de temporada",
        "Opciones vegetarianas y veganas",
        "Productos de kilómetro cero",
        "Talleres de cocina"
      ],
      imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3"
    },
    {
      title: "Yoga y Meditación",
      description: "Conecta con tu ser interior en nuestras sesiones al aire libre rodeado de naturaleza.",
      features: [
        "Clases diarias de yoga",
        "Meditación guiada",
        "Retiros espirituales",
        "Espacios de contemplación"
      ],
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3"
    },
    {
      title: "Talleres Sustentables",
      description: "Aprende prácticas ecológicas para implementar en tu vida cotidiana.",
      features: [
        "Permacultura",
        "Huertos orgánicos",
        "Reciclaje creativo",
        "Energías renovables"
      ],
      imageUrl: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3"
    },
    {
      title: "Actividades Familiares",
      description: "Experiencias diseñadas para todas las edades que fomentan la conexión con la naturaleza.",
      features: [
        "Campamentos para niños",
        "Avistamiento de estrellas",
        "Taller de artesanías locales",
        "Actividades en la granja"
      ],
      imageUrl: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-vh-100">
      <Navbar />
      <div className="pt-5 mt-5 pb-4" style={{ backgroundColor: 'rgba(151, 188, 98, 0.2)' }}>
        <div className="container px-4">
          <h1 className="display-4 fw-bold text-center mb-3" style={{ color: 'var(--eco-dark-green)', fontFamily: 'Playfair Display, serif' }}>
            Nuestros Servicios
          </h1>
          <p className="text-center text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
            En Eco Lodge ofrecemos una variedad de servicios pensados para enriquecer tu estancia mientras respetamos y celebramos el entorno natural.
          </p>
        </div>
      </div>
      
      <div className="py-5 px-4">
        <div className="container">
          <div className="row g-4">
            {ecoServices.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-success">
                  <div className="overflow-hidden" style={{ height: '200px' }}>
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="card-img-top h-100 w-100 object-fit-cover" 
                    />
                  </div>
                  <div className="card-header bg-white">
                    <h3 className="card-title h5 text-success">{service.title}</h3>
                    <p className="card-text small text-secondary">{service.description}</p>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-2">
                          <Check className="text-success me-2" size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded shadow-sm" style={{ backgroundColor: 'var(--eco-cream)' }}>
            <h2 className="fs-3 fw-semibold mb-3" style={{ color: 'var(--eco-dark-green)' }}>Información Adicional</h2>
            <ul className="ps-4">
              <li className="mb-2">Todos nuestros servicios están diseñados bajo estrictos principios de sostenibilidad.</li>
              <li className="mb-2">Ofrecemos paquetes personalizados que combinan diferentes servicios.</li>
              <li className="mb-2">Las actividades pueden reservarse con anticipación o durante tu estancia, sujetas a disponibilidad.</li>
              <li className="mb-2">Consulta nuestras tarifas especiales para huéspedes del hotel.</li>
              <li className="mb-2">Solicita información sobre servicios adicionales en la recepción del hotel.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
