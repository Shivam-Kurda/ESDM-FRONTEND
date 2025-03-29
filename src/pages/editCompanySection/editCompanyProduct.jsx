import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import Modal from './Modal';

const ProductForm = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    description: '',
    specifications: '',
  });
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleProductClick = async (formData) => {
    console.log("Handle product clicked");
    try {

        // const response = await axios.post(
        //     'http://localhost:5001/database/add_ProductToCompany',
        //     {
        //         // Use formData to send dynamic data
        //         ProductName: formData.productName,
        //         Category: formData.category,
        //         Description: formData.description,
        //         Specifications: formData.specifications
        //     },
        //     {
        //         // Axios configuration object
        //         params: { userId: user.sub }, // Query parameters
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        //         },
        //     }
        // );

        // Get all product details 

        // const response = await axios.get(
        //     'http://localhost:5001/database/getAllProducts',
        //     {
                
        //         params: { userId: user.sub },
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        //         },
        //     }
        // );
        // console.log('Product updated successfully:', response.data);


        // Remove a product from products list


        const response = await axios.post(
            'http://localhost:5001/database/removeProduct',
            {
                // Use formData to send dynamic data
                ProductName: formData.productName,
            },
            {
                // Axios configuration object
                params: { userId: user.sub }, // Query parameters
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            }
        );
        console.log("Response is : ",response.data)
    } catch (error) {
        console.error('Error updating profile:', error);
    }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProductClick(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Product Name</label>
          <input
            type="text"
            name="productName"
            className="border p-2 w-full"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold">Category</label>
          <input
            type="text"
            name="category"
            className="border p-2 w-full"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            className="border p-2 w-full"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold">Specifications</label>
          <textarea
            name="specifications"
            className="border p-2 w-full"
            value={formData.specifications}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </Modal>
  );
};

export default ProductForm;