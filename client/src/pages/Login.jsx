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
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/", {
                email,
                password
            });
            
            if (res.data === "exist") {
                navigate("/"); 
            } else if (res.data === "not exist") {
                alert("User does not exist, please sign up");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="KBP_logcontainer">
                <div className="KBP_container">
                    <form className="KBP_form" onSubmit={submit}>
                        <h2 className="KBP_heading">Welcome Back!</h2>

                        <div className="KBP_input-group">
                            <h1>Email</h1>
                            <input
                                className="KBP_input"
                                type="email"
                                name="email"
                                placeholder="example.email@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="KBP_input-group">
                            <h1>Password</h1>
                            <input
                                className="KBP_input"
                                type="password"
                                name="password"
                                placeholder="Enter at least 8+ characters"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="KBP_button" type="submit">Login</button>

                        <div className="KBP_or">OR</div>

                        <div className="KBP_social-login">
                            <button className="KBP_social-button"><img src={google} alt="google" /></button>
                            <button className="KBP_social-button"><img src={facebook} alt="facebook" /></button>
                            <button className="KBP_social-button"><img src={apple} alt="apple" /></button>
                        </div>

                        <div className="KBP_login-link">
                            New user? <Link to="/signup" className='KBP_link'>Sign Up</Link>
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
                        <img src={clock} alt="lens" />
                        <p>Find Doctors Near You and Book Appointments</p>
                    </div>
                    <div>
                        <img src={globe} alt="lens" />
                        <p>Find Doctors Near You and Book Appointments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
