import "./App.css";
import NavBar from "./components/NavBar";
import BookDescription from "./components/BookDescription";
import { useState } from "react";
import BookRenderer from "./components/BookRenderer";
import { Book } from "./types";

function App() {
  //states
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [favorites, setFavorites] = useState<Book[]>([]);

  const [activePage, setActivePage] = useState("home");

  const activePageHandler = (page: string) => {
    setActivePage(page);
  };
  return (
    <>
      <div className="min-w-screen h-screen">
        <header className="">
          <NavBar favorites={favorites} onClick={activePageHandler} />
        </header>

        <main className="flex flex-col-reverse sm:flex-row ">
          <BookRenderer
            setSelectedBook={setSelectedBook}
            setFavorites={setFavorites}
            favorites={favorites}
            activePage={activePage}
          />

          <section className="ml-3 w-1/2">
            <BookDescription book={selectedBook} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
