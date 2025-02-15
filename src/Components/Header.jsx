// src/Header.js
import React from 'react';
import LoginButton from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';
import { Link } from 'react-router-dom';
const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-black font-bold">ESDM HELPER</Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/suppliers" className="text-gray-700 hover:text-black font-bold">Find Suppliers</Link>
            <a href="#" className="text-gray-700 hover:text-black font-bold">Find Buyers</a>
            <a href="#" className="text-gray-700 hover:text-black font-bold">Insights</a>
            <a href="#" className="text-gray-700 hover:text-black font-bold">Market Overviews</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-black font-semibold hover:font-bold hover:text-gray-700">
            <i className="fas fa-search"></i>
          </button>
          <button className="text-black font-semibold hover:font-bold hover:text-gray-700">
            <i className="fas fa-bookmark"></i>
          </button>
          <button className="text-black font-semibold hover:font-bold hover:text-gray-700">
            <i className="fas fa-globe"></i> EN
          </button>
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <div className="flex space-x-4">
              <LoginButton />
              <Link
                to="/Register"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;