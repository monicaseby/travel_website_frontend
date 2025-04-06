// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://travel-website-backend-hdgm.onrender.com/signup', { username, email, password });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error(error.response?.data?.message || 'Signup failed');
            setError(error.response?.data?.message || 'Signup failed. Please try again.');
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
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Create Account</h2>

                {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white', color: 'black' }}
                    />
                </div>

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
                    <h6>Already have an Account?<a href="/login" style={{ color: '#9370DB' }}> Login</a> </h6>
                </div>

                <button onClick={handleSignup} style={{ backgroundColor: 'orange', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', width: '100%', cursor: 'pointer' }}>Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;