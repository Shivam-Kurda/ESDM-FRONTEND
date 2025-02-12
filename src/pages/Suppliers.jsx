import React from 'react'
import '../styles.css'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import {Link} from 'react-router-dom'
import { useState } from 'react'
function Suppliers() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  const suppliersData = [
    {
      id:0,
      name: 'Tejas Networks',
      country: 'India',
      products: ['PCB Design', 'PCB Manufacturing', 'PCB Assembly'],

      image: 'link-to-image-1',
      product: 'Tomato from India',
      
    },
    {
      id:1,
      name: 'Dixon Technologies',
      country: 'India',
      products: ['PCB Assembly'],

      image: 'link-to-image-2',
      product: 'Fresh Whole Tomato',
    },
    {
      id:2,
      name: 'Bharat Electronics Limited',
      country: 'Egypt',
      products: ['PCB Manufactruing', 'PCB Assembly'],

      image: 'link-to-image-3',
      product: 'Fresh Tomato',
    },

    
    // Add more suppliers as needed
  ];
  const allProducts = Array.from(new Set(suppliersData.flatMap(supplier => supplier.products)));

  const filteredSuppliers = selectedProduct
    ? suppliersData.filter(supplier =>
      supplier.products.includes(selectedProduct)
    )
    : suppliersData;

  const filteredProducts = allProducts.filter(product =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setSearchTerm('');
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredProducts={filteredProducts}
          onSelectProduct={handleSelectProduct}
        />
        <h2 className="text-xl font-bold mb-4">{filteredSuppliers.length} results</h2>
        <h3 className="text-lg font-bold text-left border-b border-black">
          {selectedProduct}</h3>
        <div className="grid grid-cols-3 gap-4">
          {filteredSuppliers.map((supplier, index) => (
            <Link to={`/supplier/${supplier.id}`} key={supplier.id}>
            <div key={index} className="bg-white p-4 rounded shadow">
              <img src={supplier.image} alt={supplier.name} className="w-full h-32 object-cover mb-4" />
              <h3 className="text-lg font-bold">{supplier.name}</h3>
              <p className="text-sm text-gray-600">{supplier.country} • Trade</p>
              <p className="text-sm mt-2">Products: {supplier.products.join(', ')}</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm">{supplier.product}</span>
                <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded">Contact Now</button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Suppliers
