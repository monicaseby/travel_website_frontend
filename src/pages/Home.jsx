import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    
    const sectionStyle = {
        backgroundImage: 'url(https://wallpaperbat.com/img/809796-travel-wallpaper-travel-wallpaper-travel-wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        minHeight: '100vh',
        color: 'white',
    };

    const heroContentStyle = {
        color: 'white',
    };

    const agencyTagStyle = {
        fontSize: '1.2rem',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '20px',
    };

    const heroTitleStyle = {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        lineHeight: '1.2',
    };

    const heroTextStyle = {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '40px',
        color: 'rgba(255, 255, 255, 0.8)',
    };

    const exploreButtonStyle = {
        padding: '15px 35px',
        fontSize: '1.2rem',
        backgroundColor: '#FFA500',
        borderColor: '#FFA500',
        borderRadius: '30px',
        fontWeight: 'bold',
        marginTop:'45px'
    };

    const statsStyle = {
        display: 'flex',
        gap: '40px',
    };

    const statItemStyle = {
        textAlign: 'center',
    };

    const statNumberStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        display: 'block',
    };

    const statLabelStyle = {
        fontSize: '1.1rem',
        display: 'block',
        color: 'rgba(255, 255, 255, 0.7)',
    };

    const joinUsStyle = {
        borderLeft: '2px solid rgba(255, 255, 255, 0.5)',
        paddingLeft: '40px',
    };

    const avatarGroupStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
    };

    const avatarStyle = {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        margin: '0 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const addButton = {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: 'hsla(40, 89.80%, 49.80%, 0.88)',
        margin: '0 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        color: 'white',
        fontSize: '1.8rem',
        cursor: 'pointer',
    };

    const tiltedImageStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease-in-out',
    };



    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const destinations = [
        {
            image: "https://www.tripsavvy.com/thmb/x1afjpa58cIAZPCBU2c6l0vO-z4=/2121x1414/filters:fill(auto,1)/chureito-pagoda-and-mt-fuji-5c2fd0d546e0fb00015d4ed0.jpg",
            name: "Japan",
            duration: "14 Days",
            capacity: "25 People",
            price: "$1.563",
        },
        {
            image: "https://studyinginswitzerland.com/wp-content/uploads/2019/09/damian-markutt-eCkmZ7f8oWY-unsplash.jpg",
            name: "Swiss",
            duration: "7 Days",
            capacity: "25 People",
            price: "$3.563",
        },
        {
            image: "https://cdn.audleytravel.com/1024/731/79/1021746-temples-of-bagan.jpg",
            name: "Myanmar",
            duration: "7 Days",
            capacity: "15 People",
            price: "$2.563",
        },
        {
            image: "https://www.travelandleisure.com/thmb/5_0v1GoRuI-Aqapsll7wfXP8P7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-air-balloons-scenic-cappadocia-turkey-HOTAIR0605-2d274da1dbaf40cda6c632594a52e08c.jpg",
            name: "Turkey",
            duration: "14 Days",
            capacity: "10 People",
            price: "$5.963",
        },
    ];




    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };


    const reviews = [
        {
          id: 1,
          userImage: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png', 
          reviewTitle: 'Review for: 5D/4N Benaras tour from Kolkata',
          rating: 4,
          reviewText:
            'I think that I received more than what I paid for. They saw to it that I had the best experience of Taj I was supposed to take the train but because of a festival going on, train tickets were put on waiting list and instead of this tour company cancelling my booking, theyve provided me a private car from Deini to Agra.',
          userName: 'Susafar User',
          publishDate: '20 days ago',
        },
        {
          id: 2,
          userImage: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg', 
          reviewTitle: 'Review for: 3D/2N Rajasthan tour from Kolkata',
          rating: 5,
          reviewText:
            'I think that I received more than what I paid for. They saw to it that I had the best experience of Taj I was supposed to take the train but because of a festival going on, train tickets were put on waiting list and instead of this tour company cancelling my booking, theyve provided me a private car from Deini to Agra.',
          userName: 'Susafar User',
          publishDate: '20 days ago',
        },
        
        {
            id: 3,
            userImage: "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg",
            reviewTitle: "Best Trip ever!",
            rating: 5,
            reviewText: "This tour was amazing. The guides were very knowledgeable and the activities were well planned.",
            userName: "Traveler 1",
            publishDate: "1 week ago"
        },
        {
            id: 4,
            userImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
            reviewTitle: "Great value for money",
            rating: 4,
            reviewText: "I was impressed with the quality of the tour for the price. Would definitely recommend.",
            userName: "Explorer 2",
            publishDate: "2 weeks ago"
        },
    
      ];
    
      const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    
      const handlePrevReview = () => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
      };
    
      const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const visibleReviews = [
        reviews[currentReviewIndex],
        reviews[(currentReviewIndex + 1) % reviews.length],
      ];
    

    return (
        <>
            <section style={sectionStyle}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <div style={heroContentStyle}>
                                <Button className='bg-black' style={{
                                    padding: '10px 35px',
                                    fontSize: '1.2rem',
                                    backgroundColor: 'black',
                                    width: "300px",
                                    borderRadius: '30px',
                                }} >Travel & Tours Agency</Button>
                                <h1 style={heroTitleStyle}>Adventures That<br />Redefine Travel.</h1>
                                
                                <Link to='/trippackage' className="btn bg-warning" style={exploreButtonStyle}>Explore Now</Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} style={{ position: 'relative', marginTop: '30px', paddingLeft: "350px" }}>
                            <div style={{
                                ...tiltedImageStyle,
                                backgroundImage: 'url(https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/bangkok-thailand-DGYKT6K.jpg)',
                                top: '0',
                                right: '50px',
                                transform: 'rotate(5deg)',
                                zIndex: 2,
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'rotate(5deg)';
                                }}
                            ></div>
                            <div style={{
                                ...tiltedImageStyle,
                                backgroundImage: 'url(https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/beratan-temple-at-sunrise-in-bali-i-NRFGUXX.jpg)',
                                top: '100px',
                                right: '0',
                                transform: 'rotate(-5deg)',
                                zIndex: 1,
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05) rotate(-5deg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'rotate(-5deg)';
                                }}
                            ></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={{ marginTop: '50px', textAlign: 'center' }}>
                            <div style={statsStyle}>
                                <div style={statItemStyle}>
                                    <span style={statNumberStyle}>356+</span>
                                    <span style={statLabelStyle}>Trip Destinations</span>
                                </div>
                                <div style={statItemStyle}>
                                    <span style={statNumberStyle}>236k+</span>
                                    <span style={statLabelStyle}>Client Satisfied</span>
                                </div>
                                <div style={{ ...statItemStyle, ...joinUsStyle }}>
                                    <span style={statLabelStyle}>People Join us</span>
                                    <div style={avatarGroupStyle}>
                                        <div style={{ ...avatarStyle, backgroundImage: 'url(https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/smile-for-travel-summer-S5SJ5XR.jpg)' }}></div>
                                        <div style={{ ...avatarStyle, backgroundImage: 'url(https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/photographer-in-nature-h-HW9V9BM-2048x1365.jpg)' }}></div>
                                        <div style={{ ...avatarStyle, backgroundImage: 'url(https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/happy-young-tourist-wit-BN3LHVL.jpg)' }}></div>
                                        <button style={addButton}>+</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            
          
                
            

            <section className="trending-destinations" style={{ padding: '50px 0', backgroundColor: '#f9f9f9', marginTop: "0px" }}>
                <Container>
                    <Row className="justify-content-center text-center mb-4">
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <div>
                                <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#333' }} className='text-warning'>
                                    Trending Destinations
                                </span>
                            </div>
                            <h1 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '10px', color: '#333' }}>
                                Top Rated Destinations for Your Next Adventure.
                            </h1>
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-end">
                            <Button
                                variant="primary"
                                style={{
                                    backgroundColor: '#9370DB',
                                    borderColor: '#9370DB',
                                    color: 'white',
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                }}
                            >
                                Explore More
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row>
                                <Col xs={12} className='mb-4'>
                                    <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '300px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <Card.Img variant="top" src={destinations[0].image} style={{ height: '220px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '50%', padding: '5px' }}>
                                                <svg xmlns="https://www.tripsavvy.com/thmb/x1afjpa58cIAZPCBU2c6l0vO-z4=/2121x1414/filters:fill(auto,1)/chureito-pagoda-and-mt-fuji-5c2fd0d546e0fb00015d4ed0.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '5px', color: '#333' }} className='text-warning'>{destinations[0].name}</Card.Title>
                                            <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.5' }} className='d-flex justify-content-between'>
                                                {destinations[0].duration} <span style={{ marginLeft: '20px' }}>{destinations[0].capacity}</span> <span style={{ marginLeft: '20px' }}>{destinations[0].price}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} className='mb-4'>
                                    <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '300px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <Card.Img variant="top" src={destinations[1].image} style={{ height: '220px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '50%', padding: '5px' }}>
                                                <svg xmlns="https://studyinginswitzerland.com/wp-content/uploads/2019/09/damian-markutt-eCkmZ7f8oWY-unsplash.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '5px', color: '#333' }} className='text-warning'>{destinations[1].name}</Card.Title>
                                            <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.5' }} className='d-flex justify-content-between'>
                                                {destinations[1].duration} <span style={{ marginLeft: '20px' }}>{destinations[1].capacity}</span> <span style={{ marginLeft: '20px' }}>{destinations[1].price}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                            <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '625px' }}>
                                <div style={{ position: 'relative' }}>
                                    <Card.Img variant="top" src={destinations[2].image} style={{ height: '540px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255, 255, 0.8)', borderRadius: '50%', padding: '5px' }}>
                                        <svg xmlns="https://images.hdqwalls.com/download/forest-landscape-mountain-nature-river-scenic-4k-lq-1920x1080.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '5px', color: '#333' }} className='text-warning'>{destinations[2].name}</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.5' }} className='d-flex justify-content-between'>
                                        {destinations[2].duration} <span style={{ marginLeft: '20px' }}>{destinations[2].capacity}</span> <span style={{ marginLeft: '20px' }}>{destinations[2].price}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                            <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '625px' }}>
                                <div style={{ position: 'relative' }}>
                                    <Card.Img variant="top" src={destinations[3].image} style={{ height: '540px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '50%', padding: '5px' }}>
                                        <svg xmlns="https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/tourist-friends-looking-and-s-BBTU2FW.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '5px', color: '#333' }} className='text-warning'>{destinations[3].name}</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.5' }} className='d-flex justify-content-between'>
                                        {destinations[3].duration} <span style={{ marginLeft: '20px' }}>{destinations[3].capacity}</span> <span style={{ marginLeft: '20px' }}>{destinations[3].price}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* Left Column (Writings) */}
                <div style={{ flex: '1 1 50%', padding: '20px' }}>
                    <span style={{ color: '#9370DB', fontWeight: 'bold', marginBottom: '10px', display: 'block', fontSize: '1.3rem' }} className='text-warning'>
                        About us
                    </span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
                        Crafting Unforgettable Adventures
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                        We specialize in crafting unforgettable adventures, tailored to your dreams. Let us take you on a journey that will create lasting memories. From breathtaking landscapes to immersive cultural experiences, we handle every detail so you can focus on the adventure.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                        Our expert guides and personalized itineraries ensure a seamless and enriching travel experience, every time.
                    </p>
                    <button
                        style={{
                            backgroundColor: '#9370DB',
                            color: 'white',
                            padding: '15px 30px',
                            border: 'none',
                            borderRadius: '25px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8060C0')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#9370DB')}
                    >
                        Explore More
                    </button>
                </div>

                <div style={{ flex: '1 1 50%', padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ position: 'relative' }}>
                        <img
                            src="https://images.hdqwalls.com/download/forest-landscape-mountain-nature-river-scenic-4k-lq-1920x1080.jpg"
                            alt="Mountain Landscape"
                            style={{ width: '100%', maxWidth: '500px', borderRadius: '8px', display: 'block', height: '400px', objectFit: 'cover' }}
                        />
                        <img
                            src="https://templates.studioniskala.com/odynest/wp-content/uploads/sites/6/2025/03/tourist-friends-looking-and-s-BBTU2FW.jpg"
                            alt="People Traveling"
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '-50px',
                                width: '220px',
                                height: "180px",
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                border: '8px solid white',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div
                style={{
                    maxWidth: '1200px',
                    margin: '40px auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block', color: '#333' }}>
                        25+
                    </span>
                    <span style={{ fontSize: '1rem', color: '#666' }}>Years Of Experience</span>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block', color: '#333' }}>
                        356+
                    </span>
                    <span style={{ fontSize: '1rem', color: '#666' }}>Trip Destinations</span>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block', color: '#333' }}>
                        236k+
                    </span>
                    <span style={{ fontSize: '1rem', color: '#666' }}>Client Satisfied</span>
                </div>
            </div>
        </section>
            <section
                style={{
                    position: 'relative', 
                    padding: '80px 20px',
                    textAlign: 'center',
                    color: 'white',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute', 
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(http://vastphotos.com/files/uploads/photos/10252/mountains-in-autumn-landscape-l.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        zIndex: -2,
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.99), transparent)',
                        zIndex: -1,
                    }}
                />


                <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Tailored Adventures for Every Explorer</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', marginBottom: '20px' }}>
                        <div
                            style={{
                                flex: '1',
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease',
                                border: hoveredCard === 0 ? '2px solid #9370DB' : '1px solid white',
                            }}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>01</span>
                                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>+</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Custom Adventure Itineraries</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Craft personalized journeys tailored to your unique interests and desires.</p>
                        </div>

                        <div
                            style={{
                                flex: '1',
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease',
                                border: hoveredCard === 1 ? '2px solid #9370DB' : '1px solid white',
                            }}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>02</span>
                                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>+</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Extreme & Outdoor Experiences</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Embark on thrilling adventures with activities like trekking, rafting, and climbing.</p>
                        </div>

                        <div
                            style={{
                                flex: '1',
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease',
                                border: hoveredCard === 2 ? '2px solid #9370DB' : '1px solid white',
                            }}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>03</span>
                                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>+</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>VIP Local Access</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Gain exclusive access to hidden gems and local experiences beyond typical tours.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
                        <div
                            style={{
                                flex: '1',
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease',
                                border: hoveredCard === 3 ? '2px solid #9370DB' : '1px solid white',
                            }}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>04</span>
                                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>+</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Hassle-Free Travel Management</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Enjoy seamless travel arrangements, including flights, accommodations, and transportation.</p>
                        </div>

                        <div
                            style={{
                                flex: '1',
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease',
                                border: hoveredCard === 4 ? '2px solid #9370DB' : '1px solid white',
                            }}
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={(e) => e.currentTarget.style.
                                transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>05</span>
                                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>+</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Sustainable & Eco-Friendly Journeys</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Travel responsibly with eco-conscious itineraries that minimize environmental impact.</p>
                        </div>

                        <div
                            style={{
                                flex: '1',
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease',
                                border: hoveredCard === 5 ? '2px solid #9370DB' : '1px solid white',
                            }}
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>06</span>
                                <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>+</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', }}>24/7 Dedicated Travel Support</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Enjoy peace of mind with round-the-clock assistance from our expert travel team.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                        <h3 className=" mb-2 text-warning" style={{ fontSize: '1.3rem',fontWeight: 'bold'}}>Why Choose Us</h3>
                        <h2 className="fw-bold mb-4">Travel Beyond the Ordinary</h2>

                        {[
                            { number: '01', title: 'Personalized Adventures, No Generic Trips', text: 'Every itinerary is tailored to your interests, whether you crave adrenaline-pumping action or immersive cultural experiences.' },
                            { number: '02', title: 'Exclusive Access to Hidden Gems', text: 'Go beyond the tourist hotspots with VIP access to secret locations, private tours, and authentic local encounters.' },
                            { number: '03', title: 'Seamless, Hassle-Free Travel', text: 'From flights to accommodations, we handle every detail—so you can focus on enjoying the adventure.' },
                            { number: '04', title: 'Perfect Balance of Thrill & Comfort', text: 'We combine high-energy activities with time to relax, ensuring an adventure that is both exciting and refreshing.' }
                        ].map((item, index) => (
                            <div key={index} className="d-flex align-items-start mb-3">
                                <span className="fs-2  me-3 text-warning">{item.number}</span>
                                <div>
                                    <h4 className=" mb-1">{item.title}</h4>
                                    <p className="text-muted">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </Col>

                    <Col xs={12} lg={6}>
                        <video 
                            width="100%" 
                            height="auto" 
                            autoPlay 
                            loop 
                            muted 
                            
                            className="rounded shadow"
                        >
                            <source src="https://videos.pexels.com/video-files/3018533/3018533-hd_1920_1080_24fps.mp4" type="video/mp4" />
                        </video>
                    </Col>
                </Row>
            </Container>
        </section>

        <section 
      style={{
        position: 'relative', 
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden', 
    }}
>
    <div
        style={{
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://i.pinimg.com/originals/2a/8f/2d/2a8f2d9a676f0f5df5887f72984da59a.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: -2,
        }}
    />

    <div
        style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.99), transparent)',
            zIndex: -1,
        }}
    />
      <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#ccc' }}>Are You Ready To Travel?</h3>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Your Next Great Adventure Starts Here</h2>
      <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>- Let's Make It Unforgettable</p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to='/trippackage' className='btn'
          style={{ 
            backgroundColor: '#ff9800', 
            color: 'white', 
            padding: '15px 30px', 
            border: 'none', 
            borderRadius: '5px', 
            fontSize: '1.1rem', 
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Plan Your Trip
       </Link>
        
      </div>
    </section>

    
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>
          Know more about our Happy Customers
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
            flexWrap: 'wrap', 
          }}
        >
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              style={{
                width: '480px',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textAlign: 'left',
                backgroundColor: '#f9f9f9',
                marginBottom: '20px', 
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={review.userImage}
                  alt="User Profile"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '5px' }}>
                    {review.reviewTitle}
                  </h3>
                  <div style={{ color: '#ffc107' }}>
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '10px' }}>
                {review.reviewText}
              </p>
              <p style={{ fontSize: '0.8rem', color: '#888' }}>
                {review.userName} | Published {review.publishDate}
              </p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', }}>
          <button style={{backgroundColor:"transparent", border:'none', color:'#9370DB',fontSize:'1.8rem'}} onClick={handlePrevReview}>←</button>
          <button style={{backgroundColor:"transparent", border:'none', color:'#9370DB',fontSize:'1.8rem'}} onClick={handleNextReview}>→</button>
        </div>
      </section>

        </>
    );
};

export default Home;