import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/HomePage'
import Suppliers from './pages/Suppliers'
import SupplierPage from './pages/SupplierPage'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import SignupSuccess from './pages/SignupSuccess'
import Login from './Components/Login'
import Dashboard from './pages/Dashboard'
import Overview from './pages/Overview'
import Profile from './pages/Profile'
import Quotes from './pages/Quotes'
import Meetings from './pages/Meetings'
import Analytics from './pages/Analytics'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Suppliers" element={<Suppliers/>} />
      <Route path='/supplier/:id' element={<SupplierPage />} />
      <Route path="/Register" element={<Signup/>} />
      <Route path="/signup-success" element={<SignupSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path='quotes' element={<Quotes />} />
          <Route path='meetings' element={<Meetings/>} />
          <Route path='analytics' element={<Analytics />} />
        </Route>
     
    </Routes>
  );
}

export default App
