
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100" style={{ zIndex: 50 }}>
      <div className="container">
        <Link className="navbar-brand fs-4 fw-bold" to="/" style={{ fontFamily: 'Playfair Display, serif' }}>
          Eco Lodge
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/habitaciones" onClick={() => setIsOpen(false)}>Habitaciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria" onClick={() => setIsOpen(false)}>Galería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-outline-light" to="/reserva" onClick={() => setIsOpen(false)}>
                Reservar Ahora
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
