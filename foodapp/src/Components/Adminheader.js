import React from "react";
import logo from '../images/logo.png';
import '../Styles/Adminheader.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Adminheader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className="navbar">
                <a className='atag' href='/'><img src={logo} alt="logo" className='logo' /></a>
                <h3>Swiggy</h3>
            </div>
            <div className="side-bar">
                <ul>
                    <li className={location.pathname === '/admin/upload' ? 'active' : ''} onClick={() => navigateTo('/admin/upload')}>Upload Items</li>
                    <li className={location.pathname === '/admin/update' ? 'active' : ''} onClick={() => navigateTo('/admin/update')}>Update Items</li>
                    <li className={location.pathname === '/admin/users' ? 'active' : ''} onClick={() => navigateTo('/admin/users')}>Users</li>
                    <li onClick={() => navigateTo('/admin')}>Log out</li>
                </ul>
            </div>
        </div>
    )
}

export default Adminheader;
