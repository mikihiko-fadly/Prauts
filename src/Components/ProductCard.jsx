// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => alert(JSON.stringify(product, null, 2))}>Info</button>
      <Link to={`/products/edit/${product.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;
