// src/Header.js
import React from 'react';
import LoginButton from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="ESDM Logo" className="w-10 h-10" />
          {/* <span className="text-xl font-bold text-gray-800">ESDM</span> */}
          <Link to="/" className="text-gray-700 hover:text-black font-bold">ESDM HELPER</Link>
        </div>
        <SearchBar />
        <div className="flex items-center space-x-4">
          {/* <button className="text-gray-700">Login</button> */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <LogoutButton />
              <Link
                to="/dashboard"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
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
      <nav className="flex justify-center space-x-6 border-t border-gray-200 py-2">
        <a href="#" className="text-gray-700 hover:text-blue-500">Products & Components</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Manufacturers & Suppliers</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Build Your Product</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">How To Buy</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">How To Sell</a>
      </nav>
    </header>
  );
};

export default Header;