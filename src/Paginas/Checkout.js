import React from 'react';
import { useCart } from '../Hooks/usarCarrito';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  const handleCheckout = () => {
    alert('¡Pedido realizado con éxito!, Se han pagado $' + total);
    clearCart();
    navigate('/main');
  };

  if (cart.length === 0) return <p>No hay ningún libro en el carrito, animate...</p>;

  return (
    <div id = 'checkout'>
      <h1>Resumen del Pedido</h1>
      <ul>
        {cart.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
