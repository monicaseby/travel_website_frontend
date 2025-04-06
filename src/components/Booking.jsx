// Booking.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useBookingContext } from './BookingContext';

const Booking = () => {
    const [packages, setPackages] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [persons, setPersons] = useState('');
    const [date, setDate] = useState('');

    const { toggleRefreshBookings } = useBookingContext();

    useEffect(() => {
        const fetchPackagesAndHotels = async () => {
            try {
                const packagesResponse = await axios.get('https://travel-website-backend-hdgm.onrender.com/packages');
                setPackages(packagesResponse.data);

                const hotelsResponse = await axios.get('https://travel-website-backend-hdgm.onrender.com/hotels');
                setHotels(hotelsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPackagesAndHotels();
    }, []);

    const handlePackageChange = async (e) => {
        const packageId = e.target.value;
        if (packageId) {
            try {
                const packageResponse = await axios.get(`https://travel-website-backend-hdgm.onrender.com/packages/${packageId}`);
                setSelectedPackage(packageResponse.data);
            } catch (error) {
                console.error('Error fetching package details:', error);
                console.error('Axios error response:', error.response);
                console.error('Axios error request:', error.request);
            }
        } else {
            setSelectedPackage(null);
        }
        setSelectedHotel(null);
    };

    const handleHotelChange = async (e) => {
        const hotelId = e.target.value;
        if (hotelId) {
            try {
                const hotelResponse = await axios.get(`https://travel-website-backend-hdgm.onrender.com/hotels/${hotelId}`);
                setSelectedHotel(hotelResponse.data);
            } catch (error) {
                console.error('Error fetching hotel details:', error);
            }
        } else {
            setSelectedHotel(null);
        }
    };

    const handleBookNow = async () => {
        if (!username || !email || !selectedPackage || !persons || !date) {
            toast.error('Please fill in all required fields.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: { backgroundColor: '#FF6347', color: 'white' }
            });
            return;
        }

        try {
            const bookingData = {
                name: username,
                email: email,
                packageName: selectedPackage.tourpackageName,
                hotelName: selectedHotel ? selectedHotel.hotelName : null,
                persons: persons,
                date: date,
            };

            await axios.post('https://travel-website-backend-hdgm.onrender.com/bookings', bookingData);
            toast.success('Thank you for booking. A payment link will be sent to your email.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: { backgroundColor: '#9370DB', color: 'white' }
            });
            toggleRefreshBookings();
        } catch (error) {
            console.error('Booking error:', error);
            toast.error('Booking failed. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: { backgroundColor: '#FF6347', color: 'white' }
            });
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '90px auto' }} className="booking-container">
            <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: "center" }}>Booking Form</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                <div style={{ width: '48%' }} className="client-details">
                    <h2>Client Details</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username *</label>
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email *</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="package" style={{ display: 'block', marginBottom: '5px' }}>Package *</label>
                            <select id="package" onChange={handlePackageChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                                <option value="">Select a package</option>
                                {packages.map(pkg => (<option key={pkg._id} value={pkg._id}>{pkg.tourpackageName}</option>))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="hotel" style={{ display: 'block', marginBottom: '5px' }}>Hotel (optional)</label>
                            <select id="hotel" onChange={handleHotelChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                                <option value="">Select a hotel (optional)</option>
                                {hotels.map(hotel => (<option key={hotel._id} value={hotel._id}>{hotel.hotelName}</option>))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="persons" style={{ display: 'block', marginBottom: '5px' }}>Persons *</label>
                            <input type="number" id="persons" value={persons} onChange={(e) => setPersons(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="date" style={{ display: 'block', marginBottom: '5px' }}>Date *</label>
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Add your message (optional)</label>
                        <textarea id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', resize: 'vertical' }}></textarea>
                    </div>
                    <button onClick={handleBookNow} style={{ backgroundColor: '#9370DB', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>
                        Book Now
                    </button>
                </div>

                <div style={{ width: '48%', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }} className="booking-details">
                    <h2>Booking Details</h2>
                    <hr style={{ borderTop: '1px solid #eee', margin: '15px 0' }} />

                    {selectedPackage && (
                        <div>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Package:</strong>
                                <p>{selectedPackage.tourpackageName}</p>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Price:</strong>
                                <p>₹{selectedPackage.price}</p>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Duration:</strong>
                                <p>{selectedPackage.duration}</p>
                            </div>
                            {selectedPackage.image && (<img src={`https://travel-website-backend-hdgm.onrender.com/uploads/${selectedPackage.image}`} alt={selectedPackage.tourpackageName} style={{ maxWidth: '100%', height: 'auto' }} />)}
                        </div>
                    )}

                    {selectedHotel && (
                        <div>
                            <hr style={{ borderTop: '1px solid #eee', margin: '15px 0' }} />
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Hotel:</strong>
                                <p>{selectedHotel.hotelName}</p>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Hotel Price per day:</strong>
                                <p>₹{selectedHotel.pricePerDay}</p>
                            </div>
                            {selectedHotel.image && (<img src={`https://travel-website-backend-hdgm.onrender.com/uploads/${selectedHotel.image}`} alt={selectedHotel.hotelName} style={{ maxWidth: '100%', height: 'auto' }} />)}
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Booking;
