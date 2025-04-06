import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditHotel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotelData, setHotelData] = useState({
        hotelName: '',
        pricePerDay: '',
        image: null,
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await axios.get(`https://travel-website-backend-hdgm.onrender.com/hotels/${id}`);
                setHotelData(response.data);
            } catch (err) {
                setError('Failed to fetch hotel details.');
            }
        };

        fetchHotel();
    }, [id]);

    const handleChange = (e) => {
        setHotelData({ ...hotelData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setHotelData({ ...hotelData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('hotelName', hotelData.hotelName);
        formData.append('pricePerDay', hotelData.pricePerDay);
        if (hotelData.image) {
            formData.append('image', hotelData.image);
        }

        try {
            await axios.put(`https://travel-website-backend-hdgm.onrender.com/hotels/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/hotel');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update hotel. Please try again.');
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
            marginTop: '150px'
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '40px',
                color: '#333',
                fontSize: '28px',
                fontWeight: '600',
            }}>Edit Hotel</h2>
            {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Hotel Name</label>
                    <input type="text" name="hotelName" value={hotelData.hotelName} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', color: '#333' }} />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Price Per Day</label>
                    <input type="number" name="pricePerDay" value={hotelData.pricePerDay} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', color: '#333' }} />
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#555', fontWeight: '500' }}>Hotel Image</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', color: '#333' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#9370DB', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.3s ease' }} onMouseEnter={(e) => (e.target.style.backgroundColor = '#9370DB')} onMouseLeave={(e) => (e.target.style.backgroundColor = '#9370DB')}>Update Hotel</button>
            </form>
        </div>
    );
}

export default EditHotel;