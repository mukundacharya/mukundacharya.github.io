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
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#about_me">About me</a>
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
                    <span className='nameText'>Mukund Acharya</span>
                    <br />
                    <span className='subText'>Software Engineer. Technology enthusiast. Coder.</span>
                </div>
                <div className='aboutMeDiv' id='about_me'>
                    <span className='aboutMeTitle'>About Me</span>
                    <div className='aboutMePara'>
                        <p><strong>Hello World!</strong>👋</p>
                        <p>
                            I am a Software Engineer at <a id="paraLink" href="https://danskebank.com/" target="_blank" rel="noopener noreferrer">Danske Bank</a> with
                            hands-on experience in full-stack technologies like React.JS and C# .NET/.NET Core frameworks.
                        </p>
                        <p>
                            I always had a keen interest in computers and coding since I was a kid. To understand the nitty-gritty
                            of computer technogies, I completed my bachelor's in Computer Science from The National Institute Of
                            Engineering, Mysuru <a id="paraLink" href="https://nie.ac.in/" target="_blank" rel="noopener noreferrer">(NIE)</a>
                        </p>
                        <p>
                            I am passionate towards solving real world problems and constantly improving my
                            technical and analytical abilities.If you want to get in touch, connect via LinkedIn or 
                            mail!
                        </p>
                        <div className='smButtonGroup'>
                            <button className='smButtons' title='LinkedIn'><a id='smLinkId' href="https://www.linkedin.com/in/mukund-n-acharya/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></button>
                            <button className='smButtons' title='Mail'><a id='smLinkId' href="mailto: mukumdacharya1@gmail.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
