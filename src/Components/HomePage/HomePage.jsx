import './HomePage.css'
import logo from '../../assets/logo-color.png'
import profilepic from '../../assets/profilepic.jpg'
import mobileAppYellow from '../../assets/mobile-app-yellow.png'
import py from '../../assets/python.png'
import ai from '../../assets/ai.png'
import internet from '../../assets/internet.png'
import jv from '../../assets/java.png'
import opencv from '../../assets/opencv.png'
import reactIcon from '../../assets/react.png'
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
                            <a className="nav-link navLinks" href="#projects">Projects</a>
                        </li>
                        {/* <li class="nav-item">
                            <a className="nav-link" href="/">Certifications and Achivements</a>
                        </li> */}
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
                            <button className='smButtons' title='Github'><a id='smLinkId' href="https://github.com/mukundacharya" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a></button>
                        </div>
                    </div>
                </div>
                <div className='projectsDiv' id='projects'>
                    <span className='projectsTitle'>Projects</span>
                    <div className='projectsPara'>
                        <p>
                            Projects and demos have always helped me to understand a topic better than the theoritical
                            approach of learning. These are some of the projects I have created either for learning, solving
                            a real world problem or just to have fun!
                        </p>
                    </div>
                    <div className='projectsList'>
                        <div className='projects' id='covid19project'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={py} alt="Python" title='Python'></img>
                                <img className='techImage' src={ai} alt="AI" title='Artificial Intelligence'></img>
                                <img className='techImage' src={opencv} alt="OpenCV" title='OpenCV'></img>
                            </div>
                            <div className='projectHeading'>
                                <span>Covid-19 Safety Protocol Monitoring</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://ieeexplore.ieee.org/abstract/document/9544683" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right iconProject"></i>Published Paper</a></button>
                            </div>
                        </div>
                        <div className='projects' id='webportfolio'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={reactIcon} alt="ReactJS" title='ReactJS'></img>
                            </div>
                            <div className='projectHeading'>
                                <span>Mukund Acharya - My web portflio</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://mukundacharya.github.io/" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right iconProject"></i>Website</a></button>
                            </div>
                        </div>
                        <div className='projects' id='prodCatalog'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={internet} alt="Website" title='Website'></img>
                                <img className='techImage' src={py} alt="Python" title='Django - Python'></img>
                                <img className='techImage' src={mobileAppYellow} alt="Android App" title='Android App'></img>
                            </div>
                            <div className='projectHeading'>
                                <span className='projectHeading'>Product Catalogue - Web and Android</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://polynovaapp.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right iconProject"></i>Website</a></button>
                            </div>
                        </div>
                        <div className='projects' id='kankali'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={mobileAppYellow} alt="Android App" title='Android App'></img>
                            </div>
                            <div className='projectHeading'>
                                <span className='projectHeading'>Kannada Kali - Kannada learning App</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://github.com/mukundacharya/Kannada-Kali" target="_blank" rel="noopener noreferrer"><i class="bi bi-github iconProject"></i>Github</a></button>
                            </div>
                        </div>
                        <div className='projects' id='flappybird'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={py} alt="Python" title='Python'></img>
                                <img className='techImage' src={ai} alt="AI" title='Artificial Intelligence'></img>
                            </div>
                            <div className='projectHeading'>
                                <span className='projectHeading'>AI plays Flappy Bird using PyGame and NEAT</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://github.com/mukundacharya/Flappy-Bird-using-PyGame-and-NEAT" target="_blank" rel="noopener noreferrer"><i class="bi bi-github iconProject"></i>Github</a></button>
                            </div>
                        </div>
                        <div className='projects' id='backyard'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={jv} alt="Java" title='Java Swing'></img>
                            </div>
                            <div className='projectHeading'>
                                <span className='projectHeading'>Backyard - A Residential Management Software</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://github.com/mukundacharya/Backyard-Residential-Software" target="_blank" rel="noopener noreferrer"><i class="bi bi-github iconProject"></i>Github</a></button>
                            </div>
                        </div>
                        <div className='projects' id='emot_det'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={py} alt="Python" title='Python'></img>
                                <img className='techImage' src={opencv} alt="OpenCV" title='OpenCV'></img>
                            </div>
                            <div className='projectHeading'>
                                <span className='projectHeading'>Emotion Detection using OpenCV and Keras</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://github.com/mukundacharya/Emotion-Detection-using-OpenCV-and-Keras" target="_blank" rel="noopener noreferrer"><i class="bi bi-github iconProject"></i>Github</a></button>
                            </div>
                        </div>
                        <div className='projects' id='steamBot'>
                            <div className='techImgDiv'>
                                <img className='techImage' src={py} alt="Python" title='Python'></img>
                            </div>
                            <div className='projectHeading'>
                                <span className='projectHeading'>SteamBot using BeautifulSoup and Python</span>
                            </div>
                            <div className='projectButtonDiv'>
                                <button className='projectButton'><a id='pButton' href="https://github.com/mukundacharya/Steam-Bot-using-BeautifulSoup-and-Python" target="_blank" rel="noopener noreferrer"><i class="bi bi-github iconProject"></i>Guthub</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='footerDiv'>
                <div className='footerButtons'>
                    <button title='LinkedIn'><a href="https://www.linkedin.com/in/mukund-n-acharya/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></button>
                    <button title='Mail'><a href="mailto: mukumdacharya1@gmail.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope"></i></a></button>
                    <button title='Github'><a href="https://github.com/mukundacharya" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a></button>
                </div>
            </div> */}
        </div>
    );
}

export default HomePage;
