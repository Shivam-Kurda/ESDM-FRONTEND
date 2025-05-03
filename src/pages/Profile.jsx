import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import EditCompanyProfile from './editCompanySection/editCompanyProfile';
import ProductForm from './editCompanySection/editCompanyProduct';
import Card from '../Components/Card';

const Profile = () => {
  const { user } = useAuth0();
  const [metadata, setMetadata] = useState(null);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [prodData, setProddata] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const handleCertificationsClick = () => {
    // Navigate to certifications page
  };

  const handleProductsClick = () => {
    setEditingProduct(null); // Reset editing product when opening the modal
    setIsProductModalOpen(true); // Open product modal
  };

  const handleOrdersClick = () => {
    // Navigate to orders page
  };

  const handleEditClick = () => {
    setIsCompanyModalOpen(true); // Open company modal

  };

  const handleCompanyModalClose = () => {
    setIsCompanyModalOpen(false);
     // Reset editing product when closing the modal
  };

  const handleProductModalClose = () => {
    setIsProductModalOpen(false);
    setEditingProduct(null);
  };

  const handleSave = (data) => {
    // Save the company data to backend
    console.log('Company data saved:', data);
  };

  const handleProductSave = (newProduct) => {
    setProddata((prev) => [...prev, newProduct]);
    console.log('Product added:', newProduct);
  };
  const handleRemoveProduct = async (productName, index) => {
    try {
      // Make a POST request to remove the product from the backend
      console.log(productName)
      await axios.post(`http://localhost:5001/database/removeProduct`,
        { ProductName: productName }, // Request body
        {
          params: { userId: user.sub }, // Query parameter
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Update the state to remove the product from the list
      setProddata((prev) => prev.filter((_, i) => i !== index));
      console.log(`Product with name ${productName} removed`);
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };
  
  // const handleEditProduct = (product, index) => {
  //   // Open the product modal with the product data
  //   setEditingProduct(product);
  //   setIsProductModalOpen(true);
  //   // setEditingProduct({ ...product, index });
    
  //   console.log('Editing product:', editingProduct);
  // }
  const handleEditProduct = (product) => {
    setEditingProduct( {...product} );
  };
  useEffect(() => {
    if (editingProduct) {
      console.log('Now editing:', editingProduct);
      setIsProductModalOpen(true);
    }
  }, [editingProduct]);
  useEffect(() => {
    const fetchUserMetadata = async () => {
      try {
        const response = await axios.get('http://localhost:5001/auth/fetch-metadata', {
          params: { userId: user.sub },
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setMetadata(response.data);
        const prod_resp = await axios.get('http://localhost:5001/database/getAllProducts', {
          params: { userId: user.sub },
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        setProddata(prod_resp.data);
        console.log('Prod data:', prod_resp.data);

      } catch (error) {
        console.error('Error fetching user metadata:', error);
      }
    };

    if (user) {
      fetchUserMetadata();
    }
  }, [user]);
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Certifications"
          content={<p>There are no certifications to be shown yet.</p>}
          linkText="Add"
          onLinkClick={handleCertificationsClick}
        />
        <Card
          title="Products & Services"
          content={
            <div className="max-h-40 overflow-y-auto text-left">
              {prodData.length > 0 ? (
                <ul>
                  {prodData.map((product, index) => (
                    <li key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
                      <h4 className="font-bold">{product.ProductName}</h4>
                      <p>{product.description}</p>
                      <p><span className="font-semibold">Category:</span> {product.Category}</p>
                      <p><span className="font-semibold">Specifications:</span> {product.Specifications}</p>
                      <div className="flex gap-4 mt-2">
                        <button
                          onClick={() => handleRemoveProduct(product.ProductName, index)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No products available</p>
              )}
            </div>
          }
          linkText="Add"
          onLinkClick={handleProductsClick} // Open product modal
        />
        <Card
          title="Orders"
          content={<p>Recent orders and status.</p>}
          linkText="See All"
          onLinkClick={handleOrdersClick}
        />
        <Card
          title="Profile"
          content={
            metadata ? (
              <div className="text-left">
                <p>Company: {metadata.company}</p>
                <p>Country: {metadata.country}</p>
                <p>First Name: {metadata.firstname}</p>
                <p>Last Name: {metadata.lastname}</p>
                <p>Company Email: {metadata.companyemail}</p>
                <p>Company Website: {metadata.companyWebsite}</p>
                <p>Incorporation Date: {metadata.incorporationDate}</p>
                <p>CIN: {metadata.cin}</p>
                <p>Tax Number: {metadata.taxNumber}</p>
                <EditCompanyProfile isOpen={isCompanyModalOpen} onClose={handleCompanyModalClose} onSave={handleSave} />
              </div>
            ) : (
              <p>Loading...</p>
            )
          }
          linkText="Edit Profile"
          onLinkClick={handleEditClick} // Open company modal
        />
      </div>
      <ProductForm
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onSave={handleProductSave}
        editingProduct={editingProduct}
      />
    </div>
  );
};

export default Profile;