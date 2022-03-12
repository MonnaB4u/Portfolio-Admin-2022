import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from './male.a82ab1cd.png'
import { UserContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate()
    return (
        <div className="">

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <a className="navbar-brand  text-white" href="/"> <img className="logo mx-3" src={img} alt="" /> {loggedInuser.name} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mlauto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/skill">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/achivment">Achivement</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">{loggedInuser.email ? "Log Out" : "LogIn"}  </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
