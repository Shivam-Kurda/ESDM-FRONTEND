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
          <Link to ="/" className="text-gray-700 hover:text-black font-bold">ESDM HELPER</Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/suppliers" className="text-gray-700 hover:text-black">Find Suppliers</Link>
            <a href="#" className="text-gray-700 hover:text-black">Find Buyers</a>
            <a href="#" className="text-gray-700 hover:text-black">Insights</a>
            <div className="relative">
              <button className="text-gray-700 hover:text-black">Data & Analytics</button>
              {/* Dropdown menu can be added here */}
            </div>
            <a href="#" className="text-gray-700 hover:text-black">Market Overviews</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-search"></i>
          </button>
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-bookmark"></i>
          </button>
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-globe"></i> EN
          </button>
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;