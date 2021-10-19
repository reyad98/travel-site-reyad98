import React from 'react';

import useFirebase from '../../hooks/usefirebase';
import './Header.css'

const Header = () => {
     const {user,logOut} = useFirebase();
    return (
        <div>
           <div className="header">
            <nav>
                <a href="/home">Home</a>
                {/* <a href="/services">Services</a> */}
                <a href="/about">About us</a>
                <a href="/discover">Discover</a>
                <span style={{color:'white'}} >{user.displayName}</span>
               {
                   user.email ?
                   
                   <button className="logout" onClick={logOut}>Log out</button>
                   :
                      <a href="/login">Login</a>
                   // <NavLink to="/login">Login</NavLink>
               }

            </nav>
        </div>
        </div>
    );
};

export default Header;