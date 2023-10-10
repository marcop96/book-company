import NavBar from "./components/NavBar";
import BookDescription from "./components/BookDescription";
import BookRenderer from "./components/BookRenderer";
import { Book } from "./types";
import { useState } from "react";
function App() {
  // States
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [activePage, setActivePage] = useState("home");

  // Handler to change active page
  const activePageHandler = (page: string) => {
    setActivePage(page);
  };

  // Conditional rendering based on activePage
  let content;

  if (
    activePage === "home" ||
    (activePage === "favorites" && favorites.length > 0)
  ) {
    content = (
      <main className="flex flex-col-reverse sm:flex-row">
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
    );
  } else if (activePage === "favorites" && favorites.length === 0) {
    content = <h1 className="text-3xl font-semibold mb-4">No Favorites</h1>;
  } else if (activePage === "about") {
    content = (
      <main>
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">
            About Our Book Website
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to our book website! We are passionate about books and want
            to provide a great reading experience for book lovers like you.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our mission is to connect readers with their favorite books and
            introduce them to new literary adventures. We believe that books
            have the power to inspire, educate, and entertain, and we're
            dedicated to helping you discover your next great read.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg leading-relaxed mb-2">
              <strong>Book Catalog:</strong> Explore a wide range of books
              across different genres.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Book Details:</strong> Click on a book to view its
              details, including the title, author, cover, and synopsis.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Favorites:</strong> Add your favorite books to your
              favorites list and easily access them later.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Navigation:</strong> Use the navigation bar to switch
              between the home page, favorites, and the about page.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            If you have any questions or feedback, please feel free to reach out
            to us. We value your input and are always looking for ways to
            improve your experience on our website.
          </p>
        </div>
      </main>
    );
  } else {
    // Handle other pages or invalid page names
    content = (
      <main>
        <h1>Page Not Found</h1>
        <p>The requested page does not exist.</p>
      </main>
    );
  }

  return (
    <>
      <div className="min-w-screen h-screen">
        <header>
          <NavBar favorites={favorites} onClick={activePageHandler} />
        </header>
        {content}
      </div>
    </>
  );
}

export default App;
