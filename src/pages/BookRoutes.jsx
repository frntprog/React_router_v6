import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import BookLayout from "../BookLayout";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
