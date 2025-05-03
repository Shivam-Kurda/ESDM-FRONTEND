import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import Modal from './Modal';
import { ScrollText, Package, Tag, DollarSign, Clock, Layers, Award, Wrench,  Activity } from "lucide-react"; // Optional icons
import { motion } from "framer-motion";
import FormField from '../../Components/FormField';
import FormTextArea from '../../Components/FormTextArea';
import { useEffect } from 'react';
const ProductForm = ({ isOpen, onClose, onSave , editingProduct}) => {
  const [formData, setFormData] = useState({
    ProductName: '',
    Category: '',
    Description: '',
    Specifications: '',
    Price: '',
    LeadTime: '',
    MinOrderQty: '',
    Certifications: '',
    ServiceType: '',
    TechSupport: '',
    Applications: '',
  });
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        ProductName: editingProduct.ProductName || '',
        Category: editingProduct.Category || '',
        Description: editingProduct.Description || '',
        Specifications: editingProduct.Specifications || '',
        Price: editingProduct.Price || '',
        LeadTime: editingProduct.LeadTime || '',
        MinOrderQty: editingProduct.MinimumOrderQuantity || '',
        Certifications: editingProduct.Certifications || '',
        ServiceType: editingProduct.ServiceType || '',
        TechSupport: editingProduct.TechSupport || '',
        Applications: editingProduct.Applications || '',
      });
    } else {
      setFormData({
        ProductName: '',
        Category: '',
        Description: '',
        Specifications: '',
        Price: '',
        LeadTime: '',
        MinOrderQty: '',
        Certifications: '',
        ServiceType: '',
        TechSupport: '',
        Applications: '',
      });
      
    }
  }, [editingProduct]);
  useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);
  const { user } = useAuth0();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEdit=editingProduct?true:false
    const apiurl=isEdit?'http://localhost:5001/database/edit_ProductToCompany':'http://localhost:5001/database/add_ProductToCompany'
    const payload=isEdit?{
      oldName:editingProduct.ProductName,
      updatedData:formData
    }:{
      ...formData
    }
    console.log(payload)
    console.log("Button clicked")
    try {
      await axios.post(
        apiurl,
        payload,
        {
          params: { userId: user.sub },
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      onClose();
    }
    catch (error) {
      console.error('Error adding product:', error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Package className="w-6 h-6 text-blue-600" />
            Add a New Product
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl font-bold">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Group: Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField icon={<Tag />} label="Product Name" name="ProductName" value={formData.ProductName} onChange={handleChange} />
            <FormField icon={<Layers />} label="Category" name="Category" value={formData.Category} onChange={handleChange} />
          </div>

          <FormTextArea icon={<ScrollText />} label="Description" name="Description" value={formData.Description} onChange={handleChange} />
          <FormTextArea  label="Specifications" name="Specifications" value={formData.Specifications} onChange={handleChange} />

          {/* Group: Business Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField icon={<DollarSign />} label="Price (optional)" name="Price" value={formData.Price} onChange={handleChange} />
            <FormField icon={<Clock />} label="Lead Time" name="LeadTime" value={formData.LeadTime} onChange={handleChange} />
            <FormField icon={<Package />} label="Minimum Order Quantity" name="MinOrderQty" value={formData.MinOrderQty} onChange={handleChange} />
            <FormField icon={<Award />} label="Certifications" name="Certifications" value={formData.Certifications} onChange={handleChange} />
            <FormField icon={<Wrench />} label="Service Type" name="ServiceType" value={formData.ServiceType} onChange={handleChange} />
            <FormField  label="Supported Technologies" name="TechSupport" value={formData.TechSupport} onChange={handleChange} />
            <FormField icon={<Activity />} label="Applications" name="Applications" value={formData.Applications} onChange={handleChange} />
          </div>

          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-sm transition"
            >
              Save Product
            </button>
          </div>
        </form>
      </motion.div>
    </Modal>
  );
};
export default ProductForm;