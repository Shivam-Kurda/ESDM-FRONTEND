import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Sidebar = () => {
  const location = useLocation();
  const menuItems = ['Overview', 'Profile', 'Quotes', 'Meetings', 'Analytics'];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full py-6 px-4">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">Supplier role</div>
      </div>
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === `/dashboard/${item.toLowerCase()}`;
          return (
            <li key={item}>
              <Link
                to={`/dashboard/${item.toLowerCase()}`}
                className={`block px-4 py-2 rounded-full transition-colors font-medium text-sm ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Sidebar;