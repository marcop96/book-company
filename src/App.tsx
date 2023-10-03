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

  //states
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [favorites, setFavorites] = useState<Book[]>([]);

  //handlers
  const selectedBookHandler = (book: Book) => {
    setSelectedBook(book);
  };

  const favoritesHandler = (book: Book) => {
    if (favorites.some((favorite: any) => favorite.title === book.title)) {
      setFavorites((favorites) =>
        favorites.filter((f) => f.title !== book.title)
      );
      console.log("entra en if");
    } else {
      console.log("no entra en if");
      setFavorites((favorites) => [...favorites, book]);
    }
  };

  return (
    <>
      <div className="min-w-screen h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="flex flex-col-reverse sm:flex-row ">
          <pre>{favorites.length}</pre>
          <section className="grid grid-cols-2 w-1/2  gap-4  my-4  sm:grid-cols-3 lg:grid-cols-4">
            {bookList.map((book) => {
              return (
                <BookCovers
                  key={book.ISBN}
                  book={book}
                  onClick={selectedBookHandler}
                  favoritesHandler={favoritesHandler}
                  favorites={favorites}
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
