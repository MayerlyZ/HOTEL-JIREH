
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 py-2 md:py-4 md:px-8">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white flex items-center">
          <span className="text-xl md:text-2xl font-bold font-playfair tracking-wider">Eco Lodge</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-eco-cream transition-colors">Inicio</Link>
          <Link to="/habitaciones" className="text-white hover:text-eco-cream transition-colors">Habitaciones</Link>
          <Link to="/servicios" className="text-white hover:text-eco-cream transition-colors">Servicios</Link>
          <Link to="/galeria" className="text-white hover:text-eco-cream transition-colors">Galería</Link>
          <Link to="/contacto" className="text-white hover:text-eco-cream transition-colors">Contacto</Link>
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-eco-dark-green">
            Reservar Ahora
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-eco-dark-green bg-opacity-95 absolute top-full left-0 w-full py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-eco-cream transition-colors" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/habitaciones" className="text-white hover:text-eco-cream transition-colors" onClick={() => setIsOpen(false)}>Habitaciones</Link>
            <Link to="/servicios" className="text-white hover:text-eco-cream transition-colors" onClick={() => setIsOpen(false)}>Servicios</Link>
            <Link to="/galeria" className="text-white hover:text-eco-cream transition-colors" onClick={() => setIsOpen(false)}>Galería</Link>
            <Link to="/contacto" className="text-white hover:text-eco-cream transition-colors" onClick={() => setIsOpen(false)}>Contacto</Link>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-eco-dark-green w-full">
              Reservar Ahora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
