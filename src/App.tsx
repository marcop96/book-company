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

  const selectedBookHandler = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <div className="min-w-screen h-screen">
        <header className="">
          <NavBar />
        </header>
        <main className="flex ">
          <section className="grid grid-cols-2 w-1/2  gap-4  ml-2 mt-3  sm:grid-cols-3 lg:grid-cols-4">
            {bookList.map((book) => {
              return (
                <BookCovers
                  cover={book.cover}
                  alt={book.title}
                  key={book.ISBN}
                  info={book}
                  onClick={selectedBookHandler}
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
