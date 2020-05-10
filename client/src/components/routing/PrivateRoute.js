import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import Spinner from '../layout/Spinner';


//// I did not remove the return() just to test
const PrivateRoute = ({ 
    component: Component, 
    auth: { isAuthenticated, loading }, 
    ...rest 
}) => 
      
          (
            <Route {...rest} render={props => !isAuthenticated && !loading ? 
            ( <Redirect to='/login' />) : (<Component {...props} /> )} /> 
            
            )
            
    
  

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);