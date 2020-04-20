import React from 'react';
import PropTypes from 'prop-types';


function Nav(props) {
    const loggedOutNav = (
        <ul>
            <li onClick={() => props.displayForm('login')}>
                <button>
                    Login
                </button>
            </li>

            <li onClick={() => props.displayForm('signup')}>
                <button>
                    Sign Up
                </button>
            </li>
        </ul>
    );

    const loggedInNav = (
        <ul>

         

            <li onClick={props.handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
            </li>

        </ul>
    );

    return <div>{props.loggedIn ? loggedInNav : loggedOutNav}</div>
}

export default Nav;

Nav.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
};