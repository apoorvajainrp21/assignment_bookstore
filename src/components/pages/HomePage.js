import React from 'react'
import { Link } from 'react-router-dom'



export default function HomePage() {
    return (
        <div className="text-center">


            <div className="heading-hello">
                <h1 className="main-title home-page-title">  </h1>
            </div>
            <div className="explore">
                <a href="http://192.168.246.1:3000/">
                    <button id="btn-exp-home" className="button1"><span>EXPLORE BOOKS!</span></button>
                </a>
            </div>

            <div>
                <a href="http://127.0.0.1:5500/src/components/pages/authors.html">
                    <button id="btn-auth-home" className="button_authors"><span>FEATURED AUTHORS OF THE MONTH</span></button>
                </a>
            </div>
            <div>
                <Link to="/">
                    <button id="btn-log-home" className="primary-button"><span>LOG OUT</span></button>
                </Link>
            </div>




        </div >



    )
}


