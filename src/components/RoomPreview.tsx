
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const rooms = [
  {
    title: "Cabaña Bosque",
    description: "Inmersa entre árboles, perfecta para conectar con la naturaleza.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    price: "150"
  },
  {
    title: "Suite Montaña",
    description: "Vistas panorámicas de las montañas con terraza privada.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: "200"
  },
  {
    title: "Bungalow Río",
    description: "A orillas del río, con sonidos naturales para relajarte.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    price: "180"
  }
];

const RoomPreview = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-eco-medium-green bg-opacity-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark-green mb-4 font-playfair">
            Nuestras Habitaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diseñadas para brindar confort mientras te mantienes conectado con la belleza natural de nuestro entorno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-eco-dark-green">{room.title}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-eco-dark-green">${room.price}</span>
                  <span className="text-gray-500 ml-1">/noche</span>
                </div>
                <Button className="bg-eco-dark-green hover:bg-eco-medium-green text-white">
                  Ver Detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-eco-dark-green text-eco-dark-green hover:bg-eco-dark-green hover:text-white">
            Ver Todas las Habitaciones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomPreview;
