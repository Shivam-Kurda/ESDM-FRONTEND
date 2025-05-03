// src/pages/Homepage.js
import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import '../styles.css'
import Footer from '../Components/Footer';
const Homepage = () => {
    return (
      <div className="bg-white-100 min-h-screen">
        <Header className="mt-4 mb-4"/>
        <section className="text-center py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mt-4">
        <h1 className="text-4xl font-bold">
          From <span className="text-blue-500">Concept</span> to <span className="text-yellow-500">Creation</span>.
        </h1>
        <p className="text-xl mt-4">Build your products with ESDM</p>
        <p className="mt-4 text-gray-600">
          Connecting products, manufacturers, suppliers, and distributors, streamlining every stage from design and prototyping through production, packaging, marketing, and compliance.
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full mr-4">Build Your Product</button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full">Join ESDM</button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
          <p className="text-gray-600 mb-8">Find millions of product options for your business needs</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Semiconductors & Integrated Circuits', 'Passive Components', 'Connectors & Interconnects', 'Electromechanical Components', 'Cables & Wiring', 'Test, Measurement & Tools', 'Development Kits & Evaluation Boards', 'Software & Design Tools', 'Power Components'].map((category, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-gray-600">Description of the category...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Manufacturers */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Featured Manufacturers</h2>
          <div className="flex justify-around items-center">
            {['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png'].map((logo, index) => (
              <img key={index} src={logo} alt="Manufacturer Logo" className="h-12" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 mb-8">Most popular products & brand offerings for your business</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Cable layering systems, electric', variations: 43 },
              { name: 'Electric cable connections', variations: 23 },
              { name: 'Automotive parts', variations: 78 },
              { name: 'Anchors', variations: 4312 },
              { name: 'Advertising materials', variations: 11 },
              { name: 'Brazing, soldering and welding', variations: 147 },
            ].map((product, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
                <img src={`product${index + 1}.png`} alt={product.name} className="w-full h-32 object-cover mb-4" />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.variations} Variations</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        <Footer className="mt-8"/>
      </div>
      
      
    );
  };
  
  export default Homepage;