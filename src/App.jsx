import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ubiquitous-acorn-g479ggjv6x5g2jp-5001.app.github.dev/books");

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const result = await response.json();
        setbook(result.books);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const bookList = book.map((b, idx) => (
    <div className="book-card" key={b.id || idx}>
      <img className="book-image" src={b.image_url} alt={b.title} />
      <h2 className="book-title">{b.title}</h2>
      <p className="book-author">by {b.auther}</p>
      <p className="book-price">${b.price}</p>
    </div>
  ));

  console.log(book);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Anime Ebook</h1>
        <p className="tagline">Discover your next favorite read</p>
      </header>
      <div className="book-grid">
        {bookList}
      </div>
    </div>
  );
}

export default App;