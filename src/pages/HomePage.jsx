// src/pages/Homepage.js
import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import '../styles.css'
const Homepage = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header className="mb-4"/>
        <SearchBar  className="mt-4"/>
        <div className="flex flex-col items-center mt-6 space-y-4">
          <div className="w-full max-w-2xl">
            <div className="bg-white text-black font-semibold text-lg rounded-lg shadow-md p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <i className="fas fa-arrow-right mr-2"></i>
              Try our A.I. Workflow Recommendation
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <div className="bg-white text-black font-semibold text-lg rounded-lg shadow-md p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
              Design your own workflow
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4 px-4">
          <div className="bg-white text-black rounded-lg shadow-md p-6 w-1/3 hover:shadow-lg transition-shadow">
            <h2 className="font-bold text-xl mb-2">Explore ESDM Helper</h2>
            <hr className="border-black mb-2" />
            <ul className="list-disc pl-5">
              <li>Find Suppliers</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 w-1/3 hover:shadow-lg transition-shadow">
            <h2 className="font-bold text-xl mb-2">Trending News</h2>
            <hr className="border-black mb-2" />
            <ul className="list-disc pl-5">
              <li>Electronics production must grow at 22% to hit $500 billion target</li>
              <li>Electronic components subsidy policy: Centre, industry disagree over job creation</li>
              <li>India's electronic manufacturing likely to double in the next five years: Govt sources</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 w-1/3 hover:shadow-lg transition-shadow">
            <h2 className="font-bold text-xl mb-2">Testimonials</h2>
            <hr className="border-black mb-2" />
            <p>
              "Working with this platform has streamlined our ESDM operations, making order management and tracking effortless. It’s boosted our productivity and reduced errors, helping us serve customers better. Highly recommended for any seller looking to optimize their workflow!"
            </p>
            <p className="mt-2 font-semibold">- Rajesh Verma, Operations Manager at TechWave Solutions</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Homepage;