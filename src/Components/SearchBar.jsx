import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SearchBar(){
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5001/database/getProductList');
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
    const intervalId = setInterval(fetchProducts, 60000); // Fetch every 60 seconds
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const onSelectProduct = (product) => {
    setSearchTerm('');
    navigate(`/suppliers/${encodeURIComponent(product.product_name)}`);
  };

  return (
    <div className="mb-4 relative mt-4">
      <div className="flex items-center border border-black rounded-full p-2 w-96">
        
        <input
          type="text"
          placeholder="Search products and Services"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white outline-none rounded-full px-4 py-2"
        />
      </div>
      {searchTerm && (
        <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto z-10">
          {filteredProducts.map((product, index) => (
            <li
              key={index}
              onClick={() => onSelectProduct(product)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {product.product_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SearchBar;