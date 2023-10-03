import { Book } from "../types";
interface BooksCoverProps {
  book: Book;
  onClick: (book: Book) => void;
  favoritesHandler: (book: Book) => void;
  favorites: Book[];
}
export default function BooksCover({
  book,
  onClick,
  favoritesHandler,
  favorites,
}: BooksCoverProps) {
  function selectedBookHandler(book: Book) {
    onClick(book);
  }

  function checkFavorites(book: Book) {
    favoritesHandler(book);
  }

  return (
    <>
      <div className="mb-2">
        <img
          className="w-full h-full"
          src={book.cover}
          alt={book.title}
          onClick={() => selectedBookHandler(book)}
        />

        {!favorites.some((favorite) => favorite.ISBN === book.ISBN) ? (
          <p className="text-center " onClick={() => checkFavorites(book)}>
            add
          </p>
        ) : (
          <p className="text-center" onClick={() => checkFavorites(book)}>
            {" "}
            remove
          </p>
        )}
      </div>
    </>
  );
}
