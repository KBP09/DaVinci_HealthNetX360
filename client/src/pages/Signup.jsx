import React, { useState } from 'react';
import "../components/Login/Login.css";
import head from "../assets/Login/Heading.png";
import searchlens from "../assets/Login/searchlens.png";
import globe from "../assets/Login/globe.png";
import clock from "../assets/Login/clock.png";
import google from "../assets/Login/google.png";
import facebook from "../assets/Login/facebook.png";
import apple from "../assets/Login/apple.png";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'; // Ensure axios is imported

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreedToTerms: false,
    });

    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/signup", formData);
            if (res.data === "exists") {
                alert("User already exists, Please login");
            } else if (res.data === "not exists") {
                navigate("/"); 
            }
        } catch (e) {
            console.error(e);
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div>
            <div className="KBP_logcontainer">
                <div className="KBP_container">
                    <form className="KBP_form" onSubmit={submit}>
                        <h2 className="KBP_heading">Begin your journey</h2>

                        <div className="KBP_input-group1">
                            <div>
                                <h1>First Name</h1>
                                <input
                                    className="KBP_input"
                                    type="text"
                                    name="firstName"
                                    placeholder="Input first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <h1>Last Name</h1>
                                <input
                                    className="KBP_input"
                                    type="text"
                                    name="lastName"
                                    placeholder="Input last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="KBP_input-group">
                            <h1>Email</h1>
                            <input
                                className="KBP_input"
                                type="email"
                                name="email"
                                placeholder="example.email@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="KBP_input-group">
                            <h1>Password</h1>
                            <input
                                className="KBP_input"
                                type="password"
                                name="password"
                                placeholder="Enter at least 8+ characters"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="KBP_button" type="submit">Register</button>

                        <div className="KBP_or">OR</div>

                        <div className="KBP_social-login">
                            <button className="KBP_social-button"><img src={google} alt="google" /></button>
                            <button className="KBP_social-button"><img src={facebook} alt="facebook" /></button>
                            <button className="KBP_social-button"><img src={apple} alt="apple" /></button>
                        </div>

                        <div className="KBP_login-link">
                            Returning user? <Link to="/login" className="KBP_link">Login</Link>
                        </div>
                    </form>
                </div>
                <div className='KBP_graphics'>
                    <img src={head} alt="head" />
                    <div>
                        <img src={searchlens} alt="lens" />
                        <p>Find Doctors Near You and Book Appointments</p>
                    </div>
                    <div>
                        <img src={clock} alt="clock" />
                        <p>Find Doctors Near You and Book Appointments</p>
                    </div>
                    <div>
                        <img src={globe} alt="globe" />
                        <p>Find Doctors Near You and Book Appointments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
