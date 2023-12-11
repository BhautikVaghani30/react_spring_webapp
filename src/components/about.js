// src/components/About.js
import '../index.css';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
const About = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Welcome to Our App', 'This is CRUD App'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
   
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="text-center mb-4">
                    <h1 className="display-4"> <span ref={el} />  
</h1>
                    <img
                        src="./img1.png"
                        alt="App Logo"
                        className="img-fluid rounded-circle mb-4"
                        style={{ maxWidth: '150px' }}
                    />
                </div>

                <p className="lead text-muted">
                    We are dedicated to providing a seamless experience for managing and organizing
                    your data with our app. Whether you're creating, updating, or deleting records,
                    our app makes it easy and efficient.
                </p>

                <h2 className="mb-4">Our Mission</h2>
                <p className="lead text-muted">
                        

                    Our mission is to empower users with a user-friendly and feature-rich application
                    that simplifies data management tasks. We strive to continually enhance the application
                    based on user feedback and evolving technological trends.
                    
                </p>

                <h2 className="mb-4">Key Features</h2>
                <ul className="list-group list">
                    <li className="list-group-item">Intuitive User Interface</li>
                    <li className="list-group-item">Effortless Data CRUD Operations</li>
                    <li className="list-group-item">Responsive Design for All Devices</li>
                    <li className="list-group-item">Secure Data Handling</li>
                    {/* Add more features as needed */}
                </ul>
            </div>
        </div>
    </div>
);
};

export default About;
