import { Route, Routes, Link, useRoutes } from "react-router-dom";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";
import BookRoutes from "./pages/BookRoutes";

function App() {
  // let elements = useRoutes([
  //   {
  //     path: "/",
  //     elements: <Home />,
  //   },
  //   { path: "*", element: <NotFound /> },
  // ]);
  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>Extra content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {/* {elements} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />}></Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
      </Routes>
    </>
  );
}

export default App;
