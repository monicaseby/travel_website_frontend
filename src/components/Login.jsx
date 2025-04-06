// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://travel-website-backend-hdgm.onrender.com/login', { email, password });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redirect to the originally intended page or to /hotel if none exists
            const redirectTo = location.state?.from?.pathname || '/hotel';
            navigate(redirectTo);
        } catch (error) {
            console.error(error.response?.data?.message || 'Login failed');
            setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://i.pinimg.com/originals/ec/be/c3/ecbec39567de2288e3891a4e395ff9e3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
        }}>
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: '40px',
                borderRadius: '8px',
                width: '400px',
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Login Your Account</h2>

                {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white', color: 'black' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white', color: 'black' }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h6>Don't have an account?<a href="/signup" style={{ color: '#9370DB' }}> SignUp</a> </h6>
                </div>

                <button onClick={handleLogin} style={{ backgroundColor: 'orange', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', width: '100%', cursor: 'pointer' }}>Log In</button>
            </div>
        </div>
    );
};

export default Login;