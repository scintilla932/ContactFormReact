import React from 'react'

const Navbar = () => {
    return (
        <nav id="navbar">
        <div className="container">
            <span className="brand-logo">Ikigai</span>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </nav>
    ) 
}

export default Navbar