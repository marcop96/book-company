import "./App.css";
import NavBar from "./components/NavBar";
import BookCovers from "./components/BookCovers";
import BookDescription from "./components/BookDescription";
import { useState } from "react";
import { Book } from "./types";

import books from "../src/data/bookdata.json";

function App() {
  const bookList = books.library.map((item) => {
    const {
      title,
      pages,
      genre,
      cover,
      synopsis,
      year,
      ISBN,
      author: { name, otherBooks },
    } = item.book;

    return {
      title,
      pages,
      genre,
      cover,
      synopsis,
      year,
      ISBN,
      author: {
        name,
        otherBooks,
      },
    };
  });

  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [favorites, setFavorites] = useState<Book[]>([]);
  const selectedBookHandler = (book: Book) => {
    setSelectedBook(book);
  };

  const addToFavoritesHandler = (book: Book) => {
    if (favorites.some((favorite) => favorite.ISBN === book.ISBN)) {
      return;
    }

    setFavorites((favorites) => [...favorites, book]);
  };

  return (
    <>
      <div className="min-w-screen h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="flex flex-col-reverse sm:flex-row ">
          {favorites.length}
          <section className="grid grid-cols-2 w-1/2  gap-4  my-4  sm:grid-cols-3 lg:grid-cols-4">
            {bookList.map((book) => {
              return (
                <BookCovers
                  key={book.ISBN}
                  book={book}
                  onClick={selectedBookHandler}
                  addToFavorites={addToFavoritesHandler}
                />
              );
            })}
          </section>
          <section className="ml-3 w-1/2">
            <BookDescription book={selectedBook} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
