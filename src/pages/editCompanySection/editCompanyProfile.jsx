// EditCompanyProfileForm.js
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import Modal from './Modal';

function EditCompanyProfile({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({
        companyName: '',
        cin: '',
        taxNumber: '',
        incorporationDate: '',
        companyWebsite: '',
        companyemail: '',
    });
    const { user, isAuthenticated, isLoading } = useAuth0();


    const handleProfileClick = async (formData) => {
        console.log("Handle profile clicked");
        try {
            const response = await axios.post(
                'http://localhost:5001/auth/update-profile',
                {
                    // Use formData to send dynamic data
                    company: formData.companyName,
                    cin: formData.cin,
                    taxNumber: formData.taxNumber,
                    incorporationDate: formData.incorporationDate,
                    companyWebsite: formData.companyWebsite,
                    companyemail: formData.companyemail,
                },
                {
                    // Axios configuration object
                    params: { userId: user.sub }, // Query parameters
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );

            console.log('Profile updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        handleProfileClick(formData);
        onClose();

    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        className="border p-2 w-full"
                        value={formData.companyName}
                        onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-semibold">CIN</label>
                    <input
                        type="text"
                        name="cin"
                        className="border p-2 w-full"
                        value={formData.cin}
                        onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-semibold">Tax Number</label>
                    <input
                        type="text"
                        name="taxNumber"
                        className="border p-2 w-full"
                        value={formData.taxNumber}
                        onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-semibold">Incorporation Date</label>
                    <input
                        type="date"
                        name="incorporationDate"
                        className="border p-2 w-full"
                        value={formData.incorporationDate}
                        onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-semibold">Company Website</label>
                    <input
                        type="url"
                        name="companyWebsite"
                        className="border p-2 w-full"
                        value={formData.companyWebsite}
                        onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-semibold">Company Email</label>
                    <input
                        type="companyemail"
                        name="companyemail"
                        className="border p-2 w-full"
                        value={formData.companyemail}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            </form>
        </Modal>
    );
}

export default EditCompanyProfile;