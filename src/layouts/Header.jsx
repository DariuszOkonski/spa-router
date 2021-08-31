import React from 'react'
import '../styles/Header.css';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import { Route } from 'react-router-dom';

const Header = () => {
    return ( 
        <>
            <Route exact path="/" render={() => (
                <img src={img1} alt="city" />
            )} />

            <Route path="/products" render={() => (
                <img src={img2} alt="city" />
            )} />

            <Route path="/contact" render={() => (
                <img src={img3} alt="city" />
            )} />

            <Route path="/admin" render={() => (
                <img src={img2} alt="city" />
            )} />
        </>
     );
}
 
export default Header;