
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'standard',
    guests: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to the server
    alert("Reservación enviada. Nos pondremos en contacto contigo pronto.");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-vh-100">
      <Navbar />
      <div className="pt-5 mt-5 pb-4" style={{ backgroundColor: 'rgba(151, 188, 98, 0.2)' }}>
        <div className="container px-4">
          <h1 className="display-4 fw-bold text-center mb-3" style={{ color: 'var(--eco-dark-green)', fontFamily: 'Playfair Display, serif' }}>
            Reserva tu Estadía
          </h1>
          <p className="text-center text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Completa el formulario a continuación para reservar tu experiencia en nuestro eco lodge. Te contactaremos para confirmar tu reserva.
          </p>
        </div>
      </div>
      
      <div className="py-5 px-4">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card border-success">
            <div className="card-header bg-white">
              <h2 className="card-title h4" style={{ color: 'var(--eco-dark-green)' }}>Formulario de Reserva</h2>
              <p className="card-text text-secondary small">Todos los campos marcados con * son obligatorios.</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="fullName" className="form-label">Nombre completo *</label>
                  <input 
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input 
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Teléfono *</label>
                  <input 
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="roomType" className="form-label">Tipo de habitación *</label>
                  <select
                    className="form-select"
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                  >
                    <option value="standard">Estándar - Vista al Bosque</option>
                    <option value="superior">Superior - Vista a la Montaña</option>
                    <option value="deluxe">Deluxe - Cerca del Río</option>
                  </select>
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="checkIn" className="form-label">Fecha de llegada *</label>
                  <input 
                    type="date"
                    className="form-control"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="checkOut" className="form-label">Fecha de salida *</label>
                  <input 
                    type="date"
                    className="form-control"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="col-md-12">
                  <label htmlFor="guests" className="form-label">Número de huéspedes *</label>
                  <input 
                    type="number"
                    className="form-control"
                    id="guests"
                    name="guests"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="col-12">
                  <label htmlFor="specialRequests" className="form-label">Peticiones especiales</label>
                  <textarea 
                    className="form-control"
                    id="specialRequests"
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Alergias, preferencias dietéticas, solicitudes específicas..."
                  ></textarea>
                </div>
                
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-success w-100">
                    Enviar Solicitud de Reserva
                  </button>
                  
                  <p className="text-secondary small mt-3">
                    Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio. Te enviaremos un correo electrónico de confirmación una vez procesada tu solicitud.
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-5 p-4 rounded shadow-sm" style={{ backgroundColor: 'var(--eco-cream)' }}>
            <h2 className="fs-3 fw-semibold mb-3" style={{ color: 'var(--eco-dark-green)' }}>Información sobre Reservas</h2>
            <ul className="ps-4">
              <li className="mb-2">Horario de check-in: 15:00 hrs / Check-out: 12:00 hrs.</li>
              <li className="mb-2">Se requiere un depósito del 30% para confirmar la reserva.</li>
              <li className="mb-2">Cancelación gratuita hasta 48 horas antes de la fecha de llegada.</li>
              <li className="mb-2">Para grupos de más de 8 personas, contactar directamente por email.</li>
              <li className="mb-2">Si necesitas asistencia con tu reserva, llámanos al +123 456 7890.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Reservation;
