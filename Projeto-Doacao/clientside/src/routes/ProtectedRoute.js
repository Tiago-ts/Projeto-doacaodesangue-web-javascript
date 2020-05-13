import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = (props) =>{ 
    console.log('protecte')
    let isAuth = false;
    if(localStorage.getItem('token')){
    isAuth = true;
    }
    return isAuth ? <Route { ...props} /> : <Redirect to ='/' />
}

export default withRouter(ProtectedRoute);