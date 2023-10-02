import { Book } from "../types";
type Props = {
  book: Book | undefined;
};

export default function BookDescription({ book }: Props) {
  console.log(book?.author.otherBooks);

  return book == undefined ? (
    "Select a book"
  ) : (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl self-center">{book.title}</h1>
      <span>
        <p>Year: {book.year}</p>
        <p>Author: {book.author.name}</p>
        <p>Synopsis: {book.synopsis}</p>
        <p>Pages: {book.pages}</p>
        <p>Genre: {book.genre}</p>
        <p>
          Other books from {book.author.name}:{" "}
          {book.author.otherBooks.join(", ")}
        </p>
      </span>
    </div>
  );
}
