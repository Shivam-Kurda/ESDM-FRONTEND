import React from 'react';
import Card from '../Components/Card';

const Quotes = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Quotes</h1>
      <div className="grid grid-cols-1 gap-4">
        <Card
          title="Notifications"
          content={
            <ul className="list-disc pl-5">
              <li>Quotation sent to BZ Semiconductors Accepted.</li>
              <li>Quotation sent to BHT Suppliers Rejected.</li>
              <li>XZ Designers sent a negotiated quotation.</li>
            </ul>
          }
          linkText=""
          onLinkClick={() => {}}
        />
        <Card
          title="Quotations Sent"
          content={
            <ul className="list-disc pl-5">
              <li>ABC Electricals – PCB Designing</li>
              <li>Tyfoon Semiconductors – Semiconductor Modification</li>
              <li>DEL Pvt. Ltd – Earphone Designing</li>
            </ul>
          }
          linkText=""
          onLinkClick={() => {}}
        />
        <Card
          title="Quotation Requests"
          content={
            <ul className="list-disc pl-5">
              <li>Techma Chip Designing – Chip Soldering</li>
              <li>TZ Pvt. Ltd. – Chip Manufacturing</li>
            </ul>
          }
          linkText=""
          onLinkClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Quotes;