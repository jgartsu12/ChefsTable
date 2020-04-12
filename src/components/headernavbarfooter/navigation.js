import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Navigate = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={route} activeClassName='nav-link-active'>
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios
            .delete('http://127.0.0.1:8000/rest-auth/login/', { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    props.history.push('/');
                    props.handleSuccessfulLogout();
                }
                return response.data;
            })
            .catch(error => {
                console.log('Sign out error', error);
        });
    }

    return (
        <div className='nav-wrapper'>
            <div className='nav-link-wrapper'>
                <NavLink exact to='/' activeClassName='nav-link-active'>
                    <button className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            HOME
                        </div>
                    </button>
                </NavLink>
            </div>
                    
            <div className='nav-link-wrapper'>
                <NavLink exact to='/about-us/' activeClassName='nav-link-active'>
                    <button className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            ABOUT US
                        </div>
                    </button>
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/soups/' activeClassName='nav-link-active'>
                    <button className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            SOUPS
                        </div>
                    </button>
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/breakfast-menu/' activeClassName='nav-link-active'>
                    <button className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            BREAKFAST
                        </div>
                    </button>
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/lunch-menu/' activeClassName='nav-link-active'>
                    <button className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            LUNCH
                        </div>
                    </button>
                </NavLink>
            </div> 

            <div className='nav-link-wrapper'>
                <NavLink exact to='/phlog/' activeClassName='nav-link-active'>
                    <button className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            Photo Blog
                        </div>
                    </button>
                </NavLink>
            </div>

            {props.loggedInStatus === 'LOGGED_IN' ? (
                dynamicLink('/phlog-manager', 'Phlog Manager')
            ) : null}

            <div className='sign-out-btn'>
                LOG OUT
                {props.loggedInStatus === 'LOGGED_IN' ? (
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default withRouter(Navigate);