
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/habitaciones" element={<Rooms />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/reserva" element={<Reservation />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
