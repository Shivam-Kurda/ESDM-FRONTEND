import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Sidebar = () => {
  
  const location = useLocation();
  const menuItems =['Overview', 'Profile', 'Quotes', 'Meetings', 'Analytics'];
  return (
    <div className="w-64 h-screen bg-gray-200 p-4">
      <div className="mb-8">
        <div className="text-lg font-bold"></div>
        <div className="text-sm text-gray-500">Supplier role</div>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <Link
              to={`/dashboard/${item.toLowerCase()}`}
              className={`block p-2 ${
                location.pathname === `/dashboard/${item.toLowerCase()}`
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-black'
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;