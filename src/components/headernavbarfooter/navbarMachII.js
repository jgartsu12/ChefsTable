import React, { Component } from "react";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


class AuthenticatedNavbar extends Component {

    DisplayLoginAndSignupForms = (props) => {
        const loggedOutNav = (
            <div className='login-and-signup-btns'>
                <button onClick={() => props.displayForm('login')}>
                    Login
                </button>
                
                <button onClick={() => props.displayForm('signup')}>
                    Sign Up
                </button>
            </div>
        );
    
        const loggedInNav = (
            <div className='navbar-wrapper'>
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/phlog-manager' activeClassName='nav-link-active'>
                            <div className='navbar-links-btn-txt'>
                                Phlog Manager
                            </div>
                    </NavLink>
                </div>

                <button onClick={props.handleLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                </button>
            </div>
        );
    }

    render() {
        return (
            <div>
               {this.props.loggedIn ? this.state.loggedInNav : this.state.loggedOutNav}
        
                <div className='navbar-wrapper'>
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/' activeClassName='nav-link-active'>
                                <div className='navbar-links-btn-txt'>
                                    HOME
                                </div>
                        </NavLink>
                    </div>
                
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/about-us/' activeClassName='nav-link-active'>
                                <div className='navbar-links-btn-txt'>
                                    ABOUT US
                                </div>
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/soups/' activeClassName='nav-link-active'>
                                <div className='navbar-links-btn-txt'>
                                    SOUPS
                                </div>
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/breakfast-menu/' activeClassName='nav-link-active'>
                                <div className='navbar-links-btn-txt'>
                                    BREAKFAST
                                </div>
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/lunch-menu/' activeClassName='nav-link-active'>
                                <div className='navbar-links-btn-txt'>
                                    LUNCH
                                </div>
                        </NavLink>
                    </div> 

                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/phlog/' activeClassName='nav-link-active'>
                                <div className='navbar-links-btn-txt'>
                                    Photo Blog
                                </div>
                        </NavLink>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(AuthenticatedNavbar);