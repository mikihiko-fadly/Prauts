import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Filter from '../Components/Filter';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
    setFilteredProducts(savedProducts);
  }, []);

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const editProduct = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const filterProducts = (color) => {
    if (color === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.color === color);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      <Filter filterProducts={filterProducts} />
      <Link to="/products/new">
        <button>Add Product</button>
      </Link>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;