import React from "react";

function Book({ id, name, author }) {
  return (
    <div>
      <h1> Book Details</h1>
      <ul>
        <li>Id is {id}</li>
        <li>Book name {name}</li>
        <li>Author{author}</li>
      </ul>
    </div>
  );
}

export default Book;
