
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8 bg-eco-light-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-dark-green text-center mb-4 font-playfair">
            Nuestros Servicios
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            En Eco Lodge ofrecemos una variedad de servicios pensados para enriquecer tu estancia mientras respetamos y celebramos el entorno natural.
          </p>
        </div>
      </div>
      
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecoServices.map((service, index) => (
              <Card key={index} className="overflow-hidden border-eco-medium-green">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-eco-dark-green">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-eco-dark-green mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-eco-cream p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-eco-dark-green mb-4">Información Adicional</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Todos nuestros servicios están diseñados bajo estrictos principios de sostenibilidad.</li>
              <li>Ofrecemos paquetes personalizados que combinan diferentes servicios.</li>
              <li>Las actividades pueden reservarse con anticipación o durante tu estancia, sujetas a disponibilidad.</li>
              <li>Consulta nuestras tarifas especiales para huéspedes del hotel.</li>
              <li>Solicita información sobre servicios adicionales en la recepción del hotel.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
