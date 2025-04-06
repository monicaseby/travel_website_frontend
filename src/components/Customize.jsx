import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Customize = () => {
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [selectedCompanion, setSelectedCompanion] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(''); // Initialize with empty string
    const [duration, setDuration] = useState('');

    const handleBudgetClick = (budget) => {
        setSelectedBudget(budget === selectedBudget ? null : budget);
    };

    const handleCompanionClick = (companion) => {
        setSelectedCompanion(companion === selectedCompanion ? null : companion);
    };

    const handleDestinationChange = (e) => {
        setSelectedDestination(e.target.value);
    };

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    const handleGenerateTrip = async () => {
        if (!selectedDestination || !duration || !selectedBudget || !selectedCompanion) {
            toast.error('Please fill in all fields to generate trip suggestions.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: { backgroundColor: '#9370DB', color: 'white' }
            });
            return;
        }

        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post('https://travel-website-backend-hdgm.onrender.com/preferences', {
                destination: selectedDestination,
                duration: parseInt(duration),
                budget: selectedBudget,
                companion: selectedCompanion,
                userId: user._id,
            });

            toast.success(response.data.message || "Processing your travel plan. Please hold on.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: { backgroundColor: '#9370DB', color: 'white' }
            });
            console.log('Preference saved successfully:', response.data.preference);
        } catch (error) {
            console.error('Error saving preference:', error);
            toast.error(error.response?.data?.message || 'Failed to save preferences. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: { backgroundColor: '#9370DB', color: 'white' }
            });
        }
        console.log({
            destination: selectedDestination,
            duration,
            budget: selectedBudget,
            companion: selectedCompanion,
        });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '90px auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>Tell us your travel preferences </h1>
            <p style={{ textAlign: 'center', marginBottom: '30px' }}>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

            {/* Destination */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="destination" style={{ display: 'block', marginBottom: '5px' }}>What is destination of choice?</label>
                <select
                    id="destination"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                    value={selectedDestination}
                    onChange={handleDestinationChange}
                >
                    <option value="">Select...</option>
                    <option value="beach">Beach Destination</option>
                    <option value="mountains">Mountain Destination</option>
                    <option value="city">City Destination</option>
                </select>
            </div>

            {/* Trip Duration */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="duration" style={{ display: 'block', marginBottom: '5px' }}>How many days are you planning your trip?</label>
                <input
                    type="number"
                    id="duration"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                    value={duration}
                    onChange={handleDurationChange}
                />
            </div>

            {/* Budget */}
            <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>What is your Budget?</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {['Cheap', 'Moderate', 'Luxury'].map((budget) => (
                        <div
                            key={budget}
                            style={{
                                width: '30%',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '20px',
                                textAlign: 'center',
                                marginBottom: '10px',
                                cursor: 'pointer',
                                backgroundColor: selectedBudget === budget ? '#f0f0f0' : 'transparent',
                            }}
                            onClick={() => handleBudgetClick(budget)}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = selectedBudget !== budget ? '#f9f9f9' : '#f0f0f0')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = selectedBudget === budget ? '#f0f0f0' : 'transparent')}
                        >
                            <strong>{budget}</strong>
                            <p style={{ fontSize: '0.9rem' }}>{getBudgetDescription(budget)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Travel Companions */}
            <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Who do you plan on traveling with on your next adventure?</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {['Just Me', 'A Couple', 'Family', 'Friends'].map((companion) => (
                        <div
                            key={companion}
                            style={{
                                width: '23%',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '20px',
                                textAlign: 'center',
                                marginBottom: '10px',
                                cursor: 'pointer',
                                backgroundColor: selectedCompanion === companion ? '#f0f0f0' : 'transparent',
                            }}
                            onClick={() => handleCompanionClick(companion)}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = selectedCompanion !== companion ? '#f9f9f9' : '#f0f0f0')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = selectedCompanion === companion ? '#f0f0f0' : 'transparent')}
                        >
                            <strong>{companion}</strong>
                            <p style={{ fontSize: '0.8rem' }}>{getCompanionDescription(companion)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Generate Trip Button */}
            <button
                style={{ backgroundColor: '#9370DB', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '200px', margin: '0 auto', display: 'block' }}
                onClick={handleGenerateTrip}
            >
                Request Suggestions
            </button>
            <ToastContainer />
        </div>
    );
};

// Helper Functions for Content
const getBudgetDescription = (budget) => ({ Cheap: 'Stay conscious of costs', Moderate: 'Keep costs on the average side', Luxury: 'Everything about cost' }[budget] || '');
const getCompanionDescription = (companion) => ({ 'Just Me': 'A solo traveler in exploration', 'A Couple': 'Two travels in tandem', Family: 'A group of fun loving kin', Friends: 'A bunch of thrill seekers' }[companion] || '');

export default Customize;