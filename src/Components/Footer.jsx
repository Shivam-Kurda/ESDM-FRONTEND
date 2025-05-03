import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold text-gray-800">ABOUT</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Company</li>
              <li>Newsroom</li>
              <li>Marketplace</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">HELP & SUPPORT</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>FAQs</li>
              <li>Check Order Status</li>
              <li>Live Chat</li>
              <li>Return & Refunds</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">QUICK LINKS</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Request for Quotation</li>
              <li>Products</li>
              <li>Manufacturers</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">CONTACT US</h4>
            <p className="mt-2 text-gray-600">ESDM India</p>
            <p className="text-gray-600">Okhla Industrial Estate, Phase III, New Delhi</p>
            <p className="text-gray-600">info.esdm@esdm.in</p>
            <p className="text-gray-600">T: 01126907400</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              <p>ESDM is revolutionizing the manufacturing and supply chain industry by bridging the gap between private and public entities. Our platform connects businesses with manufacturers, suppliers, and service providers across every stage of production—from design to distribution—streamlining processes, ensuring compliance, and enabling seamless collaboration to bring ideas to market efficiently.</p>
              <div className="mt-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Cookie policy</a> · 
                <a href="#" className="text-gray-600 hover:text-blue-500"> Privacy policy</a> · 
                <a href="#" className="text-gray-600 hover:text-blue-500"> Terms of use</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            © Copyright 2025 ESDM. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;