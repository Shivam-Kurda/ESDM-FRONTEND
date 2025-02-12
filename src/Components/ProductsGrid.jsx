import React from 'react';

const ProductsGrid = ({ listitems }) => {
  return (
    <section id="products" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {listitems.map((product, index) => (
          <div key={index} className="border p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;