import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const TripPackage = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user?.username === 'admin';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('https://travel-website-backend-hdgm.onrender.com/packages');
                setPackages(response.data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };
        fetchPackages();
    }, []);

    const fetchPackagesAgain = async () => {
        try {
            const response = await axios.get('https://travel-website-backend-hdgm.onrender.com/packages');
            setPackages(response.data);
        } catch (error) {
            console.error('Error fetching packages:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-package/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://travel-website-backend-hdgm.onrender.com/packages/${id}`);
            fetchPackagesAgain();
        } catch (error) {
            console.error('Error deleting package:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const renderPackageCards = (packagesToRender) => {
        return packagesToRender.map((pkg, index) => (
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
                    <Link to='/booking'>
                        <img src={`https://travel-website-backend-hdgm.onrender.com/uploads/${pkg.image}`} alt={pkg.tourpackageName} style={{
                            width: '100%',
                            height: '180px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                        }} />
                    </Link>
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
                <h4 style={{ margin: '8px 0', fontSize: '1.1rem', fontWeight: '600' }}>{pkg.tourpackageName}</h4>
                <p style={{ fontSize: '0.9rem', margin: '4px 0', color: '#555' }}>Price: ₹{pkg.price}</p>
                <p style={{ fontSize: '0.9rem', margin: '4px 0', color: '#555' }}>Duration: {pkg.duration}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.9rem', margin: '4px 0', color: 'orange' }}>
                        Updated on: {formatDate(new Date())}
                    </p>
                </div>
                {pkg.tourpackageName && <p style={{ fontSize: '0.8rem', margin: '4px 0', color: '#888' }}>{pkg.tourpackageName}</p>}
                {isAdmin && (
                    <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'end' }}>
                        <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(pkg._id)} style={{ marginRight: '10px', cursor: 'pointer', color: '#007bff' }} />
                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(pkg._id)} style={{ cursor: 'pointer', color: '#dc3545' }} />
                    </div>
                )}
            </div>
        ));
    };

    const filteredPackages = searchQuery
        ? packages.filter(pkg =>
            String(pkg.tourpackageName)
                .trim()
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase())
        )
        : packages;

    return (
        <>
            <section style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url('https://media.istockphoto.com/id/1440399157/photo/international-airport-terminal-asian-beautiful-woman-with-luggage-and-walking-in-airport.jpg?s=612x612&w=0&k=20&c=RqmI0KG_pnEb_GmWLC6pY5MoV75JBt1nU1L9dStkJys=')`,
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
                        <div style={{
                            width: '100%',
                            marginBottom: '20px'
                        }}>
                            <input
                                type="text"
                                placeholder="Search by place"
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
                        <div style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold'
                        }}>
                            Explore the Best of the World
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', marginTop: '100px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2>Travellers' Choice: Packages</h2>
                    <div>
                        <Link to='/booking' style={{ textDecoration: 'none', color: '#9370DB', marginRight: '10px' }}>Book Now</Link>
                        {isAdmin && <Link to="/add-package" style={{ textDecoration: 'none', color: '#9370DB' }}>Add</Link>}
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {renderPackageCards(filteredPackages)}
                </div>
            </div>
        </>
    );
};

export default TripPackage;