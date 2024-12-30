import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Hooks/usarCarrito';
import LandingPage from './Paginas/LandingP';
import MainPage from './Paginas/Home';
import BookDetail from './Paginas/DetallesLibros';
import Checkout from './Paginas/Checkout';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header/>
        <main class="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
