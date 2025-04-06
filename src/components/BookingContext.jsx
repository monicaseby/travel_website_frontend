// BookingContext.jsx
import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [refreshBookings, setRefreshBookings] = useState(false);

    const toggleRefreshBookings = () => {
        setRefreshBookings((prev) => !prev);
    };

    return (
        <BookingContext.Provider value={{ refreshBookings, toggleRefreshBookings }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBookingContext = () => useContext(BookingContext);
