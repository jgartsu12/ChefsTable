import React, { Component } from "react";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux'

import { logout } from '../../store/actions/auth'

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
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

               <div className='nav-link-wrapper'>
                    <NavLink exact to='/phlog-manager/' activeClassName='nav-link-active'>
                        <button className='navbar-links-btn'>
                            <div className='navbar-links-btn-txt'>
                                Phlog Manager
                            </div>
                        </button>
                    </NavLink>
                </div>  

                {/* {
                    this.props.isAuthenticated ?

                    <div className='nav-link-wrapper'>
                        <button className='navbar-links-btn' onClick={this.props.logout}>
                            <div className='navbar-links-btn-txt'>
                                Logout
                            </div>
                        </button>
                    </div>
                    :
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/login/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    Login
                                </div>
                            </button>
                        </NavLink>
                    </div>  
                } */}
            </div>
        );
    }
}



// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout())
//   };
// };

export default withRouter(Navbar);
// export default withRouter(connect(null, mapDispatchToProps)(Navbar));
 