import React, { Component } from "react";
// import { withRouter } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { logout } from '../../store/actions/auth';
// // import AdminRoute from '../Auth/AdminRoute';

class Navbar extends Component {
    render() {
        const { isAuthenticated } = this.props;
        
        const phlogManagerLink = (
            <div className='nav-link-wrapper'>
                <NavLink exact to='/phlog-manager/' activeClassName='nav-link-active'>
                    <button key='1' className='navbar-links-btn'>
                        <div className='navbar-links-btn-txt'>
                            Phlog Manager
                        </div>
                    </button>
                </NavLink>
            </div>
        );

        const logoutLink = (
            <div className='nav-link-wrapper'>
                <NavLink exact to='/' activeClassName='nav-link-active'>
                    <button key='1' className='navbar-links-btn' onClick={this.props.logout()}>
                        <div className='navbar-links-btn-txt'>
                            Logout
                        </div>
                    </button>
                </NavLink>
            </div>
        );

        return (
            <div>
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
                
                    {/* <div className='phlog-manager-signout-link'> */}
                        {
                            isAuthenticated ? (this.props.logoutLink && this.props.phlogManagerLink) : (null)
                        }
                    {/* </div> */}
                
                </div>  
            </div>
        );
    }
}
   {/* &&  
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/phlog-manager/' activeClassName='nav-link-active'>
                            <button className='navbar-links-btn'>
                                <div className='navbar-links-btn-txt'>
                                    Phlog Manager
                                </div>
                            </button>
                        </NavLink>
                    </div>  */}



const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
    // loggedIn: () => dispatch(actions.authCheckState())
  };
};

// export default withRouter(Navbar);
export default connect(
        mapStateToProps,
        mapDispatchToProps
    ) (Navbar);
 