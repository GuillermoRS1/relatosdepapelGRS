import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1>Relatos de Papel</h1>
        <ul>
          <li>
            <Link to="/main">Inicio</Link>
          </li>
          <li>
            <Link to="/checkout">Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
