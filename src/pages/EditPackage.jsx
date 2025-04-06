// EditPackage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPackage = () => {
    const { id } = useParams();
    const [tourpackageName, setTourpackageName] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axios.get(`https://travel-website-backend-hdgm.onrender.com/packages/${id}`);
                const pkg = response.data;
                setTourpackageName(pkg.tourpackageName);
                setPrice(pkg.price);
                setDuration(pkg.duration);
            } catch (error) {
                console.error('Error fetching package:', error);
            }
        };
        fetchPackage();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('tourpackageName', tourpackageName);
        if (image) {
            formData.append('image', image);
        }
        formData.append('price', price);
        formData.append('duration', duration);

        try {
            await axios.put(`https://travel-website-backend-hdgm.onrender.com/packages/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/trippackage');
        } catch (error) {
            console.error('Error updating package:', error);
        }
    };

    return (
        <div style={{
            padding: '40px',
            maxWidth: '800px',
            margin: '150px auto',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            fontFamily: 'Arial, sans-serif',
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '40px',
                color: '#333',
                fontSize: '28px',
                fontWeight: '600',
            }}>Edit Travel Package</h2>
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
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Image (Optional)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
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
                        type="number"
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
                    Update Package
                </button>
            </form>
        </div>
    );
};

export default EditPackage;