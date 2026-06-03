import React, { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    const response = await axios.get("https://dummyjson.com/quotes");
    setQuotes(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container p-3 m-5 border border-dark">
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
            quotes.quotes.map((q) => (
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
