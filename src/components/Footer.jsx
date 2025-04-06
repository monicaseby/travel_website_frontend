import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const clientLogoUrls = [
        'https://angular.preyantechnosys.com/assets/images/client/client-01.png',
        'https://angular.preyantechnosys.com/assets/images/client/client-02.png',
        'https://angular.preyantechnosys.com/assets/images/client/client-05.png',
        'https://angular.preyantechnosys.com/assets/images/client/client-04.png',
    ];

    return (
        <>
            <div className="client-logos">
                {clientLogoUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Client ${index + 1}`} className="client-logo" />
                ))}
            </div>

            <div className="footer-container">
                <div className="footer-overlay">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Newsletter Sign Up</h3>
                            <p>Sign Up for News And Special Offers</p>
                            <div className="newsletter">
                                <input type="email" placeholder="Enter Email Address" />
                                <button>Subscribe</button>
                                
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>Stay Connected</h3>
                            <p>Follow Us On Social Media Channels</p>
                            <div className="social-icons">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                            
                        </div>

                        <div className="footer-section">
                            <h3>About TravelMate</h3>
                            <p>Welcome to the best travel agency where you can find tons of tours to any place on Earth.</p>
                            <p className="highlight">Direct Interact Here</p>
                            <p className="phone">123 795 9841</p>
                        </div>

                        <div className="footer-section ">
                            <h3 className='mb-4'>Useful Links</h3>
                            <ul>
                                <li><a href="/trippackage">Tour Packages</a></li>
                                <li><a href="/hotel">Hotels</a></li>
                                <li><a href="/restuarant">Restaurants</a></li>
                                <li><a href="/contact">Get In Touch</a></li>
                                <li><a href="#">Plan Your Trip</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
       

                <div className="footer-bottom">
                    <p>Copyright 2025 TravelMate</p>
                    <div className="footer-links">
                        <a href="#">About Us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>

            <style>
                {`
                /* General Footer Styles */
                .client-logos {
                    background-color: #9370DB;
                    padding: 20px 0;
                    text-align: center;
                }
                .client-logo {
                    height: 50px;
                    margin: 0 10px;
                }

                .footer-container {
                    background-image: url('https://montrasio.net/media/posts/436/Landscape_Photography_The_Dolomites_Low_Wide_Nikon_D8_248f83fa-ad5a-409c-86ce-82f80c7c69c7.jpeg');
                    background-size: cover;
                    background-position: center;
                    color: white;
                    padding: 30px;
                    text-align: center;
                    position: relative;
                }
                .footer-overlay {
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 20px;
                    border-radius: 5px;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                }
                .footer-section {
                    padding: 0 15px;
                }
                .newsletter {
                    display: flex;
                    align-items: center;
                }
                .newsletter input {
                    padding: 8px;
                    border: 1px solid #555;
                    background: #333;
                    color: white;
                    flex: 1;
                }
                .newsletter button {
                    background-color: #ff6600;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    cursor: pointer;
                }
                .social-icons {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                .social-icons a {
                    color: lightblue;
                    font-size: 1.2rem;
                }
                .highlight {
                    background: red;
                    padding: 5px;
                    border-radius: 5px;
                    width: fit-content;
                    margin: 10px auto;
                }
                .phone {
                    font-size: 1.5rem;
                    text-align: center;
                }

                /* Footer Bottom Section */
                .footer-bottom {
                    border-top: 1px solid #444;
                    padding-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.7rem;
                    padding: 0 5px;
                }
                .footer-links a {
                    color: white;
                    text-decoration: none;
                    margin-right: 10px;
                }

                /* 🔹 Responsive Media Queries */
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr; /* Single-column layout */
                    }
                    .newsletter {
                        flex-direction: column;
                        gap: 10px;
                    }
                    .newsletter input {
                        width: 100%;
                    }
                    .newsletter button {
                        width: 100%;
                    }
                    .social-icons {
                        flex-direction: row;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: 10px;
                    }
                }
                `}
            </style>
        </>
    );
};

export default Footer;
