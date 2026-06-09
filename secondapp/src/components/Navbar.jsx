import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/effect"}>
                useEffect Example
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={"/products"}>
                Products api
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={"/quotes"}>
                Quotes
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to={"/uncontrolled"}>
                    Uncontrolled
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/controlled"}>
                    Controlled
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/form-handling-1"}>
                    Form Handling
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/form-handling-2"}>
                    Form Handling 2
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/prop-drilling"}>
                    Prop Drilling
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/context-example"}>
                    Context
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/memoization"}>
                    memoization
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/reducer-example"}>
                    useReducer Hook
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to={"/reducer-example-2"}>
                    useReducer Hook
                  </Link>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
