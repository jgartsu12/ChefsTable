import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import PhlogManager from '../pages/phlog-manager';

function DisplayLoginAndSignupForms(props) {
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
        <button onClick={props.handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    );

    return <div>{props.loggedIn ? loggedInNav : loggedOutNav}</div>
}

export default DisplayLoginAndSignupForms;

DisplayLoginAndSignupForms.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    // handleLogout: PropTypes.func.isRequired
};