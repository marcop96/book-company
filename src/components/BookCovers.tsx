import { Book } from "../types";
interface BooksCoverProps {
  book: Book;
  onClick: (book: Book) => void;
  addToFavorites: (book: Book) => void;
}
export default function BooksCover({
  book,
  onClick,
  addToFavorites,
}: BooksCoverProps) {
  function selectedBookHandler(book: Book) {
    onClick(book);
  }

  function addToFavoritesHandler(book: Book) {
    addToFavorites(book);
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
        <p className="text-center " onClick={() => addToFavoritesHandler(book)}>
          add to favorites
        </p>
      </div>
    </>
  );
}
