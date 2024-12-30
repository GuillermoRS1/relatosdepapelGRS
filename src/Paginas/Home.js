import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import books from '../Datos/Libros';

const MainPage = () => {
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Catálogo de Libros</h1>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="home-page__books">
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title}
            <Link to={`/book/${book.id}`}>Ver Detalles</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
