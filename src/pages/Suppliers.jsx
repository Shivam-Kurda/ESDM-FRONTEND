import React from 'react'
import '../styles.css'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Suppliers() {
  const { productName } = useParams();
  const [suppliers, setSuppliers] = useState([]);
  const ProductName = productName;

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        let response;
        if (productName) {
          response = await axios.get(
            `http://127.0.0.1:5001/database/getCompanies_Product?ProductName=${encodeURIComponent(ProductName)}`
          );
        } else {
          response = await axios.get('http://127.0.0.1:5001/database/getCompanies_Product');
        }
        setSuppliers(response.data || []);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
      }
    };

    fetchSuppliers();
  }, [productName]);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        {/* Optional: Title */}
        {productName && (
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Suppliers for "{productName}"
          </h2>
        )}

        {/* No suppliers found message */}
        {suppliers.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-20">
            No suppliers found for this product/service.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {suppliers.map((supplier) => (
              <Link to={`/supplier/${supplier.cin}`} key={supplier.cin}>
                <div className="border border-blue-100 rounded-2xl overflow-hidden hover:shadow-md transition duration-200">
                  <img
                    src={supplier.image}
                    alt={supplier.companyName}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">{supplier.companyName}</h3>
                    <p className="text-sm text-gray-500 mb-3">{supplier.country}</p>
                    <p className="text-xs text-gray-600 mb-4">CIN: {supplier.cin}</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition duration-150">
                      Contact Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Suppliers;



