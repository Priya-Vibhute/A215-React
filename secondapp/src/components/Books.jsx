import React from 'react'
import { Outlet } from 'react-router-dom'

function Books() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div class="container mt-4">
            <h2 class="mb-3">Books List</h2>

            <table class="table table-bordered table-striped">
              <thead class="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Book Title</th>
                  <th>Author</th>
                  <th>Genre</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>The Great Gatsby</td>
                  <td>F. Scott Fitzgerald</td>
                  <td>Classic Fiction</td>
                  <td>1925</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>To Kill a Mockingbird</td>
                  <td>Harper Lee</td>
                  <td>Fiction</td>
                  <td>1960</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1984</td>
                  <td>George Orwell</td>
                  <td>Dystopian</td>
                  <td>1949</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>The Hobbit</td>
                  <td>J.R.R. Tolkien</td>
                  <td>Fantasy</td>
                  <td>1937</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Atomic Habits</td>
                  <td>James Clear</td>
                  <td>Self-Help</td>
                  <td>2018</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Books