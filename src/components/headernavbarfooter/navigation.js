import React from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

// import axiosInstance from '../../helpers/auth/axiosHelper';

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
                    <a onClick={this.props.handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default withRouter(Navigate);