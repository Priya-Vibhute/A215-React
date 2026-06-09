import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Quote() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams,setSearchParams]=useSearchParams();

  const fetchQuotes = async () => {
    const response = await axios.get("https://dummyjson.com/quotes");
    setQuotes(response.data.quotes);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const author=searchParams.get("author")

  const filteredQuotes= author ? quotes.filter(q=>q.author==author) :quotes;

  return (
    <div className="container p-3 m-5 border border-dark">
      <button
        className="btn btn-primary m-3"
        onClick={() => setSearchParams({ author: "Rumi" })}
      >
        Rumi
      </button>

      <button
        className="btn btn-primary m-3"
        onClick={() => setSearchParams({ author: "Albert Einstein" })}
      >
        Albert Einstein
      </button>

      <button
        className="btn btn-primary m-3"
        onClick={() => setSearchParams({})}
      >
        All quotes
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">quote</th>
            <th scope="col">author</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p>Loading ......</p>
          ) : (
            filteredQuotes.map((q) => (
              <tr>
                <td>{q.id}</td>
                <td>{q.quote}</td>
                <td>{q.author}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Quote;
