import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('review/store', formData);
            toast.success(response.data.message, {
                position: 'top-center', // String-based position fallback
            });
            setFormData({ name: '', email: '', feedback: '' });
        } catch (error) {
            toast.error('An error occurred. Please try again.', {
                position: 'top-center', // String-based position fallback
            });
        }
    };
    

    return (
        <div
            style={{
                backgroundImage: `url('/images/bg1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ToastContainer />
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white
                    color: '#493628',
                    padding: '20px',
                    maxWidth: '600px',
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 style={{ color: '#493628', textAlign: 'center' }}>Leave a Review</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #AB886D',
                                borderRadius: '4px',
                                backgroundColor: '#FAF6E3',
                                color: '#493628',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #AB886D',
                                borderRadius: '4px',
                                backgroundColor: '#FAF6E3',
                                color: '#493628',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Feedback:</label>
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #AB886D',
                                borderRadius: '4px',
                                backgroundColor: '#FAF6E3',
                                color: '#493628',
                            }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#493628',
                            color: '#FAF6E3',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewPage;
