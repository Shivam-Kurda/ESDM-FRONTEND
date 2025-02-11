// import React from 'react';
// const SearchBar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <div className="flex justify-center mt-6">
//       <div className="flex items-center bg-gray-100 rounded-full shadow-md p-4 w-full max-w-2xl">
//         <i className="fas fa-search text-gray-500 mr-4"></i>
//         <div className="border-r border-gray-300 h-6 mr-4"></div>
//         <input
//           type="text"
//           placeholder="Search Services or Products"
//           className="bg-gray-100 outline-none text-gray-700 w-full"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
// />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, filteredProducts, onSelectProduct }) {
  return (
    <div className="mb-4 relative mt-4">
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded p-2">
        <span className="text-gray-500 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search products in food and agriculture"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-100 outline-none"
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
              {product}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;