import React from 'react';
import {Navigate, Outlet, Route} from 'react-router-dom';
import PropTypes from 'prop-types'
export const PrivateRoute=({children,isAuth})=>{
    // console.log(rest.location.pathname)
    // localStorage.setItem('path',rest.location.pathname)


    return(((isAuth)?children:<Navigate to="login"/>))
}
