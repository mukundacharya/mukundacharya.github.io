import './HomePage.css'
import logo from '../../assets/logo-color.png'
import profilepic from '../../assets/profilepic.jpg'
import React, { useState } from 'react';

const HomePage = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className='background'>
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark" id="nav1">
                <a class="navbar-brand" href="/">
                    <img src={logo} width="40" height="40" alt="" className='logo' />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a className="nav-link" href="/">About me</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link navLinks" href="/">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='mainDiv'>
                <div className='profilePic'>
                    <img className='profilePic' src={profilepic} alt="profilepic" />
                </div>
                <div className='nameDiv'>
                    <span className='helloText'>Hi, I am </span>
                    <br/>
                    <span className='nameText'>Mukund Acharya</span>
                    <br/>
                    <span className='subText'>Software Engineer. Technology enthusiast. Coder.</span>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
