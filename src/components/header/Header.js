import React from 'react';
import {Link,NavLink } from 'react-router-dom';

import { IoSearchOutline } from 'react-icons/io5'
import Search from '../../components/search/Search';
import MenuToggleBtn from '../menuToggleBtn/MenuToggleBtn';
import './header.css'

function Header({ withSearchBar }) {
    return (
        <div className="container">
            <div className="header">
                <Link to="/" className="logo">Tattoo</Link>
                <NavLink to="explore" className="menu">Explore</NavLink>
                <a href="#default" className="menu  ">Tattoos</a>
                <div className="dropdown">
                    <a href="#default" className="menu dropbtn ">Read</a>
                    <div className="dropdown-content">
                        <a href="#">Articles</a>
                        <a href="#">Guides</a>
                    </div>
                </div>
                <div className="header-right">
                    <a className="search" href="#home"> {<IoSearchOutline size={27} />}</a>
                    <MenuToggleBtn />
                </div>
            </div>
            <div>
                {
                    withSearchBar && <Search />
                }
            </div>
        </div>

    )
}

export default Header
