import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faBed, faMagnifyingGlass, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
    const [hotels, setHotels] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user?.username === 'admin';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('https://travel-website-backend-hdgm.onrender.com/hotels');
                setHotels(response.data);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };
        fetchHotels();
    }, []);

    const fetchHotelsAgain = async () => {
        try {
            const response = await axios.get('https://travel-website-backend-hdgm.onrender.com/hotels');
            setHotels(response.data);
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-hotel/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://travel-website-backend-hdgm.onrender.com/hotels/${id}`);
            fetchHotelsAgain();
        } catch (error) {
            console.error('Error deleting hotel:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const renderHotelCards = (hotelsToRender) => {
        return hotelsToRender.map((hotel, index) => (
            <div key={index} style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '16px',
                margin: '16px',
                width: '250px',
                boxSizing: 'border-box',
                textAlign: 'left',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
            }}>
                <div style={{ position: 'relative', marginBottom: '12px' }}>
                    <img src={`https://travel-website-backend-hdgm.onrender.com/uploads/${hotel.image}`} alt={hotel.hotelName} style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }} />
                    <FontAwesomeIcon icon={faHeart} style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '6px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }} />
                </div>
                <h4 style={{ margin: '8px 0', fontSize: '1.1rem', fontWeight: '600' }}>{hotel.hotelName}</h4>
                <p style={{ fontSize: '0.9rem', margin: '4px 0', color: '#555' }}>Price/Day: ₹{hotel.pricePerDay}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.9rem', margin: '4px 0', color: '#777' }}>
                        Updated on: {formatDate(hotel.updatedAt || hotel.createdAt)}
                    </p>
                </div>
                {isAdmin && (
                    <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'end' }}>
                        <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(hotel._id)} style={{ marginRight: '10px', cursor: 'pointer', color: '#007bff' }} />
                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(hotel._id)} style={{ cursor: 'pointer', color: '#dc3545' }} />
                    </div>
                )}
            </div>
        ));
    };

    const filteredHotels = searchQuery
        ? hotels.filter(hotel =>
            String(hotel.hotelName)
                .trim()
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase())
        )
        : hotels;

    return (
        <>
            <section style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?fm=jpg&q=60&w=3000&ixlib.rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fHww')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '90%',
                        maxWidth: '800px'
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>Latest reviews. Lowest prices.</h1>
                        <div style={{
                            width: '100%',
                            marginBottom: '20px'
                        }}>
                            <input
                                type="text"
                                placeholder="Search by hotel"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '15px 20px',
                                    border: 'none',
                                    borderRadius: '30px',
                                    fontSize: '1.2rem',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    color: '#333'
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', marginTop: '100px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2>Travellers' Choice: Hotels</h2>
                    <div>
                        <Link to='/booking' style={{ textDecoration: 'none', color: '#9370DB', marginRight: '10px' }}>Book Now</Link>
                        {isAdmin && <Link to="/add-hotel" style={{ textDecoration: 'none', color: '#9370DB' }}>Add</Link>}
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {renderHotelCards(filteredHotels)}
                </div>
            </div>
        </>
    );
};

export default Hotel;