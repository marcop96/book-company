import { Book } from "../types";
interface BooksCoverProps {
  book: Book;
  onClick: (book: Book) => void;
}
export default function BooksCover({ book, onClick }: BooksCoverProps) {
  function selectedBookHandler(book: Book) {
    onClick(book);
  }
  return (
    <>
      <div
        className="border-2 border-black "
        onClick={() => selectedBookHandler(book)}
      >
        <img className="w-full h-full" src={book.cover} alt={book.title} />
      </div>
    </>
  );
}
