import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../Components/Login';
import { useAuth0 } from "@auth0/auth0-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    country: '',
    company: '',
    firstname: '',
    lastname: ''

  });
  const { loginWithRedirect } = useAuth0();
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const closePopup = () => {
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/auth/register', formData);

      setMessage(response.data.message);
      navigate('/signup-success');
    } catch (error) {
      console.error(error.response?.data?.message );
      // window.alert(`Error during registration: ${error.response?.data?.message}` );
      setErrorMessage(`Error during registration: ${error.response?.data?.message}`);
      // setMessage('Error during registration.');
    }
    
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <div className='bg-blue-100 w-full h-full p-5 rounded-lg'>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Get Started with ESDM Helper</h1>
        
          <p className="text-gray-700 mb-6">
            Get Started Now. It's Free!
          </p>
        </div>
        <p className="text-gray-700 mb-6">
          Already have an account? 
          <button
  className="bg-white font-bold underline text-black-500 px-4 py-2 rounded hover:underline transition-colors duration-300 cursor-pointer"
  onClick={() => loginWithRedirect()}
>
  Log In
</button>
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Work email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example: jane.doe@esdmhelper.com"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
          >
            Create an account
          </button>
        </form>
        {errorMessage && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center">
          <span>{errorMessage}</span>
          <button
            onClick={closePopup}
            className="ml-4 bg-white text-red-500 rounded-full p-1 hover:bg-gray-200"
          >
            &times;
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default RegistrationForm;