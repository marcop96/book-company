import React from "react";
import BookCovers from "./BookCovers";
import books from "../data/Bookdata.json";

import { Book } from "../types";

interface BookRendererProps {
  favorites: Book[];
  setFavorites: React.Dispatch<React.SetStateAction<Book[]>>;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
  activePage: string;
}

const BookRenderer: React.FC<BookRendererProps> = ({
  favorites,
  setFavorites,
  setSelectedBook,
  activePage,
}) => {
  // Map and transform data
  const bookList: Book[] = books.library.map((item: { book: Book }) => {
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

  // Handlers
  const selectedBookHandler = (book: Book) => {
    setSelectedBook(book);
  };

  const favoritesHandler = (book: Book) => {
    if (favorites.some((favorite) => favorite.title === book.title)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((f) => f.title !== book.title)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, book]);
    }
  };

  return (
    <section className="grid grid-cols-2 w-1/2  gap-4  my-4  sm:grid-cols-3 lg:grid-cols-4 ">
      {activePage === "home" &&
        bookList.map((book: Book) => (
          <BookCovers
            key={book.ISBN}
            book={book}
            onClick={selectedBookHandler}
            favoritesHandler={favoritesHandler}
            favorites={favorites}
          />
        ))}

      {activePage === "favorites" && (
        <>
          {favorites.map((book: Book) => (
            <BookCovers
              key={book.ISBN}
              book={book}
              onClick={selectedBookHandler}
              favoritesHandler={favoritesHandler}
              favorites={favorites}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default BookRenderer;
