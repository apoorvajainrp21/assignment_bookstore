import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <h1 className="main-title text-center">Welcome to BOOKWORLD!</h1>

            <p className="main-para text-center">Register or LogIn to Explore the world of Books.</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button id="login-btn" className="primary-button"><span>LOG IN</span></button>
                </Link> <br></br>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>REGISTER </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}