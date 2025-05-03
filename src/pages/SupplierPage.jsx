import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Components/Header';

function SupplierDetail() {
  const { cin: supplier_cin } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    productName: '',
    requirements: '',
  });
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchSupplierDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://127.0.0.1:5001/database/getCompanyDetails?cin=${supplier_cin}`
        );
        if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSupplier(data);
      } catch (error) {
        console.error('Error fetching supplier details:', error);
        setSupplier(null);
      } finally {
        setLoading(false);
      }
    };

    if (supplier_cin) {
      fetchSupplierDetails();
    } else {
        setLoading(false);
        console.error("Supplier CIN not provided in URL.");
    }
  }, [supplier_cin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // This function is correct - ensures state updates on input change
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    if (!user || !supplier) {
        alert("User not logged in or supplier data missing.");
        return;
    }
    try {
       const accessToken = await getAccessTokenSilently({
        //   audience: `YOUR_API_IDENTIFIER`, // Replace with your Auth0 API identifier if required by your backend API
        //   scope: "read:current_user update:current_user_metadata", // Add necessary scopes if required
       });

       console.log("Submitting quote for:", supplier.companyName, "by user:", user.sub);
       console.log("Quote data:", quoteForm);

       const response = await axios.post(
         `http://127.0.0.1:5001/database/addQuotationRequestToCompany`,
         {
            SupplierCompany: supplier.companyName,
            SupplierCin: supplier.cin,
            ...quoteForm,
         },
         {
           params: { userId: user.sub },
           headers: {
             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
             'Content-Type': 'application/json',
           },
         }
       );

       if (response.status === 201 || response.status === 200) {
         alert('Quotation request submitted successfully!');
         setShowModal(false);
         setQuoteForm({ productName: '', requirements: '' });
       } else {
          const errorData = response.data;
          alert(`Failed to submit request: ${errorData?.message || response.statusText}`);
       }
    } catch (error) {
       console.error('Error submitting quote:', error);
       if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          alert(`Error: ${error.response.data?.message || error.message}`);
       } else if (error.request) {
          console.error("Error request:", error.request);
          alert("Error: Could not reach the server. Please try again later.");
       } else {
          console.error("Error message:", error.message);
          alert(`Error: ${error.message}`);
       }
    }
  };

  // --- Loading and Error States --- (No changes needed here)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white text-blue-700 font-medium">
        Loading supplier details...
      </div>
    );
  }

  if (!supplier) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <div className="flex justify-center items-center flex-grow text-red-600 font-medium">
             Supplier details not found or could not be loaded. (CIN: {supplier_cin || 'Not Provided'})
          </div>
      </div>
    );
  }

  // --- Main Return ---
  return (
    // *** FIX: Removed conditional pointer-events-none from this div ***
    <div className="bg-white min-h-screen text-gray-800 font-sans relative">
       {/* Wrap content that should be blurred */}
      <div
        className={`transition-filter duration-300 ease-in-out ${
          showModal ? 'filter blur-sm' : 'filter-none' // Blur effect still applied here
        }`}
      >
        <Header />
        <div className="max-w-7xl mx-auto p-6">
          {/* Top Section: Logo, Name, Ask Quote Button */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <img
                src={supplier.logo || '/placeholder-logo.png'}
                alt={`${supplier.companyName} logo`}
                className="h-20 w-20 rounded-full object-cover mr-6 border border-gray-300"
              />
              <div>
                <h1 className="text-3xl font-bold text-blue-800 mb-1">
                  {supplier.companyName}
                </h1>
                <p className="text-sm text-gray-500">CIN: {supplier.cin}</p>
                <p className="text-sm text-gray-500">
                  Country: {supplier.country}
                </p>
              </div>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-sm font-medium transition duration-200 cursor-pointer"
              onClick={() => setShowModal(true)}
              aria-label="Ask for Quote"
            >
              Ask for Quote
            </button>
          </div>

          {/* Navigation (Optional) */}
          <nav className="mb-6 border-b pb-2">
            <ul className="flex space-x-6 text-sm text-gray-600">
              {[
                'Overview', 'Products', 'Certifications', 'Facilities',
                'Export', 'Trade Shows', 'Posts', 'Track Record',
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content: Products and Company Details */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products Section */}
            <div className="w-full lg:w-2/3">
              <section id="products" className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Products
                </h2>
                {!supplier.products || supplier.products.length === 0 ? (
                  <p className="text-gray-500">No products listed.</p>
                ) : (
                  <div className="space-y-6">
                    {supplier.products.map((product, idx) => (
                      <div
                        key={product.id || idx}
                        className="border border-blue-100 rounded-xl shadow-sm p-5 hover:shadow-md transition duration-200"
                      >
                        <h3 className="text-lg font-bold text-blue-800 mb-1">
                          {product.ProductName}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Category: {product.Category}
                        </p>
                        <p className="text-sm mb-2">{product.Description}</p>
                        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                          <p>
                            <strong>Specifications:</strong>{' '}
                            {product.Specifications || 'N/A'}
                          </p>
                          <p>
                            <strong>Price:</strong> {product.Price ? `₹${product.Price}` : 'N/A'}
                          </p>
                          <p>
                            <strong>Lead Time:</strong> {product.LeadTime || 'N/A'}
                          </p>
                          <p>
                            <strong>Min Order Qty:</strong>{' '}
                            {product.MinimumOrderWQuantity || 'N/A'}
                          </p>
                          <p className="md:col-span-2">
                            <strong>Certifications:</strong>{' '}
                            {product.Certifications || 'N/A'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>

            {/* Company Details Sidebar */}
            <aside className="w-full lg:w-1/3 bg-gray-50 p-5 rounded-xl border border-gray-200 self-start">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Company Details
              </h2>
              <ul className="text-sm space-y-2 text-gray-700">
                <li><strong>Name:</strong> {supplier.companyName}</li>
                <li><strong>Country:</strong> {supplier.country}</li>
                <li><strong>CIN:</strong> {supplier.cin}</li>
                <li>
                  <strong>Year Established:</strong>{' '}
                  {supplier.incorporationDate
                    ? new Date(supplier.incorporationDate).getFullYear()
                    : 'N/A'}
                </li>
                 <li><strong>Legal Status:</strong> {supplier.companyStatus || 'N/A'}</li>
                 <li><strong>Address:</strong> {supplier.registeredAddress || 'N/A'}</li>
                <li><strong>Tax Number (GSTIN):</strong> {supplier.taxNumber || 'N/A'}</li>
              </ul>
            </aside>
          </div>
        </div>
      </div> {/* End of blur wrapper */}

      {/* --- Modal Section --- */}
      {/* This structure correctly handles pointer events now */}
      {showModal && ( // Conditionally render the modal
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
            showModal ? 'opacity-100' : 'opacity-0 pointer-events-none' // pointer-events-none only when hidden
            }`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Modal Content Box - Animation applied here */}
            <div
            className={`bg-white rounded-xl shadow-xl max-w-md w-full p-6 transition-transform duration-300 ease-in-out transform ${
                showModal ? 'scale-100' : 'scale-95' // Scale animation
            }`}
            >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 id="modal-title" className="text-xl font-semibold text-blue-700">
                Request a Quote from {supplier.companyName}
                </h3>
                <button
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none cursor-pointer"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
                >
                &times;
                </button>
            </div>

            {/* Modal Form - Inputs should be interactive now */}
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                <label htmlFor="productName" className="block text-sm font-medium mb-1 text-gray-700">
                    Product Name / Service
                </label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={quoteForm.productName} // Controlled input value
                    onChange={handleInputChange}   // State update handler
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="e.g., PCB Manufacturing , PCB Assembly, etc."
                />
                </div>
                <div>
                <label htmlFor="requirements" className="block text-sm font-medium mb-1 text-gray-700">
                    Specific Requirements (Quantity, Specs, etc.)
                </label>
                <textarea
                    id="requirements"
                    name="requirements"
                    value={quoteForm.requirements} // Controlled input value
                    onChange={handleInputChange}    // State update handler
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-vertical"
                    placeholder="Describe your needs, e.g., 'Need 500 pcs of 4-layer PCB with specific dimensions and components.'"
                />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full font-medium cursor-pointer"
                >
                    Submit Request
                </button>
            </form>
            </div>
        </div>
      )} {/* End of conditional modal rendering */}
    </div> // End of main component div
  );
}

export default SupplierDetail;