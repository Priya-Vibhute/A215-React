import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setLoading(false);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          products.map((p) => (
            <div class="col">
              <div class="card">
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{p.title} <span className="text-danger">{p.id}</span></h5>
                  <p class="card-text">{p.description}</p>
                  <Link to={`/products/detail/${p.id}`}>View details</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Product;
