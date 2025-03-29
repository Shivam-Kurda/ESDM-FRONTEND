import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Header from '../Components/Header';
// import Profile from './Profile';
// Import other page components

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white p-4 shadow">
          <Header />
        </header>
        <div className="flex">
          <Sidebar/>
          <div className="flex-1 bg-white p-4">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default Dashboard;