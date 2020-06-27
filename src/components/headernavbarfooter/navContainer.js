import React from "react";
// import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import Header from './header';

const NavContainer = props => {
    
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={route} activeClassName='nav-link-active'>
                    {linkText}
                </NavLink>
            </div>
        );
    };

    return (
        <div>
            <Header />    
            <div className='navbar-wrapper'>
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                        <div className='navbar-links-btn-txt'>
                            HOME
                        </div>
                    </NavLink>
                </div>
            
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/about-us' activeClassName='nav-link-active'>
                        <div className='navbar-links-btn-txt'>
                            ABOUT US
                        </div>
                    </NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink exact to='/soups' activeClassName='nav-link-active'>
                        <div className='navbar-links-btn-txt'>
                            SOUPS
                        </div>
                    </NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink exact to='/breakfast-menu' activeClassName='nav-link-active'>
                        <div className='navbar-links-btn-txt'>
                            BREAKFAST
                        </div>
                    </NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink exact to='/lunch-menu' activeClassName='nav-link-active'>
                        <div className='navbar-links-btn-txt'>
                            LUNCH
                        </div>
                    </NavLink>
                </div> 

                <div className='nav-link-wrapper'>
                    <NavLink exact to='/phlog' activeClassName='nav-link-active'>
                        <div className='navbar-links-btn-txt'>
                            Photo Blog
                        </div>
                    </NavLink>
                </div>
           
                {
                    props.loggedIn ? (
                        dynamicLink('/phlog-manager', 'Phlog Manager')
                    ) : null
                }
                

                {/* <div className='logout'> */}
                    {
                        props.loggedIn ? 
                    
                        <div className='nav-link-wrapper'>
                            <a onClick={props.handleLogout}>
                                <i className="fas fa-sign-out-alt"></i>
                            </a>
                        </div>

                        : null
                    }
                </div>

            </div>
        // </div>
    );
};

export default NavContainer;