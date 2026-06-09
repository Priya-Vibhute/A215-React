import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div>
      <h1>ProductDetails {id}</h1>

      {product && (
        <div>
          <img src={product.image} />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
