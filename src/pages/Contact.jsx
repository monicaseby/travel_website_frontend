import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    
  return (
    <>
      <section style={{
        position: 'relative',
        height: 'auto', 
        minHeight: '500px', 
        backgroundImage: `url('https://angular.preyantechnosys.com/assets/images/slides/slider-mainbg-001.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px', 
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            textAlign: 'center',
            width: '90%',
            maxWidth: '1200px',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginTop: '40px', 
              marginBottom: '10px',
            }}>Contact us</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '20px',
                width: 'calc(50% - 40px)', 
                maxWidth: '250px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '10px',
              }}>
                <div style={{
                  backgroundColor: '#9370DB',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', fontSize: '1.8rem' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                  }}>Office</h3>
                  <p style={{
                    fontSize: '1rem',
                  }}>2443 Metro city, Lampung 45065</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '20px',
                width: 'calc(50% - 40px)',
                maxWidth: '250px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '10px',
              }}>
                <div style={{
                  backgroundColor: '#9370DB',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                }}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '1.8rem' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                  }}>Email</h3>
                  <p style={{
                    fontSize: '1rem',
                  }}>Hello@support.com</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '20px',
                width: 'calc(50% - 40px)',
                maxWidth: '250px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '10px',
              }}>
                <div style={{
                  backgroundColor: '#9370DB',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                }}>
                  <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '1.8rem' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                  }}>Whatsapp</h3>
                  <p style={{
                    fontSize: '1rem',
                  }}>123 795 9841</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 20px', textAlign: 'center' }}> 
        <h2 style={{ marginBottom: '30px' }}>Let's Talk</h2>
        <form style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          
          
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Query:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#9370DB',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;