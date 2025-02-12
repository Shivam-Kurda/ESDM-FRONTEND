import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/HomePage'
import Suppliers from './pages/Suppliers'
import SupplierPage from './pages/SupplierPage'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Suppliers" element={<Suppliers/>} />
      <Route path='/supplier/:id' element={<SupplierPage />} />
    </Routes>
  );
}

export default App
