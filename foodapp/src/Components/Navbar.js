import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import '../Styles/Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false); // Check if token exists in localStorage

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setIsLoggedIn(false); // Update state
        navigate('/signin'); // Redirect to signin page
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className='navbar'>
            <a className='atag' href='/home'><img src={logo} alt="logo" className='logo' /></a>
            <ul className='nav-links'>
                <h4 className='others' onClick={() => navigateTo('/home')}>Home</h4>
                <ul className='nav-link'>
                    <li className='nav' onClick={() => navigateTo('/search2')}>Menu</li>
                    <li className='nav' onClick={() => navigateTo('/offers')}>Offers</li>
                    <li className='nav' onClick={() => navigateTo('/help')}>Help</li>
                    <li className='nav' onClick={() => navigateTo('/admin')}>Admin</li>
                    <li className='nav' onClick={() => navigateTo('/cart')}>Cart</li>
                    {isLoggedIn ? (
                        <>
                            <li className='nav' onClick={handleLogout}>Logout</li>
                            {/* Add other authenticated links here */}
                        </>
                    ) : (
                        <>
                            <li className='nav' onClick={() => navigateTo('/signin')}>Login</li>
                            {/* Add other unauthenticated links here */}
                        </>
                    )}
                </ul>
            </ul>
        </div>
    );
}

export default Navbar;
