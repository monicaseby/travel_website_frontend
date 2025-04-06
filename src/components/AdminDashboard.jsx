import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBookingContext } from './BookingContext';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const { refreshBookings } = useBookingContext();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('https://travel-website-backend-hdgm.onrender.com/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        if (user && user.username === 'admin') {
            fetchBookings();
        }
    }, [user, refreshBookings]);

    const handleAcceptBooking = async (bookingId) => {
        console.log('Attempting to accept booking ID:', bookingId);
        try {
            const response = await axios.put(`https://travel-website-backend-hdgm.onrender.com/bookings/${bookingId}`, { status: 'Accepted' });
            console.log('Accept booking response:', response.data);
            setBookings(bookings.map(booking =>
                booking._id === bookingId ? { ...booking, status: 'Accepted' } : booking
            ));
        } catch (error) {
            console.error('Error accepting booking:', error);
            if (error.response) {
                console.error('Accept booking error details:', error.response.data);
            }
        }
    };

    const handleRejectBooking = async (bookingId) => {
        try {
            await axios.delete(`https://travel-website-backend-hdgm.onrender.com/bookings/${bookingId}`);
            setBookings(bookings.filter(booking => booking._id !== bookingId));
        } catch (error) {
            console.error('Error rejecting booking (deleting):', error);
            if (error.response) {
                console.error('Reject booking error details:', error.response.data);
            }
        }
    };

    if (!user || user.username !== 'admin') {
        return <div>Access Denied. You must be an admin to view this page.</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '90px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', textAlign: 'center' }}>Admin Dashboard - User Bookings</h2>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', border: '1px solid #ddd' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Username</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Email</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Package Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Hotel Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Persons</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Date</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap' }}>Status</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', whiteSpace: 'nowrap', textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking._id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.packageName}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.hotelName || 'N/A'}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.persons}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.date}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap' }}>{booking.status || 'Pending'}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', whiteSpace: 'nowrap', textAlign: 'center' }}>
                                    {!booking.status || booking.status === 'Pending' ? (
                                        <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                                            <button
                                                style={{ backgroundColor: '#5cb85c', color: 'white', padding: '6px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                                onClick={() => handleAcceptBooking(booking._id)}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                style={{ backgroundColor: '#d9534f', color: 'white', padding: '6px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                                onClick={() => handleRejectBooking(booking._id)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    ) : (
                                        <span>{booking.status}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;