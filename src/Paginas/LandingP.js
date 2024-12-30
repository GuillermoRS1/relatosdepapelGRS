import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Te redirigiremos a la página principal en 5 segundos...</p>
    </div>
  );
};

export default LandingPage;
