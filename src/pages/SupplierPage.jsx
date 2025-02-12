import React from 'react';
import ProductsGrid from '../Components/ProductsGrid';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

function SupplierDetail() {
    const suppliers = [{
        id: 0,
        name: 'Tejas Networks',
        logo: 'link-to-logo-image',
        summary: [
            'A leading agro exporter from India supplying fresh, residue-free fruits and vegetables across several geographies.',
            'Products include okra, mango, pomegranate, onion, chili, grapes, and banana.',
            'Keeps pace with the latest technology and market requirements to ensure stability and sustainability towards fulfilling customer demands.',
            'Established sourcing contracts directly with farmers to keep overall costs low.',
            'Has in-house packaging and shipping facilities as well as a quality check division.',
            'Practices contract farming to ensure own contracted produce and ensure supply volume.',
        ],
        companyDetails: {
            country: 'India',
            businessType: 'Trade',
            yearEstablished: 2019,
            numberOfEmployees: '11-50 Employees',
            annualSalesRevenue: 'USD 1M~5M',
            hasExportExperience: 'Yes',
        },

        products: [
            { 'name': 'PCB DESIGN', 'image': 'link-to-image-1', 'category': 'PCB Design', 'description': 'PCB Design' },
            { 'name': 'PCB MANUFACTURING', 'image': 'link-to-image-2', 'category': 'PCB Manufacturing', 'description': 'PCB Manufacturing' },
            { 'name': 'PCB ASSEMBLY', 'image': 'link-to-image-3', 'category': 'PCB Assembly', 'description': 'PCB Assembly' },
            { 'name': 'PCB TESTING', 'image': 'link-to-image-4', 'category': 'PCB Testing', 'description': 'PCB Testing' },
            { 'name': 'PCB PROTOTYPING', 'image': 'link-to-image-5', 'category': 'PCB Prototyping', 'description': 'PCB Prototyping' },
            { 'name': 'PCB REPAIR', 'image': 'link-to-image-6', 'category': 'PCB Repair', 'description': 'PCB Repair' },

        ]

    },
    {
        id: 1,
        name: 'Dixon Technologies',
        logo: 'link-to-logo-image',
        summary: [
            'A leading agro exporter from India supplying fresh, residue-free fruits and vegetables across several geographies.',
            'Products include okra, mango, pomegranate, onion, chili, grapes, and banana.',
            'Keeps pace with the latest technology and market requirements to ensure stability and sustainability towards fulfilling customer demands.',
            'Established sourcing contracts directly with farmers to keep overall costs low.',
            'Has in-house packaging and shipping facilities as well as a quality check division.',
            'Practices contract farming to ensure own contracted produce and ensure supply volume.',
        ],
        companyDetails: {
            country: 'India',
            businessType: 'Trade',
            yearEstablished: 2019,
            numberOfEmployees: '11-50 Employees',
            annualSalesRevenue: 'USD 1M~5M',
            hasExportExperience: 'Yes',
        },

        products: [
            { 'name': 'PCB DESIGN', 'image': 'link-to-image-1', 'category': 'PCB Design', 'description': 'PCB Design' },
            { 'name': 'PCB MANUFACTURING', 'image': 'link-to-image-2', 'category': 'PCB Manufacturing', 'description': 'PCB Manufacturing' },
            { 'name': 'PCB ASSEMBLY', 'image': 'link-to-image-3', 'category': 'PCB Assembly', 'description': 'PCB Assembly' },
            { 'name': 'PCB TESTING', 'image': 'link-to-image-4', 'category': 'PCB Testing', 'description': 'PCB Testing' },
            { 'name': 'PCB PROTOTYPING', 'image': 'link-to-image-5', 'category': 'PCB Prototyping', 'description': 'PCB Prototyping' },
            { 'name': 'PCB REPAIR', 'image': 'link-to-image-6', 'category': 'PCB Repair', 'description': 'PCB Repair' },

        ]

    },
    {
        id: 2,
        name: 'Bharat Electronics Limited',
        logo: 'link-to-logo-image',
        summary: [
            'A leading agro exporter from India supplying fresh, residue-free fruits and vegetables across several geographies.',
            'Products include okra, mango, pomegranate, onion, chili, grapes, and banana.',
            'Keeps pace with the latest technology and market requirements to ensure stability and sustainability towards fulfilling customer demands.'],
        companyDetails: {
            country: 'India',
            businessType: 'Trade',
            yearEstablished: 2019,
            numberOfEmployees: '11-50 Employees',
            annualSalesRevenue: 'USD 1M~5M',
            hasExportExperience: 'Yes',
        },

        products: [
            { 'name': 'PCB DESIGN', 'image': 'link-to-image-1', 'category': 'PCB Design', 'description': 'PCB Design' },
            { 'name': 'PCB MANUFACTURING', 'image': 'link-to-image-2', 'category': 'PCB Manufacturing', 'description': 'PCB Manufacturing' },
            { 'name': 'PCB ASSEMBLY', 'image': 'link-to-image-3', 'category': 'PCB Assembly', 'description': 'PCB Assembly' },
            { 'name': 'PCB TESTING', 'image': 'link-to-image-4', 'category': 'PCB Testing', 'description': 'PCB Testing' },
            { 'name': 'PCB PROTOTYPING', 'image': 'link-to-image-5', 'category': 'PCB Prototyping', 'description': 'PCB Prototyping' },
            { 'name': 'PCB REPAIR', 'image': 'link-to-image-6', 'category': 'PCB Repair', 'description': 'PCB Repair' },

        ]
    }];
    const supplierid=useParams().id

    const supplier = suppliers.find(supplier => supplier.id == supplierid);
    return (
        
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="flex items-center mb-8 mt-4">
                <img src={supplier.logo} alt={supplier.name} className="h-16 w-16 mr-4" />
                <div>
                    <h1 className="text-3xl font-bold">{supplier.name}</h1>
                    <p className="text-sm text-gray-600">{supplier.status}</p>
                    <p className="text-sm text-gray-600">{supplier.followers} Followers</p>
                </div>
            </div>
            <nav className="mb-8">
                <ul className="flex space-x-4 border-b-2 border-gray-300 pb-2">
                    <li>
                        <a href="#overview" className="text-black font-semibold hover:font-bold hover:text-gray-700">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="#products" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Products (16)
                        </a>
                    </li>
                    <li>
                        <a href="#certifications" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Certifications
                        </a>
                    </li>
                    <li>
                        <a href="#facilities" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Facilities
                        </a>
                    </li>
                    <li>
                        <a href="#export" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Export
                        </a>
                    </li>
                    <li>
                        <a href="#trade-shows" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Trade Shows
                        </a>
                    </li>
                    <li>
                        <a href="#posts" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Posts
                        </a>
                    </li>
                    <li>
                        <a href="#track-record" className="text-gray-500 hover:font-bold hover:text-gray-700">
                            Track Record
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex">
                <div className="w-2/3 pr-8">
                    <section id="overview" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Summary</h2>
                        <ul className="list-disc pl-5 mb-8">
                            {supplier.summary.map((item, index) => (
                                <li key={index} className="text-gray-700 mb-2">{item}</li>
                            ))}
                        </ul>
                    </section>
                    <ProductsGrid listitems={supplier.products} />
                    <section id="certifications" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Certifications</h2>
                        {/* List certifications here */}
                    </section>
                    <section id="facilities" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Facilities</h2>
                        {/* List facilities here */}
                    </section>
                    <section id="export" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Export</h2>
                        {/* List export details here */}
                    </section>
                    <section id="trade-shows" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Trade Shows</h2>
                        {/* List trade shows here */}
                    </section>
                    <section id="posts" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Posts</h2>
                        {/* List posts here */}
                    </section>
                    <section id="track-record" className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Track Record</h2>
                        {/* List track record here */}
                    </section>
                </div>
                <div className="w-1/3 bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-bold mb-4">Company Details</h2>
                    <ul className="text-gray-700">
                        <li><strong>Name:</strong> {supplier.name}</li>
                        <li><strong>Country:</strong> {supplier.companyDetails.country}</li>
                        <li><strong>Business Type:</strong> {supplier.companyDetails.businessType}</li>
                        <li><strong>Year Established:</strong> {supplier.companyDetails.yearEstablished}</li>
                        <li><strong>Number of Employees:</strong> {supplier.companyDetails.numberOfEmployees}</li>
                        <li><strong>Annual Sales Revenue:</strong> {supplier.companyDetails.annualSalesRevenue}</li>
                        <li><strong>Has Export Experience:</strong> {supplier.companyDetails.hasExportExperience}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SupplierDetail;