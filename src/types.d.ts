export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Author {
  name: string;
  otherBooks: string[];
}

export interface BooksCoverProps {
  book: Book;
  onClick: (book: Book) => void;
  favoritesHandler: (book: Book) => void;
  favorites: Book[];
}

declare module "*.json" {
  const value: Book[];
  export default value;
}
