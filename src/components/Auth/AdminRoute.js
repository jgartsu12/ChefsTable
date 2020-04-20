import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import * as actions from '../../store/actions/auth';
// destructuring props
const AdminRoute = ({ component: Component, ...loggedInStatus }) => (
    <Route {...loggedInStatus} render={(props) => (
        loggedInStatus.isAuthenticated === true 
        ? <Component {...props} />
        : <Redirect to= {{
            pathname: '/phlog-manager',
            state: { from: props.location }
        }} />
    )} />
);

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
  return {
    loggedInStatus: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoute);





































// import { Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

// import * as actions from '../../store/actions/auth';

// const AdminRoute = isAdminLoggedOut => {
//     const dynamicLink = (route, linkText, key) => {
//         return (
//             <div className='admin-link-login'>
//                 <NavLink to={route} activeClassName='admin-link-active'>
//                     <button key={key} className='navbar-links-btn'>
//                         <div className='navbar-links-btn-txt'>
//                             {linkText}
//                         </div>
//                     </button>
//                 </NavLink>
//             </div>
//         );
//     }

//     {
//         props.isAuthenticated ?

//         <button key='2' onClick={this.props.isAdminLoggedOut()}>
//             Logout
//         </button>

//         :

//         dynamicLink('/login/', 'Login', '2')
//     }

//     dynamicLink('/', 'Home', '1')
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         isAdminLoggedOut: () => dispatch(actions.logout())
//     }
// }

// export default connect(null,mapDispatchToProps)(AdminRoute);