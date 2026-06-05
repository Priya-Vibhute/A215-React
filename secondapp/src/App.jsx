import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Effect1 from "./components/Effect1";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./components/Product";
import Quote from "./components/Quote";
import Uncontrolled from "./components/Uncontrolled";
import Controlled from "./components/Controlled";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import A from "./components/A";
import M from "./components/M";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "effect",
        element: <Effect1 />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "quotes",
        element: <Quote />,
      },
      {
        path: "uncontrolled",
        element: <Uncontrolled />,
      },
      {
        path: "controlled",
        element: <Controlled />,
      },
      {
        path: "form-handling-1",
        element: <Form1 />,
      },
      {
        path: "form-handling-2",
        element: <Form2 />,
      },
      {
        path: "prop-drilling",
        element: <A />,
      },
      {
        path: "context-example",
        element: <M />,
      },
    ], 
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
