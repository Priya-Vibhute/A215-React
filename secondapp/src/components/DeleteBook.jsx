import React from 'react'

function DeleteBook() {
  return (
    <div>
      <div class="container mt-5">
        <div class="card border-danger shadow">
          <div class="card-header bg-danger text-white">
            <h3 class="mb-0">Delete Book</h3>
          </div>

          <div class="card-body">
            <p class="fs-5">Are you sure you want to delete this book?</p>

            <table class="table table-bordered">
              <tr>
                <th width="30%">Title</th>
                <td>The Great Gatsby</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>F. Scott Fitzgerald</td>
              </tr>
              <tr>
                <th>Genre</th>
                <td>Classic Fiction</td>
              </tr>
              <tr>
                <th>Published Year</th>
                <td>1925</td>
              </tr>
              <tr>
                <th>ISBN</th>
                <td>978-0743273565</td>
              </tr>
            </table>

            <form action="/books/delete/1" method="post">
              <button type="submit" class="btn btn-danger">
                Yes, Delete
              </button>

              <a href="/books" class="btn btn-secondary">
                Cancel
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook