// App.jsx
import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Hotel from './pages/Hotel';
import TripPackage from './pages/TripPackage';
import Contact from './pages/Contact';
import Booking from './components/Booking';
import Customize from './components/Customize';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import AddPackage from './pages/AddPackage';
import EditPackage from './pages/EditPackage';
import AddHotel from './pages/AddHotel';
import EditHotel from './pages/EditHotel';
import { BookingProvider } from './components/BookingContext';

function App() {
    const isAuthenticated = localStorage.getItem('token');
    const location = useLocation();

    const ProtectedRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} />;
    };

    return (
        <BookingProvider>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotel" element={<ProtectedRoute><Hotel /></ProtectedRoute>} />
                    <Route path="/trippackage" element={<ProtectedRoute><TripPackage /></ProtectedRoute>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
                    <Route path="/customize" element={<ProtectedRoute><Customize /></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/add-package" element={<AddPackage />} />
                    <Route path="/edit-package/:id" element={<EditPackage />} />
                    <Route path="/add-hotel" element={<AddHotel />} />
                    <Route path="/edit-hotel/:id" element={<EditHotel />} />
                </Routes>
                <Footer />
            </>
        </BookingProvider>
    );
}

export default App;