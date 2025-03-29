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
  const [products, setProducts] = useState([]);

  const handleCertificationsClick = () => {
    // Navigate to certifications page
  };

  const handleProductsClick = () => {
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
  };

  const handleProductModalClose = () => {
    setIsProductModalOpen(false);
  };

  const handleSave = (data) => {
    // Save the company data to backend
    console.log('Company data saved:', data);
  };

  const handleProductSave = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    console.log('Product added:', newProduct);
  };

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
          content={<p>Details about products and services.</p>}
          linkText="Edit"
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
      <ProductForm isOpen={isProductModalOpen} onClose={handleProductModalClose} onSave={handleProductSave} />
    </div>
  );
};

export default Profile;