import BookCovers from "./BookCovers";
import { Book, BooksCoverProps } from "../types";
export default function FavoriteList({
  favorites,
}: {
  favorites: BooksCoverProps[] | null;
}) {
  console.log(`favolist ${favorites}`);
  return (
    <>
      {/* <BookCovers
        key={}
        book={book}
        onClick={selectedBookHandler}
        favoritesHandler={favoritesHandler}
        favorites={favorites}
      />  */}
    </>
  );
}
