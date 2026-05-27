import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Product } from "./components/Product";
import Register from "./components/Register";
import Counter from "./components/Counter";
import StateExample from "./components/StateExample";
import ArrayExample from "./components/ArrayExample";
import Book from "./components/Book";
import Employee from "./components/Employee";

function App() {
  return (
    <>
      {/* <Product />
      <Register />
      <Counter />
      <hr />
      <StateExample />
      <ArrayExample /> */}

      <Book id={101} name={"Java programming"} author={"ABC"} />
      <Book id={102} name={"Python Essentials"} author={"PQR"} />
      <Book id={103} name={"SQL"} author={"MNO"} />
      <hr />
      <Employee id={101} name={"XYZ"} salary={50000} department={"IT"} />
      <Employee
        id={102}
        name={"PNO"}
        salary={30000}
        department={"Operations"}
      />
    </>
  );
}

export default App;
