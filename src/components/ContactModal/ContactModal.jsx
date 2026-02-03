import React, { useState } from 'react';
import { contactModalData } from '../../data/components/contactModalData';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { title, subtitle, placeholders, submitBtn, submittingBtn, successTitle, successMessage } = contactModalData;

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Form Submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2 className="modal-title">{title}</h2>
        <p className="modal-subtitle">{subtitle}</p>

        {submitted ? (
          <div className="success-message">
            <h3>{successTitle}</h3>
            <p>{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder={placeholders.name}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder={placeholders.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder={placeholders.message}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? submittingBtn : submitBtn}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
