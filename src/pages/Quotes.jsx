import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Card from '../Components/Card';

const Quotes = () => {
  const { user } = useAuth0();
  // const [notifications, setNotifications] = useState([]);
  const [sent_requests, setSent] = useState([]);
  const [received_requests, setReceived] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://127.0.0.1:5001/database/getQuotationRequests',
          {
            params: { userId: user.sub },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-Type': 'application/json',
            },
          }
        );
        // assume response.data = { notifications: [], sent: [], received: [] }
        const { sent_requests = [], received_requests = [] } = response.data;
        // setNotifications(notifications);

        setSent(sent_requests);
        setReceived(received_requests);
      } catch (err) {
        console.error(err);
        setError('Failed to load quotations.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [user.sub]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading…
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Quotes</h1>
      <div className="grid grid-cols-1 gap-4">
        {/* <Card
          title="Notifications"
          content={
            notifications.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {notifications.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No notifications.</p>
            )
          }
        /> */}

        <Card
          title="Quotations Sent"
          // content={
          //   sent_requests.length > 0 ? (
          //     <ul className="space-y-4">
          //       {sent_requests.map((item, idx) => (
          //         <li
          //           key={idx}
          //           className="p-4 bg-gray-50 rounded-md shadow-sm"
          //         >
          //           <div className="text-base font-semibold text-gray-800 mb-1">
          //             {item.supplierCompany} – {item.productName}
          //           </div>
          //           <p className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
          //             {item.quotationDetails}
          //           </p>
          //         </li>
          //       ))}
          //     </ul>
          //   ) : (
          //     <p className="text-gray-500">No quotations sent.</p>
          //   )
          // }

          content={
            sent_requests.length > 0 ? (
              <ul className="space-y-4">
                {sent_requests.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-gray-50 rounded-md shadow-sm"
                  >
                    <div className="text-base font-semibold text-gray-800 mb-1">
                      {item.supplierCompany} – {item.productName}
                    </div>
                    {/* Check if quotationDetails is an object or array */}
                    {Array.isArray(item.quotationDetails) ? (
                      // If it's an array of objects
                      <div className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {item.quotationDetails.map((detail, detailIdx) => (
                          <div key={detailIdx} className="mb-2 p-2 bg-white rounded">
                            <p><strong>Item:</strong> {detail.Item || 'N/A'}</p>
                            <p><strong>Quantity:</strong> {detail.Quantity || 'N/A'}</p>
                            <p><strong>Layer(s):</strong> {detail['Layer(s)'] || 'N/A'}</p>
                            <p><strong>Material:</strong> {detail.Material || 'N/A'}</p>
                            <p><strong>Surface Finish:</strong> {detail['Surface Finish'] || 'N/A'}</p>
                            <p><strong>Assembly Required:</strong> {detail['Assembly Required'] || 'N/A'}</p>
                            {detail.Notes && <p><strong>Notes:</strong> {detail.Notes}</p>}
                          </div>
                        ))}
                      </div>
                    ) : typeof item.quotationDetails === 'object' ? (
                      // If it's a single object
                      <div className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        <p><strong>Item:</strong> {item.quotationDetails.Item || 'N/A'}</p>
                        <p><strong>Quantity:</strong> {item.quotationDetails.Quantity || 'N/A'}</p>
                        <p><strong>Layer(s):</strong> {item.quotationDetails['Layer(s)'] || 'N/A'}</p>
                        <p><strong>Material:</strong> {item.quotationDetails.Material || 'N/A'}</p>
                        <p><strong>Surface Finish:</strong> {item.quotationDetails['Surface Finish'] || 'N/A'}</p>
                        <p><strong>Assembly Required:</strong> {item.quotationDetails['Assembly Required'] || 'N/A'}</p>
                        {item.quotationDetails.Notes && <p><strong>Notes:</strong> {item.quotationDetails.Notes}</p>}
                      </div>
                    ) : (
                      // If it's a string or something else
                      <p className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {typeof item.quotationDetails === 'string'
                          ? item.quotationDetails
                          : JSON.stringify(item.quotationDetails, null, 2)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No quotations sent.</p>
            )
          }
        />
        {/* <Card
          title="Quotations Requests Recieved"
          content={
            received_requests.length > 0 ? (
              <ul className="space-y-4">
                {received_requests.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-gray-50 rounded-md shadow-sm"
                  >
                    <div className="text-base font-semibold text-gray-800 mb-1">
                      {item.requestingCompany} – {item.productName}
                    </div>
                    <p className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                      {item.quotationDetails}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No quotations sent.</p>
            )
          }
        /> */}

        <Card
          title="Quotations Requests Received"
          content={
            received_requests.length > 0 ? (
              <ul className="space-y-4">
                {received_requests.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-gray-50 rounded-md shadow-sm"
                  >
                    <div className="text-base font-semibold text-gray-800 mb-1">
                      {item.requestingCompany} – {item.productName}
                    </div>
                    {/* Check if quotationDetails is an object or array */}
                    {Array.isArray(item.quotationDetails) ? (
                      // If it's an array of objects
                      <div className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {item.quotationDetails.map((detail, detailIdx) => (
                          <div key={detailIdx} className="mb-2 p-2 bg-white rounded">
                            <p><strong>Item:</strong> {detail.Item || 'N/A'}</p>
                            <p><strong>Quantity:</strong> {detail.Quantity || 'N/A'}</p>
                            <p><strong>Layer(s):</strong> {detail['Layer(s)'] || 'N/A'}</p>
                            <p><strong>Material:</strong> {detail.Material || 'N/A'}</p>
                            <p><strong>Surface Finish:</strong> {detail['Surface Finish'] || 'N/A'}</p>
                            <p><strong>Assembly Required:</strong> {detail['Assembly Required'] || 'N/A'}</p>
                            {detail.Notes && <p><strong>Notes:</strong> {detail.Notes}</p>}
                          </div>
                        ))}
                      </div>
                    ) : typeof item.quotationDetails === 'object' ? (
                      // If it's a single object
                      <div className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        <p><strong>Item:</strong> {item.quotationDetails.Item || 'N/A'}</p>
                        <p><strong>Quantity:</strong> {item.quotationDetails.Quantity || 'N/A'}</p>
                        <p><strong>Layer(s):</strong> {item.quotationDetails['Layer(s)'] || 'N/A'}</p>
                        <p><strong>Material:</strong> {item.quotationDetails.Material || 'N/A'}</p>
                        <p><strong>Surface Finish:</strong> {item.quotationDetails['Surface Finish'] || 'N/A'}</p>
                        <p><strong>Assembly Required:</strong> {item.quotationDetails['Assembly Required'] || 'N/A'}</p>
                        {item.quotationDetails.Notes && <p><strong>Notes:</strong> {item.quotationDetails.Notes}</p>}
                      </div>
                    ) : (
                      // If it's a string or something else
                      <p className="text-sm text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {typeof item.quotationDetails === 'string'
                          ? item.quotationDetails
                          : JSON.stringify(item.quotationDetails, null, 2)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No quotation requests received.</p>
            )
          }
        />
      </div>
    </div>
  );
};
export default Quotes;
