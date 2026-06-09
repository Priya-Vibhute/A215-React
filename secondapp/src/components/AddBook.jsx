import React from 'react'

function AddBook() {
  return (
    <div class="container mt-5">
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Add New Book</h3>
        </div>

        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Book Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter book title"/>
                </div>

                <div class="mb-3">
                    <label for="author" class="form-label">Author</label>
                    <input type="text" class="form-control" id="author" placeholder="Enter author name"/>
                </div>

                <div class="mb-3">
                    <label for="genre" class="form-label">Genre</label>
                    <select class="form-select" id="genre">
                        <option selected>Select genre</option>
                        <option>Fiction</option>
                        <option>Fantasy</option>
                        <option>Science Fiction</option>
                        <option>Biography</option>
                        <option>Self-Help</option>
                        <option>History</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="publishedYear" class="form-label">Published Year</label>
                    <input type="number" class="form-control" id="publishedYear" placeholder="e.g. 2024"/>
                </div>

                <div class="mb-3">
                    <label for="isbn" class="form-label">ISBN</label>
                    <input type="text" class="form-control" id="isbn" placeholder="Enter ISBN"/>
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" placeholder="Book description"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                    Save Book
                </button>
                <button type="reset" class="btn btn-secondary">
                    Reset
                </button>
            </form>
        </div>
    </div>
</div>

  )
}

export default AddBook