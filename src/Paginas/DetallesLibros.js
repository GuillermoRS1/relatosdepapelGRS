import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Hooks/usarCarrito';
import books from '../Datos/Libros';



const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Libro no encontrado</p>;

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div id= 'detalles'>
      <h1>{book.title}</h1>
      <p><strong>Descripcion:</strong> {book.description}</p>
      <p><strong>Autor: </strong>{book.author}</p>
      <p><strong>Precio: </strong> ${book.price}</p>
      {book.stock > 0 ? (
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      ) : (
        <p className="home-page__out-of-stock">Sin stock</p>
      )}
    </div>
  );
};

export default BookDetail;
