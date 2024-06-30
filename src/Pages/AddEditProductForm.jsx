// src/pages/AddEditProductForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddEditProductForm = ({ products, addProduct, editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    color: '',
    image: ''
  });

  useEffect(() => {
    if (id) {
      const productToEdit = products.find((product) => product.id === parseInt(id));
      if (productToEdit) {
        setProduct(productToEdit);
      }
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editProduct(product);
    } else {
      addProduct({ ...product, id: Date.now() });
    }
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="text"
        name="color"
        value={product.color}
        onChange={handleChange}
        placeholder="Color"
        required
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">{id ? 'Edit' : 'Add'} Product</button>
    </form>
  );
};

export default AddEditProductForm;
