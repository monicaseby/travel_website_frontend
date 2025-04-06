// AddPackage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPackage = () => {
    const [tourpackageName, setTourpackageName] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('tourpackageName', tourpackageName);
        formData.append('image', image);
        formData.append('price', price);
        formData.append('duration', duration);

        try {
            await axios.post('https://travel-website-backend-hdgm.onrender.com/packages', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/trippackage');
        } catch (error) {
            console.error('Error adding package:', error);
            console.error('Axios Error Details:', error);
        }
    };

    return (
        <div style={{
            padding: '40px',
            maxWidth: '800px',
            margin: '100px auto',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            fontFamily: 'Arial, sans-serif',
            marginTop:'150px'
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '40px',
                color: '#333',
                fontSize: '28px',
                fontWeight: '600',
            }}>Create Travel Package</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Package Name</label>
                    <input
                        type="text"
                        value={tourpackageName}
                        onChange={(e) => setTourpackageName(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '16px',
                            color: '#333',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '16px',
                            color: '#333',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '16px',
                            color: '#333',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Duration</label>
                    <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '16px',
                            color: '#333',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '14px',
                        backgroundColor: '#9370DB',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#9370DB')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#9370DB')}
                >
                    Add Package
                </button>
            </form>
        </div>
    );
};

export default AddPackage;