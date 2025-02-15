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
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Suppliers" element={<Suppliers/>} />
      <Route path='/supplier/:id' element={<SupplierPage />} />
      <Route path="/Register" element={<Signup/>} />
      <Route path="/signup-success" element={<SignupSuccess />} />
    </Routes>
  );
}

export default App
